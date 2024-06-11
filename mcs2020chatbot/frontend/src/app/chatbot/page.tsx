"use client";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import { Textarea, Button, Image } from "@nextui-org/react";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "simulation assignments",
    answer:
      "Simulation assignments are due at the end of weeks 1, 3, 6, 8, and 10. You can submit these via the MyLab platform.",
  },
  {
    question: "excel assignments",
    answer:
      "Excel assignments need to be submitted through MyLab. They are scheduled for weeks 2, 4, 7, 9, and 11.",
  },
  {
    question: "quiz schedule",
    answer:
      "Quizzes are scheduled for weeks 1, 3, 5, 8, 10, and 11. These can be accessed via the Quizzes tool on CourseLink.",
  },
  {
    question: "final exam format",
    answer:
      "The final exam will be conducted online and consists of multiple-choice questions. Make sure to check the final exam schedule on WebAdvisor.",
  },
  {
    question: "discussion posts",
    answer:
      "You need to post your initial discussion by Thursday 11:59 PM ET of the assignment week and respond to a classmate's post by Sunday 11:59 PM ET.",
  },
  {
    question: "contact the instructor",
    answer:
      "You can email the instructor at mccallun@uoguelph.ca for detailed queries or book an appointment for office hours.",
  },
  {
    question: "textbook",
    answer:
      "The required textbook is 'Management Information Systems: Managing the Digital Firm'. You can use the MyLab platform for digital resources.",
  },
  {
    question: "mylab assignments",
    answer:
      "All MyLab assignments are crucial for your course performance. Make sure to complete these on time as per the given deadlines.",
  },
];

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

  const handleBotResponse = (input: string): void => {
    const response =
      faqData.find((faq) =>
        input.toLowerCase().includes(faq.question.toLowerCase())
      )?.answer || "I'm not sure how to help with that.";
    const newBotMessage: Message = { text: response, sender: "bot" };
    setMessages((prevMessages) => [...prevMessages, newBotMessage]);
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
              borderRadius: "50%",
              width: "40px",
              height: "40px",
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
