"use client";
import React from "react";
import NavBar from "@/app/components/NavBar";
const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-b from-SoftViolet to-SoftBlue  flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-white mb-4">MCS2020 ChatBot</h1>
        <p className="text-xl text-white mb-4">
          Welcome to the AI Chatbot dedicated for MCS2020. Please keep in mind
          that this bot is currently in its beta version, which means it's still
          undergoing testing and improvements. As such, there may be mistakes,
          bugs, or unexpected behavior. We appreciate your patience and
          understanding as we work to enhance its performance. If you encounter
          any issues or have suggestions for improvement, please check out our
          FAQ section for guidance on how to report bugs or provide feedback.
        </p>
      </div>
    </>
  );
};

export default Home;
