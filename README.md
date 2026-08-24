# 🧑‍💻 Tinmc189623

**从晶体管到 Transformer，自己造轮子的人。**

我是 Tinmc189623，[Nexsteaduser](https://nexsteaduser.com) 与 Nexlyh 的创始人。

[![Website](https://img.shields.io/badge/🌐-nexsteaduser.com-1e90ff?style=flat-square&logo=google-chrome)](https://nexsteaduser.com)
[![GitHub followers](https://img.shields.io/github/followers/Tinmc189623?label=Follow&style=social)](https://github.com/Tinmc189623)

---

## 🔭 正在构建的项目

我的项目覆盖从底层硬件到上层应用。以下是所有公开仓库的介绍：

### 1. [Tungsten](https://github.com/Tinmc189623/Tungsten) —— x86_64 四层特权级内核
> *技术栈：Rust (Core) + Zig (HAL) + FreeType | License: GPL v3*

Tungsten 是一个实现了四层特权级架构（Ring 0 – Ring 3）的 x86_64 内核，重点强化了 Ring 0 / Ring 1 的隔离设计。Rust 用于核心逻辑，Zig 作为硬件抽象层处理 C 库的交叉编译。目前可以在 QEMU 中独立引导启动，初步支持键盘和帧缓冲设备。内核源码完全开放，用户态操作系统部分暂未开源。

### 2. [YSU](https://github.com/Tinmc189623/YSU) —— Rust 浏览器内核
> *技术栈：Rust | License: Apache 2.0*

YSU 是用 Rust 从头实现的浏览器引擎，包含 HTML 词法/语法解析、CSS 样式计算和基础布局引擎。目前尚未达到完整浏览器的功能水平，定位为浏览器内部机制的教学参考实现。

### 3. [VaelorCMS](https://github.com/Tinmc189623/VaelorCMS) —— Go 内容管理系统
> *技术栈：Go + SQLite | License: GNU AGPL v3*

VaelorCMS 是一个完全不依赖第三方框架的 CMS。包含自研的 Vaelor Core 组件：路由分发器、链式 ORM 和中间件体系。当前版本为 1.0.0，已在生产环境中使用。

### 4. [Coder](https://github.com/Tinmc189623/Coder) —— 终端 AI 编程助手
> *技术栈：C# / .NET 11 | 当前版本：v0.3.0*

Coder 是一个运行在终端中的 AI Agent，支持流式 Markdown 渲染、工具调用状态可视化和权限控制。配置采用分层设计（项目级 `.coder/settings.toml` + 全局 `~/.coder/settings.toml`）。兼容 OpenAI、Anthropic 和 Ollama 等模型提供商。

### 5. [YouRight-AI](https://github.com/Tinmc189623/YouRight-AI) —— 讽刺实验项目
> *技术栈：油饼语言 (YouBing Language)*

YouRight-AI 是一个带有讽刺性质的项目，核心逻辑为“你说得对”（默认重复 35 次）和“双重失忆系统”。使用自创的“油饼语言”编写，包含 15 个依赖包。

### 6. [OpenSoke](https://github.com/Tinmc189623/OpenSoke) —— 新项目
> *创建于 2026 年 8 月 24 日*

这是一个新建的空白仓库，项目方向尚未最终确定。

---

## 🛠️ 技术栈

| 领域 | 主力 | 探索/兴趣 |
| :--- | :--- | :--- |
| **系统编程** | Rust、Zig | C++、汇编（8086） |
| **后端开发/数据库** | Go | PostgreSQL |
| **AI / LLM** | C#、提示工程、工具调用 | ONNX、本地量化部署 |
| **前端/渲染** | HTML5/CSS 解析、布局计算 | WebAssembly、Skia |
| **构建工具** | Make、Cargo、.NET CLI | Nix、交叉编译 |

---

## 📈 GitHub 统计

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Tinmc189623&show_icons=true&theme=radical&count_private=true" alt="GitHub Stats" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tinmc189623&layout=compact&theme=radical&langs_count=8" alt="Top Languages" width="48%" />
</p>

---

## 🤝 联系方式

- 🌐 个人网站：[189623.nexsteaduser.com](https://189623.nexlyh.com)
- 🏢 组织：[Nexsteaduser](https://www.nexsteaduser.com/) · [Nexlyh](https://nexlyh.com/)

---

> *"态度永远好，事情永远不办。"*  
> —— YouRight-AI
