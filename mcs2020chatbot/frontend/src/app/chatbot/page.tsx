"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  sender: "bot" | "user";
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); //Corrected dependency

  const handleSendMessage = async (): Promise<void> => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/womp", { question: inputValue });
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <NavBar />
      <div className="flex-1 container  mx-auto p-4 flex flex-col">
        <Card className="flex-1 flex flex-col overflow-hidden border-primary/10">
          <CardContent className="flex-1 p-0">
            <ScrollArea
              ref={scrollAreaRef}
              className="h-[calc(100vh-13rem)] p-4"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start mb-4 gap-3",
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.sender === "bot" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/bot-avatar.png" alt="Bot" />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "px-4 py-3 rounded-lg max-w-[80%]",
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {msg.sender === "bot" ? (
                      <ReactMarkdown className="prose prose-sm dark:prose-invert">
                        {msg.text}
                      </ReactMarkdown>
                    ) : (
                      <p>{msg.text}</p>
                    )}
                  </div>
                  {msg.sender === "user" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/user-avatar.png" alt="User" />
                      <AvatarFallback className="bg-primary/80 text-primary-foreground">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              <div ref={endOfMessagesRef} />
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputValue.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
        <div className="mt-2 text-center">
          <p className="text-xs text-muted-foreground">
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
