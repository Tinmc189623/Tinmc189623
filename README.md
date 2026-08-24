# 🧑‍💻 Tinmc189623

**从晶体管到Transformer，自己造轮子的人。**

我是 Tinmc189623，[Nexsteaduser](https://nexsteaduser.com) 与 Nexlyh 的创始人。我的信条很简单：**如果我不理解一个东西是如何从零构建的，我就不会安心地使用它。** 这驱使我从操作系统的 Ring 0 特权级写到浏览器引擎的渲染管线，从自研的 Go 后端框架写到终端里的 AI Agent。

我不满足于做 API 的调包侠，我享受的是**拆解、重构、然后超越**的过程。

[![Website](https://img.shields.io/badge/🌐-nexsteaduser.com-1e90ff?style=flat-square&logo=google-chrome)](https://nexsteaduser.com)
[![GitHub followers](https://img.shields.io/github/followers/Tinmc189623?label=Follow&style=social)](https://github.com/Tinmc189623)

---

## 💡 我的技术哲学：为什么要“重复造轮子”？

为什么有了 Linux 还要写 [Tungsten](https://github.com/Tinmc189623/Tungsten)？有了 Chromium 还要写 [YSU](https://github.com/Tinmc189623/YSU)？有了 WordPress 还要写 [VaelorCMS](https://github.com/Tinmc189623/VaelorCMS)？

我的回答很简单：**因为“现成的”模糊了技术的边界。**
- 写内核，是为了亲手触摸到 CPU 的陷阱门和页表；
- 写浏览器引擎，是为了理解 URL 变成像素的那条漫长管道；
- 写 CMS 而不用 Gin/GORM，是为了让 SQL 和 HTTP 协商在自己的掌控之中；
- 写 AI 助手，是为了榨干大模型在本地终端里的每一分潜力。

这就是我的开发方式——**以造轮子为乐，以掌控底层为荣。**

---

## 🔭 正在构建的生态全景

我的项目不是孤立的，它们共同构成了一套从底层硬件到上层应用的技术矩阵。以下是目前所有公开仓库的深度解读：

### 1. [Tungsten](https://github.com/Tinmc189623/Tungsten) —— 四层特权级 x86_64 内核
> *技术栈：Rust (Core) + Zig (HAL) + FreeType | License: GPL v3*

这是我最硬核的系统级项目。与常规内核不同，Tungsten 实现了**四层特权级架构（Ring 0 - Ring 3）**，重点强化了 Ring 0 / Ring 1 的隔离设计。Rust 保证了内存安全，Zig 则作为硬件抽象层无痛地处理 C 库的交叉编译。目前它已经能在 QEMU 中独立引导，并初步支持键盘和帧缓冲。这个内核的源码完全开放，但完整的用户态操作系统目前作为闭源项目保留——如果你想亲眼看着一个操作系统从 0 开始引导，这里就是起点。

### 2. [YSU](https://github.com/Tinmc189623/YSU) —— Rust 浏览器内核（YSU）
> *技术栈：Rust | License: GNU AGPL v3*

Web 是现代的操作系统，而浏览器是它的内核。YSU 是我对浏览器工作原理的硬核拆解。它用 Rust 从头实现 HTML 的词法/语法解析、CSS 样式计算和基础的布局引擎。虽然离完整浏览器还远，但它的目标是成为教育领域探索浏览器内部机制的范本。如果你对“网页是如何画出来的”充满好奇，这个仓库会给你答案。

### 3. [VaelorCMS](https://github.com/Tinmc189623/VaelorCMS) —— 纯自研 Go 内容管理系统
> *技术栈：Go + SQLite | License: GNU AGPL v3*

市面上不缺 CMS，但缺**完全不用第三方框架**的 CMS。VaelorCMS 包含了我自研的 Vaelor Core：一个轻量级的路由分发器、一个支持链式操作的 ORM，以及一套简洁的中间件体系。版本号已经推进到 1.0.0，这意味着它已经在我的实际生产环境中跑起来了。它的代码结构非常清晰，适合想学习 Go 底层网络编程和数据库交互的后端开发者阅读。

### 4. [Coder](https://github.com/Tinmc189623/Coder) —— 终端生产级 AI 编程助手
> *技术栈：C# / .NET 11 | 当前版本：v0.3.0*

这是离我日常工作最近的项目。Coder 不是一个简单的 API 包装器，而是一个拥有完整 TUI（终端交互界面）的 AI Agent。它支持流式 Markdown 渲染、工具调用状态的可视化、细致的权限控制，以及**分层配置系统**（项目级 `.coder/settings.toml` + 全局 `~/.coder/settings.toml`）。它兼容 OpenAI、Anthropic 和 Ollama，意味着无论你用云端大模型还是本地开源模型，它都能无缝接入。我的目标是让它成为每个终端爱好者的标配 AI 搭档。

### 5. [YouRight-AI](https://github.com/Tinmc189623/YouRight-AI) —— “大智障” AI（讽刺实验）
> *技术栈：油饼语言 (YouBing Language)*

这是我在严肃开发中的一丝幽默。YouRight-AI 打着“大智障 AI 程序”的旗号，核心逻辑是“你说得对”（默认复读 35 次）和“双重失忆系统”。它用我自创的“油饼语言”写成，包含 15 个依赖包，其中一部分“纯属摆设”。这个项目的存在是为了提醒我自己（以及来访者）：**技术圈不要被过度的 AI 神话冲昏头脑，偶尔也要保持讽刺和清醒。**

### 6. [OpenSoke](https://github.com/Tinmc189623/OpenSoke) —— 星火新项目
> *创建于 2026 年 8 月 24 日*

这是一个刚刚诞生的空白仓库，代号“Open Soke 标准版”。具体方向还在酝酿中，但可以确定的是，它依然会延续我一贯的风格——**从零开始，死磕底层。** 给它一点时间，它会成长为一个有趣的东西。

---

## 🛠️ 技术栈精准画像

| 领域 | 精通/主力 | 探索/兴趣 |
| :--- | :--- | :--- |
| **系统编程** | Rust（夜版）、Zig | C++、汇编（x86_64） |
| **后端开发** | Go（自研路由/ORM） | SQLite、PostgreSQL |
| **AI / LLM** | C# (.NET 11)、提示工程、工具调用 | ONNX、本地量化部署 |
| **前端/渲染** | HTML5/CSS 解析、布局计算 | WebAssembly、Skia |
| **构建工具** | Make、Cargo、dotnet CLI | Nix、交叉编译 |

---

## 📈 GitHub 活动与统计

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Tinmc189623&show_icons=true&theme=radical&count_private=true" alt="GitHub Stats" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tinmc189623&layout=compact&theme=radical&langs_count=8" alt="Top Languages" width="48%" />
</p>

---

## 🗺️ 2026 下半年路线图

- **Tungsten v0.3.0**：完善内存管理单元（MMU），引入简易的进程调度。
- **YSU**：实现 CSS Flexbox 布局的初步支持。
- **Coder v0.5.0**：增加本地代码索引功能（RAG），让 AI 更懂你的项目上下文。
- **OpenSoke**：揭开面纱，发布第一个可运行的 Demo。

---

## 🤝 关于协作与联系

虽然我一个人死磕底层，但我并不排斥有趣的合作。如果你：
- 对操作系统、浏览器引擎或自研 AI 工具有狂热兴趣；
- 能接受“不迁就、只讲技术”的交流风格；
- 想探讨 Rust 和 Zig 的混编，或者 Go 的底层调度。

欢迎通过以下方式找到我：

- 🌐 个人官网：[nexsteaduser.com](https://nexsteaduser.com)
- 🏢 组织主页：[Nexsteaduser](https://github.com/Nexsteaduser) · [Nexlyh](https://github.com/Nexlyh)
- 📧 （网站上有我的邮箱，欢迎来信）

---

> *“态度永远好，事情永远不办。”*  
> —— YouRight-AI 的核心价值观，也是我留给这个浮躁时代的一句玩笑。
