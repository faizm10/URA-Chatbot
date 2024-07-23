"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "ChatBot", href: "/chatbot" },
    // { label: "FAQ", href: "/faq" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-800" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden custom-toggle"
        />
        <NavbarBrand>
          <p className="font-bold text-white">MCS2020 ChatBot</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link href="/" className="nav-link text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/chatbot" className="nav-link text-white">
            ChatBot
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link href="/faq" className="nav-link text-white">
            FAQ
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
