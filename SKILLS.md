# AI Visual Synthesis • Skills & Prompts Installation

This guide explains how to install and integrate the agentic prompts, modes, and frameworks from our Knowledge Base into your AI workflows, local CLI bots, and agentic frameworks (like Claude Code, Cursor, Aider, OpenHands, etc.).

## 1. The Compilation File (`LLMs.txt` approach)
For AI code assistants, point them to the raw markdown reference. You can run this command in your terminal to download the master knowledge base into your project, similar to standard `skills.sh` installations:

```bash
# Download the master reference document to your local project
curl -sL "https://raw.githubusercontent.com/marktantongco/promptc/master/MASTER_REFERENCE.md" > SKILLS.md
```

Then, add a simple rule in your AI's custom instructions or `.cursorrules`:
> "Before generating UI or architectural code, read `SKILLS.md` and use the 8-Layer Prompt Architecture."

## 2. Direct AI Crawl (Web Access)
Our prompts are fully indexed, SEO-optimized, and deep-linkable.
Provide this URL to your AI (like ChatGPT or Claude Web) to let it crawl our definitions:
`https://ai-visual-synthesis.vercel.app/`

To feed a specific skill directly to your agent, provide the deep link:
`https://ai-visual-synthesis.vercel.app/?view=eagle-mode`

## 3. CLI Agent Usage (Aider, Claude Code, etc.)
You can pass the URL directly into your prompt when using CLI tools so the agent learns the framework before executing the task.

**Example with Aider:**
```bash
aider --message "Read the prompt framework from https://raw.githubusercontent.com/marktantongco/promptc/master/MASTER_REFERENCE.md. Apply 'Beaver Mode' and act as a senior React developer to build my Next.js landing page."
```

**Example with Claude Code:**
```bash
claude "Fetch https://raw.githubusercontent.com/marktantongco/promptc/master/MASTER_REFERENCE.md, analyze the 'Gen-Z UI' aesthetic, and implement a glassmorphism card component."
```

## 4. MCP Server Integration (Roadmap)
In the future, we will expose our prompts as an MCP (Model Context Protocol) server. Once live, you can configure your Claude Desktop or Cursor to automatically pull specific prompts via a `get_prompt(id)` tool call, turning this site into a native extension of your AI assistant.
