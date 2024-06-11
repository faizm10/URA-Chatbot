import React from "react";
import NavBar from "@/components/NavBar";
import ParticlesComponent from "@/components/Particles";
import { Suspense } from "react";
const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="relative min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center text-center p-4">
        {/* ParticlesComponent as background */}
        <Suspense fallback={<div>Loading...</div>}> 
        <ParticlesComponent />
      </Suspense>

        <div className="z-10 max-w-4xl p-8 bg-opacity-80 bg-black rounded-lg shadow-xl">
          <h1 className="text-5xl font-bold text-yellow-400 mb-6">
            MCS2020 ChatBot
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Welcome to the AI Chatbot dedicated for MCS2020. Please keep in mind
            that this bot is currently in its beta version, which means it's
            still undergoing testing and improvements. As such, there may be
            mistakes, bugs, or unexpected behavior. We appreciate your patience
            and understanding as we work to enhance its performance.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            If you encounter any issues or have suggestions for improvement,
            please check out our{" "}
            <a href="/faq" className="text-yellow-500 hover:text-yellow-300">
              FAQ section
            </a>{" "}
            for guidance on how to report bugs or provide feedback.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
