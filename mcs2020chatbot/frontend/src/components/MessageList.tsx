// components/MessageList.tsx
import React from 'react';
import Message from './Message';

interface MessageListProps {
  messages: { text: string; sender: string }[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="bg-black p-4 h-96 overflow-y-auto rounded-3xl">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
