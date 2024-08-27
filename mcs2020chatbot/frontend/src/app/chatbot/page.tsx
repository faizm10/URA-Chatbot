'use client';
import React, { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import sendIcon from "../chatbot/send_icon.png";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import axios from "axios";
import ReactMarkdown from 'react-markdown';

interface Message {
  text: string;
  sender: "bot" | "user";
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (): void => {
    if (!inputValue.trim()) return;
    const newUserMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputValue("");
    handleBotResponse(inputValue);
  };

  const handleBotResponse = async (input: string): Promise<void> => {
    try {
      const response = await axios.post('/api/womp', { question: input });
      const newBotMessage: Message = {
        text: response.data.response,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (error) {
      console.error("Failed to fetch:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error connecting to the server.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1 p-4 overflow-auto bg-primary">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.sender === "bot" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <div className="p-4 bg-primary flex justify-center items-center">
        <div className="w-full max-w-2xl">
          <div className="flex items-center justify-center p-3 rounded-full gap-5">
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder="Prompt Me"
              onKeyPress={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSendMessage()
              }
              className="flex-1 p-2 text-lg"
              endContent={
                <div className="flex items-center gap-4">
                  <Image
                    src={sendIcon}
                    alt="Send"
                    onClick={handleSendMessage}
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              }
            />
          </div>
          <p className="text-xs text-center font-bold mt-4">
            Note that the ChatBot may provide inaccurate key dates and
            information. Double check with the professor, TA and/or course
            documents. Do NOT fully rely on the ChatBot!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
