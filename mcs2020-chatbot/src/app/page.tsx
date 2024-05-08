// src/app/page.tsx
import React from 'react';
import Link from 'next/link';  // Import Link from next/link

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-600 text-black">
      <h1 className="text-4xl font-bold text-guelphRed">Welcome to Our ChatBot</h1>
      <p className="text-xl mt-2">Your AI-powered assistant is here to help.</p>
      <div className="mt-4">
        <Link href="/components/Home" passHref>
          <button className="bg-guelphYellow hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Home
          </button>
        </Link>
        <Link href="/components/ChatBot" passHref>
          <button className="bg-guelphRed hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline">
            Chat Now
          </button>
        </Link>
        <Link href="/components/FAQ" passHref>
          <button className="bg-guelphBlack hover:bg-guelphYellow hover:text-black text-guelphYellow font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
