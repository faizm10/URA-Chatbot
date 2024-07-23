"use client";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import { Textarea, Button, Image } from "@nextui-org/react";
import axios from "axios";

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
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          // model: "gpt-3.5-turbo",
          // model: "ft:gpt-3.5-turbo-0125:mcs:mcs2020:9lMqqsfm",
          model: 'ft:gpt-3.5-turbo-0125:mcs::9oG5oAfi',
          messages: [
            { role: "system", content: "The professor name is Nicole McCallum and the email is mccallun@uoguelph.ca. Answer questions using only the provided training data. Do not use external information or general knowledge. If you do not know the answer based on the provided data, respond with 'I am not sure'." },
            { role: "user", content: input }
          ],
        },
        {
          headers: {
            Authorization: `Bearer sk-hello-trpKudk5GlpQL1AD5bDaT3BlbkFJm32PcCNVz4MusxVrJcVT`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      const newBotMessage: Message = {
        text: data.choices[0].message.content.trim(),
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
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <div className="p-4 bg-gray-800 shadow-inner">
        <div className="flex items-center space-x-3">
          <Textarea
            fullWidth
            variant="flat"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" && !e.shiftKey && handleSendMessage()
            }
            placeholder="Type your message..."
            className="flex-1 text-black font-bold p-2"
            
          />
          <Button
            onClick={handleSendMessage}
            className="bg-gray-700 hover:bg-blue-600 rounded-xl"
            style={{
              // borderRadius: "50%",
              // width: "40px",
              // height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            ⬆️
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
