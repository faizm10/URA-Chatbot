import React from "react";
import Link from "next/link";
import ChatBot from "./pages/ChatBot/page";
export default function LandingPage() {
  const backgroundImageUrl = "/images/5433943.jpg";

  return (
    // <ChatBot />
    <div
      className="flex flex-col items-center justify-center min-h-screen text-black"
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-guelphRed">
        Welcome to Our ChatBot
      </h1>
      <p className="text-xl mt-2 text-white">
        Your AI-powered assistant is here to help.
      </p>
      <div className="mt-4">
        <Link href="/pages/Home" passHref>
          <button className="bg-guelphYellow hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Home
          </button>
        </Link>
        <Link href="/pages/ChatBot" passHref>
          <button className="bg-guelphRed hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline">
            Chat Now
          </button>
        </Link>
        <Link href="/pages/FAQ" passHref>
          <button className="bg-guelphBlack hover:bg-guelphYellow hover:text-black text-guelphYellow font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
