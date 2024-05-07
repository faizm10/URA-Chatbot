import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";  
export default function NavBar() {
  return (
    <Navbar
      style={{
        backgroundColor: 'red',
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "80px",
        padding: "0 20px",
      }}
    >
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/home" style={{ color: "white", fontSize: "16px" }}>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/chatbot" style={{ color: "white", fontSize: "16px" }}>ChatBot</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/faq" style={{ color: "white", fontSize: "16px" }}>FAQ</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* Future*/}
      </NavbarContent>
    </Navbar>
  );
}
