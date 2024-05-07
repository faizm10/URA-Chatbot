import React from 'react';
import NavBar from '@/components/navbar';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-500 font-serif font-semibold">
      <NavBar/>
      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center p-24 text-black">
        <h1 className="text-5xl mb-5 font-bold">MCS2020 ChatBot</h1>
        <p className="text-center text-xl mb-5">Welcome to the AI Chatbot dedicated for MCS2020. Please keep in mind that this bot is currently in its beta version, which means it's still undergoing testing and improvements. As such, there may be mistakes, bugs, or unexpected behavior. We appreciate your patience and understanding as we work to enhance its performance. If you encounter any issues or have suggestions for improvement, please check out our FAQ section for guidance on how to report bugs or provide feedback.</p>
      </main>
    </div>
  );
}
