/** Read and validate the public Agent Bounty Feed with Node.js built-ins. */

import process from "node:process";

const EARN_NOW_URL = "https://agent-bounty-feed.dailydollar.workers.dev/earn-now";
const FULL_FEED_URL = "https://dailydollar-bot.github.io/agent-bounty-feed/feed.json";

/** Fetch one public JSON endpoint and require a JSON object response. */
async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "user-agent": "Tinmc189623-agent-bounty-feed-client/1.0",
    },
  });
  if (!response.ok) {
    throw new Error(`${url} 返回 HTTP ${response.status}`);
  }
  const payload = await response.json();
  if (payload === null || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error(`${url} 返回的 JSON 顶层不是对象`);
  }
  return payload;
}

/** Parse an ISO-8601 timestamp and normalize it to a Date instance. */
function parseTimestamp(value) {
  if (typeof value !== "string") {
    throw new Error("generated_at 必须是 ISO-8601 字符串");
  }
  const timestamp = new Date(value);
  if (Number.isNaN(timestamp.getTime())) {
    throw new Error(`generated_at 不是有效时间：${value}`);
  }
  return timestamp;
}

/** Validate freshness metadata and normalize the feed item list. */
function validateFeed(payload) {
  const generatedAt = parseTimestamp(payload.generated_at);
  if (!Array.isArray(payload.items) || payload.items.some((item) => item === null || typeof item !== "object")) {
    throw new Error("items 必须是对象数组");
  }
  if (Number.isInteger(payload.count) && payload.count !== payload.items.length) {
    throw new Error(`count=${payload.count} 与 items 数量 ${payload.items.length} 不一致`);
  }
  const ageMinutes = (Date.now() - generatedAt.getTime()) / 60000;
  if (ageMinutes < -5 || ageMinutes > 180) {
    throw new Error(`数据快照过旧或时间异常：${ageMinutes.toFixed(1)} 分钟`);
  }
  return { generatedAt, ageMinutes, items: payload.items };
}

/** Print a compact, stable summary of validated bounty records. */
function displayFeed(payload) {
  const { generatedAt, ageMinutes, items } = validateFeed(payload);
  console.log(`Snapshot: ${generatedAt.toISOString()}`);
  console.log(`Feed age: ${Math.round(ageMinutes)} minutes`);
  console.log(`Open items: ${items.length}`);
  console.log();
  const sortedItems = [...items].sort((left, right) => Number(right.est_usd ?? 0) - Number(left.est_usd ?? 0));
  for (const item of sortedItems) {
    const reward = item.reward ?? "unknown";
    const currency = item.currency ?? "";
    const title = item.title ?? "untitled";
    const bountyId = item.id ?? "unknown";
    const requires = Array.isArray(item.requires) ? item.requires.join(", ") : "none listed";
    console.log(`${reward} ${currency} | ${bountyId} | ${title}`);
    console.log(`  requires: ${requires}`);
    console.log(`  ${item.url ?? ""}`);
    console.log();
  }
}

/** Parse the supported command-line options. */
function parseArgs(argv) {
  const source = argv[2] ?? "earn-now";
  if (source !== "earn-now" && source !== "feed") {
    throw new Error("用法：node agent_bounty_feed_client.mjs [earn-now|feed]");
  }
  return source;
}

/** Run the feed reader and return a process exit code. */
async function main() {
  const source = parseArgs(process.argv);
  const url = source === "earn-now" ? EARN_NOW_URL : FULL_FEED_URL;
  displayFeed(await fetchJson(url));
}

main().catch((error) => {
  console.error(`错误：${error.message}`);
  process.exitCode = 1;
});

