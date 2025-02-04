"use client";

import { useState } from "react";
import { Heart, Search, ShoppingCart, UserCircle2 } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AuthContextProvider from "@/context/AuthContext";
import HeaderClientButtons from "./HeaderClientButtons";
import AdminButton from "./AdminButton";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-85 text-white py-3 px-4 md:py-4 md:px-16 border-b border-[#2E2E2E] flex items-center justify-between">
      <Link href={"/"}>
        <img className="h-8 md:h-8" src="/logo.png" alt="Logo" />
      </Link>

      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="md:hidden text-white hover:bg-[#4d4d4d] rounded-full p-2"
      >
        ☰
      </button>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-black bg-opacity-90 flex-col items-center py-2 md:static md:bg-transparent md:flex md:flex-row md:items-center md:justify-center gap-2 font-semibold`}
      >
        {menuList.map((item) => (
          <Link key={item.link} href={item.link}>
            <button className="text-sm px-4 py-2 rounded-lg hover:bg-[#4d4d4d]">
              {item.name}
            </button>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-1">
        <AuthContextProvider>
          <AdminButton />
        </AuthContextProvider>
        <Link href={`/search`}>
          <button
            title="Search Products"
            className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-[#4d4d4d]"
          >
            <Search size={14} />
          </button>
        </Link>
        <AuthContextProvider>
          <HeaderClientButtons />
        </AuthContextProvider>
        <Link href={`/account`}>
          <button
            title="My Account"
            className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-[#4d4d4d]"
          >
            <UserCircle2 size={14} />
          </button>
        </Link>
        <AuthContextProvider>
          <LogoutButton />
        </AuthContextProvider>
      </div>
    </nav>
  );
}
