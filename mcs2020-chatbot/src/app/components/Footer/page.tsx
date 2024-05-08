"use client";
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "red",
        bottom: 0, // Stick to the bottom
        zIndex: 1000,
        height: "80px", // Height
        padding: "0 20px", //Create Spacing 
        alignItems: "center", // Vertically center the content
        justifyContent: "center", // Horizontally center the content
       }}
      
    >
      Copyright 2024
    </footer>
  );
}
