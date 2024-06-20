import React from "react";
import NavBar from "@/components/NavBar";
import ParticlesComponent from "@/components/Particles";
import { Suspense } from "react";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="relative min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center text-center p-4 flex: 1" >
        {/* ParticlesComponent as background */}
        <Suspense fallback={<div>Loading...</div>}>
          <ParticlesComponent />
        </Suspense>

        <div className="z-10 max-w-4xl p-8 bg-opacity-80 bg-black rounded-lg shadow-xl">
          <h1 className="text-5xl font-bold text-yellow-400 mb-6">
            Welcome to the MGMT1000 ChatBot Beta
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Thank you for participating in the beta testing of our latest
            AI-driven chatbot. Your feedback is super important to us to
            refining its functionality and ensure a robust final release. As
            this is a beta version, please note that you may experience some
            inconsistencies and technical issues.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Engage with the{" "}
            <a
              href="/chatbot"
              className="text-yellow-500 hover:text-yellow-300 font-bold"
            >
              ChatBot Here
            </a>
            . Explore its features and let us know your thoughts!
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Should you encounter any issues or if you have suggestions to
            enhance the chatbot's performance, please visit our{" "}
            <a
              href="/faq"
              className="text-yellow-500 hover:text-yellow-300 font-bold"
            >
              FAQ Section
            </a>
            . Your input is crucial to our improvement efforts.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
