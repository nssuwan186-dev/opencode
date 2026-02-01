import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const AGENT_PROMPT = fs.readFileSync('.opencode/agent/agent-ai.md', 'utf-8');

async function runAgent(userInput) {
  console.log('--- Agent AI is thinking (Using Claude 3.7 Sonnet) ---');
  
  try {
    const { text } = await generateText({
      model: anthropic('claude-3-7-sonnet-20250219'),
      system: AGENT_PROMPT,
      prompt: userInput,
    });

    console.log('\nAgent Response:\n');
    console.log(text);
  } catch (error) {
    console.error('Error running agent:', error.message);
    console.log('Falling back to Gemini...');
    
    // Fallback to Gemini
    const { text } = await generateText({
      model: google('gemini-2.0-flash-exp'),
      system: AGENT_PROMPT,
      prompt: userInput,
    });
    console.log(text);
  }
}

const input = process.argv.slice(2).join(' ');
if (!input) {
  console.log('Please provide a prompt. Usage: node run-ai.js "your question"');
} else {
  runAgent(input);
}

