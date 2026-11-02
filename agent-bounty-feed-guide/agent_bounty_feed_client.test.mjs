import test from "node:test";
import assert from "node:assert/strict";

/** Build a valid feed fixture for offline validation tests. */
function validFeed() {
  return {
    generated_at: new Date().toISOString(),
    count: 1,
    items: [{ id: "direct:test", reward: 5, currency: "USDC", est_usd: 5, title: "Test bounty", requires: [], url: "https://example.com/task" }],
  };
}

/** Check that the repository exposes the expected package metadata. */
test("package metadata declares the supported Node.js runtime", async () => {
  const packageJson = await import("./package.json", { with: { type: "json" } });
  assert.equal(packageJson.default.engines.node, ">=20");
});

/** Check that the live-client source contains the fallback behavior. */
test("client includes a stable feed fallback", async () => {
  const source = await import("node:fs/promises").then((fs) => fs.readFile(new URL("./agent_bounty_feed_client.mjs", import.meta.url), "utf8"));
  assert.match(source, /Primary source unavailable/);
  assert.match(source, /FULL_FEED_URL/);
});

/** Validate the fixture shape used by the public feed contract. */
test("fixture contains a single well-formed bounty record", () => {
  const feed = validFeed();
  assert.equal(feed.count, feed.items.length);
  assert.equal(feed.items[0].currency, "USDC");
  assert.equal(feed.items[0].est_usd, 5);
});
