# 🧠 CogniMeet — AI Meeting Intelligence Assistant

CogniMeet is a lightweight AI-powered meeting assistant that converts conversations into structured knowledge.

It automatically transcribes meetings, generates summaries, extracts decisions and action items, and provides basic meeting insights to help teams stay aligned and productive.

---

## ✨ Features (MVP)

### 🎙️ Meeting Transcription
- Converts meeting audio into text
- Speaker-separated transcript
- Supports recorded or live meetings

---

### 📝 AI Meeting Summary
- Concise structured summary
- Key discussion points
- Important highlights

---

### ✅ Action Item Extraction
- Detects tasks discussed in meetings
- Assigns owner (if mentioned)
- Captures deadlines (if mentioned)

Example output:
- "John to share sales report by Friday"
- "Design team to update homepage"

---

### 📌 Decision Detection
- Identifies decisions made during meetings
- Stores them separately from transcript

Example:
- "Team agreed to launch in March"
- "Vendor X selected for deployment"

---

### 📊 Basic Meeting Insights
Simple analytics to understand meeting quality:

- total duration
- number of speakers
- speaking distribution
- number of decisions
- number of action items

---

## 🎯 Why CogniMeet?

Meetings often produce valuable information that gets lost in long transcripts or human memory.

CogniMeet ensures:

- decisions are captured
- tasks are tracked
- discussions are summarized
- meetings become actionable

---

## 🏗️ System Overview

Audio → Speech-to-Text → Transcript  
Transcript → AI Processing → Structured Outputs  

Outputs generated:
- summary
- action items
- decisions
- insights

---

## 🧠 AI Components

CogniMeet uses:

- Speech Recognition (ASR)
- Natural Language Processing
- Large Language Models for extraction
- Text analytics for insights

---

## 📦 Outputs

After each meeting, CogniMeet produces:

- full transcript
- structured summary
- action item list
- decision list
- meeting metrics

---

## 🚀 Use Cases

- team meetings
- project discussions
- client calls
- standups
- planning sessions
- academic meetings

---

## 🛠️ Tech Stack (Example)

Frontend:
- React / Next.js

Backend:
- Python / FastAPI

AI:
- Whisper / Speech-to-Text API
- LLM (OpenAI / local model)

Storage:
- PostgreSQL / MongoDB

---

## 📈 Future Vision

CogniMeet will evolve into an advanced meeting intelligence platform with:

- decision tracking across meetings
- meeting effectiveness scoring
- team collaboration analytics
- AI meeting coach
- enterprise knowledge memory

---

## 👥 Team

CogniMeet is developed as an AI productivity project focused on improving meeting efficiency and organizational clarity.

---

## 📄 License

MIT License