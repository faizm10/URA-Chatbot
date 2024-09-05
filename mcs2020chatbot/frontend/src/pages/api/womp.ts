import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';
import axios from 'axios';

const API_KEY = 'sk-hello-trpKudk5GlpQL1AD5bDaT3BlbkFJm32PcCNVz4MusxVrJcVT';
const model_id = 'gpt-4o-mini';

const getMessageMemory = async (newQuestion: string, lastMessages: any[]) => {
  lastMessages.push({ role: 'user', content: newQuestion });

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: model_id,
      messages: lastMessages,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const msgresponse = response.data.choices[0].message.content;
  console.log('Question: ' + newQuestion);
  console.log('Response: ' + msgresponse);
  return msgresponse;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // the paths to documents
  const pdfPath = path.join(process.cwd(), 'documents', 'mcs2020.pdf');
  const textFiles = [
    'assessments.txt',
    'discussions.txt',
    'excel.txt',
    'final.txt',
    'Quizzes.txt',
    'SONA.txt',
    'chapter.txt'
  ].map(file => path.join(process.cwd(), 'documents', file));

  let content = '';

  // Read PDF content
  const pdfBuffer = fs.readFileSync(pdfPath);
  const pdfData = await pdfParse(pdfBuffer);
  content += pdfData.text;

  // Read each text file content
  for (const filePath of textFiles) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    content += fileContent;
  }

  // Prepare the initial question including the document content
  const initialQuestion = 'Use this text to answer my questions: ' + content;

  // Initialize the messages list to maintain conversation context
  let messages: any[] = [];

  // Get the initial response based on the document
  const initialResponse = await getMessageMemory(initialQuestion, messages);

  // Add the response to the conversation context
  messages.push({ role: 'assistant', content: initialResponse });

  // If a question is provided in the request, get the bot's response
  if (req.method === 'POST' && req.body.question) {
    const userQuestion = req.body.question;
    const responseMessage = await getMessageMemory(userQuestion, messages);
    messages.push({ role: 'assistant', content: responseMessage });
    res.status(200).json({ response: responseMessage });
  } else {
    res.status(200).json({ response: initialResponse });
  }
}
