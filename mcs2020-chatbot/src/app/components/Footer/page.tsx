"use client";
import React from "react";

export default function Footer() {
  return (
    <footer
    className="w-full bg-gray-800 text-white py-6"
    style={{
      background: "red",
      position: "static",
      bottom: 0,
    }}
  >
    <div className="flex justify-center items-center space-x-4">
      Chatbot powered by AI | © 2024 | Privacy Policy | Terms of Service
    </div>
  </footer>
  );
}
