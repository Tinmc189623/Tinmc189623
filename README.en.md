# 🧑‍💻 Tinmc189623

**From transistors to Transformers — a builder of wheels.**

I'm Tinmc189623, founder of [Nexsteaduser](https://nexsteaduser.com) and Nexlyh. My creed is simple: **if I don't understand how something is built from zero, I won't feel comfortable using it.** This drives me from the Ring 0 privilege levels of operating systems to the rendering pipelines of browser engines, from Go backends to terminal-based AI agents.

I'm not satisfied with being an API plumber; I enjoy **tearing things down, rebuilding them, and going beyond.**

[![Website](https://img.shields.io/badge/🌐-nexsteaduser.com-1e90ff?style=flat-square&logo=google-chrome)](https://nexsteaduser.com)
[![GitHub followers](https://img.shields.io/github/followers/Tinmc189623?label=Follow&style=social)](https://github.com/Tinmc189623)

---

## 💡 My Philosophy: Why Reinvent the Wheel?

Why build [Tungsten](https://github.com/Tinmc189623/Tungsten) when Linux exists? Why write [YSU](https://github.com/Tinmc189623/YSU) when Chromium is there? Why create [VaelorCMS](https://github.com/Tinmc189623/VaelorCMS) instead of using WordPress?

My answer is simple: **"Off‑the‑shelf" blurs the boundaries of technology.**
- Writing a kernel lets me touch the CPU's trap gates and page tables firsthand.
- Writing a browser engine lets me understand the long pipeline from URL to pixels.
- Writing a CMS without Gin/GORM puts SQL and HTTP negotiation under my full control.
- Writing an AI assistant squeezes every bit of potential out of large models in my local terminal.

This is my way of developing — **joy in wheel‑building, pride in owning the low‑level.**

---

## 🔭 The Ecosystem I'm Building

My projects are not isolated; they form a technology matrix from bare metal to high‑level applications. Here's an in‑depth look at all my public repositories:

### 1. [Tungsten](https://github.com/Tinmc189623/Tungsten) — A Four‑Level Privilege x86_64 Kernel
> *Stack: Rust (Core) + Zig (HAL) + FreeType | License: GPL v3*

This is my hardest‑core system project. Unlike conventional kernels, Tungsten implements a **four‑level privilege architecture (Ring 0 – Ring 3)**, with a strong focus on Ring 0 / Ring 1 isolation. Rust ensures memory safety, while Zig serves as the hardware abstraction layer to seamlessly handle cross‑compilation of C libraries. It already boots independently in QEMU and has preliminary support for keyboard and framebuffer. The kernel source is fully open, but the full userspace OS remains closed‑source for now — if you want to watch an OS boot from scratch, this is the place to start.

### 2. [YSU](https://github.com/Tinmc189623/YSU) — A Rust Browser Engine (YSU)
> *Stack: Rust | License: Apache 2.0*

The web is the modern OS, and the browser is its kernel. YSU is my hard‑core deconstruction of how browsers work. Written in Rust, it implements HTML lexical/syntax parsing, CSS style computation, and a basic layout engine from the ground up. It's far from a full browser, but its goal is to become a reference for exploring browser internals in education. If you're curious about "how web pages are drawn," this repo will give you answers.

### 3. [VaelorCMS](https://github.com/Tinmc189623/VaelorCMS) — A Pure Go CMS
> *Stack: Go + SQLite | License: GNU AGPL v3*

There's no shortage of CMSs, but there's a shortage of **CMSs that use zero third‑party frameworks**. VaelorCMS includes my self‑developed Vaelor Core: a lightweight router, a chain‑able ORM, and a clean middleware system. It has reached version 1.0.0, meaning it's already running in my actual production environment. Its code structure is clear and is a great read for backend developers who want to learn Go's low‑level networking and database interactions.

### 4. [Coder](https://github.com/Tinmc189623/Coder) — A Production‑Grade Terminal AI Coding Assistant
> *Stack: C# / .NET 11 | Current version: v0.3.0*

This is the project closest to my daily work. Coder is not a simple API wrapper; it's an AI Agent with a full TUI (terminal user interface). It supports streaming Markdown rendering, visualisation of tool call status, granular permission control, and a **layered configuration system** (project‑level `.coder/settings.toml` + global `~/.coder/settings.toml`). It works with OpenAI, Anthropic, and Ollama, meaning it seamlessly integrates with both cloud‑based and local open‑source models. My goal is to make it the go‑to AI companion for every terminal enthusiast.

### 5. [YouRight‑AI](https://github.com/Tinmc189623/YouRight‑AI) — The "Big Idiot" AI (Satirical Experiment)
> *Stack: YouBing Language*

This is a touch of humour in my serious development work. YouRight‑AI bills itself as "The Big Idiot AI Program", with core logic of "you're right" (repeating it 35 times by default) and a "double amnesia system". It's written in my own esolang "YouBing Language", with 15 dependencies, some of which are "purely decorative". This project exists to remind myself (and visitors) that **the tech world should not be blinded by AI hype — a dose of satire and critical thinking is healthy.**

### 6. [OpenSoke](https://github.com/Tinmc189623/OpenSoke) — A Brand‑New Spark
> *Created on 2026‑08‑24*

This is a freshly created blank repository, codenamed "Open Soke Standard Edition". The exact direction is still brewing, but one thing is certain: it will follow my consistent style — **start from zero, fight at the low‑level.** Give it some time; it will grow into something interesting.

---

## 🛠️ Tech Stack Snapshot

| Domain | Primary | Exploring / Interest |
| :--- | :--- | :--- |
| **Systems Programming** | Rust, Zig | C++, Assembly (8086) |
| **Backend / Databases** | Go | PostgreSQL |
| **AI / LLM** | C#, Prompt Engineering, Tool Calling | ONNX, Local Quantised Deployment |
| **Frontend / Rendering** | HTML5/CSS Parsing, Layout Computation | WebAssembly, Skia |
| **Build Tools** | Make, Cargo, .NET CLI | Nix, Cross‑compilation |

---

## 📈 GitHub Activity & Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Tinmc189623&show_icons=true&theme=radical&count_private=true" alt="GitHub Stats" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tinmc189623&layout=compact&theme=radical&langs_count=8" alt="Top Languages" width="48%" />
</p>

---

## 🗺️ Roadmap for Late 2026

- **Tungsten v0.3.0**: Improve the Memory Management Unit (MMU) and introduce simple process scheduling.
- **YSU**: Add preliminary support for CSS Flexbox layout.
- **Coder v0.5.0**: Add local code indexing (RAG) to give the AI better project context.
- **OpenSoke**: Unveil the project and release the first runnable demo.

---

## 🤝 Collaboration & Contact

Although I mostly work alone at the low level, I'm open to interesting collaborations. If you:
- Are passionate about operating systems, browser engines, or self‑built AI tools;
- Can handle my straightforward communication style;
- Want to discuss Rust/Zig interop or Go's low‑level scheduling.

Feel free to reach out via:

- 🌐 Personal site: [189623.nexsteaduser.com](https://189623.nexsteaduser.com)
- 🏢 Organisations: [Nexsteaduser](https://www.nexsteaduser.com/) · [Nexlyh](https://nexlyh.com/)
- 📧 (you'll find my email on the website — welcome to write.)

---

> *"Always a good attitude, never gets anything done."*  
> — The core value of YouRight‑AI, and a joke I leave for this hype‑driven era.
