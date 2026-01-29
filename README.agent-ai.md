# Agent AI Setup

Your OpenCode environment is now configured with a high-intelligence Agent AI and multiple AI providers.

## High-Intelligence Multi-Provider Setup

This environment is optimized for maximum intelligence using your personal API keys.

### Brain Hierarchy
1. **Primary (The Brain)**: `openrouter/anthropic/claude-3.7-sonnet`
   - Use for: Coding, Refactoring, Logic.
2. **Secondary (The Speed)**: `google/gemini-2.0-flash`
   - Use for: Reading files, Searching, Titles (Automatic).
3. **Backup (The Utility)**: `groq/llama-3.3-70b-versatile`
   - High speed, great for quick checks.

### Switching Models
You can manually switch if needed:
- `/model openrouter/anthropic/claude-3.7-sonnet`
- `/model google/gemini-2.0-pro-exp-02-05` (Extra high-reasoning, often free)

### Mobile Optimizations (Termux)
- **Cloud Processing**: All models run in the cloud via your keys, keeping your phone cool and saving battery.
- **Concise Response**: Agent is set to be extra brief on small screens.

## How to use Agent AI

- **Main Model**: `opencode/claude-sonnet-4-5` (via OpenCode/Anthropic) - Used for complex reasoning and coding.
- **Small Model**: `groq/llama-3.3-70b-versatile` (via Groq) - Used for lightweight tasks like summaries and titles to ensure speed.
- **Local Model**: `ollama/qwen2.5-coder:7b` (via Ollama) - Available for local offline tasks.

## How to use Agent AI

1. **In the TUI/Chat**:
   Type `/agent-ai` followed by your request. This will activate the custom agent defined in `.opencode/agent/agent-ai.md`.

2. **In GitHub Actions**:
   The workflow in `.github/workflows/opencode.yml` is already set to use `opencode/agent-ai`.

## Automatic Switching

OpenCode automatically uses the `small_model` (Groq) for:
- Generating session titles.
- Summarizing long contexts.
- Quick metadata tasks.

It uses the main `model` (Claude) for:
- Writing code.
- Analyzing complex bugs.
- Executing tools.

## Ollama Support

To use Ollama locally:
1. Ensure Ollama is running (`ollama serve`).
2. Pull the recommended model: `ollama pull qwen2.5-coder:7b`.
3. You can switch to it manually using the `/models` command in the TUI or by setting `model: ollama/qwen2.5-coder:7b` in your config.

## API Keys

Your keys have been saved to `.env`. Ensure they are also added to your GitHub repository secrets if you plan to use the GitHub Action.
