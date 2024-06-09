// components/InputField.tsx
import React from 'react';
import { Button } from "@nextui-org/react";

interface InputFieldProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ inputValue, setInputValue, onSend }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="flex-1 p-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none text-black"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="ghost"
          onClick={onSend}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default InputField;
