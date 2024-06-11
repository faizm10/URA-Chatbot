"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar className="bg-gray-800"
      style={{
        
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "80px",
        padding: "0 20px",
      }}
      isBordered
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">MCS*2020 TA AI</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link style={{ color: "white" }} href="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "white" }} href="/chatbot">
            Chatbot
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "white" }} href="/faq">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
