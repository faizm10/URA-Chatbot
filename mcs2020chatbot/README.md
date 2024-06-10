# MCS*2020 Information Management Chatbot

## Description
This chatbot is designed to support students of the Information Management course by providing quick, reliable answers to their queries. It aims to enhance learning and student engagement through real-time academic support. Currently, in its beta testing phase, the chatbot serves as an AI Teacher Assistant (TA), poised to revolutionize classroom interaction by providing personalized learning experiences and increasing teaching efficiency.

## Features
- **Interactive Q&A**: Answers to queries related to information management theories, data models, and current technological trends.
- **Resource Navigation**: Guidance on how to access course materials, including textbooks and research papers.

## Beta Testing
By participating in beta testing, students engage directly with an emerging technology, contributing to the development of a potential university-wide service. This hands-on experience in product development allows students to provide feedback on the chatbot, enhancing their understanding of high-tech applications and the intricacies of AI in education.

## Privacy and Ethics
- All interactions are confidential and comply with applicable privacy laws. Data collected is strictly for enhancing chatbot functionality.

-------------------------------------------------------------------------------------------------------------------------------------------

### Frontend Documentation for MCS*2020 Information Management Chatbot

## 1. Introduction

## Purpose
This document outlines the frontend architecture for the MCS*2020 Information Management Chatbot, designed to provide an engaging and interactive user experience for students seeking information on the Information Management course. The frontend facilitates the input of student queries and displays intelligent responses from the chatbot.

## 2. Technology Stack

- **Next.js**
- **Tailwind CSS**

## 3. Installation and Setup

To set up the development environment for the frontend, follow these instructions:

```bash
npx create-next-app@latest 'your-project-name'
cd your-project-name
npm install @nextui-org/react framer-motion
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
## 4. Deploy & Build

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend Documentation for MCS*2020 Information Management Chatbot

## 1. Introduction

### Purpose
This document describes the backend architecture of the MCS*2020 Information Management Chatbot, which is responsible for handling processing user queries and integrating with AI services.

## 2. Technology Stack

- **Python**
- **Flask/Django**: TBD
- **Future Integration with JSON Database**: TBD

## 3. Installation and Setup

To set up the development environment, follow these steps:

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies from a requirements.txt file
pip install -r requirements.txt

#Run Python Program
python main.py
