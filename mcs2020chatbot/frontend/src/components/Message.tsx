// components/Message.tsx
import React from 'react';

interface MessageProps {
  message: { text: string; sender: string };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === "user";
  return (
    <div className={`flex items-end ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`p-3 rounded-lg max-w-xs lg:max-w-md ${isUser ? "bg-yellow-500 text-white" : "bg-red-900 text-white"}`}>
        {message.text}
      </div>
    </div>
  );
};

export default Message;
