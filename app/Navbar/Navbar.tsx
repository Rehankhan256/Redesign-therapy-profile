"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const bgColor =
    path === "/contact" ? "bg-[#E2DECD]" : "bg-[#E9EFEA]";

  return (
    <nav className={`w-full ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Brand */}
        <div className="text-[#2E3A34] text-lg font-medium tracking-wide">
          Dr. Maya Reynolds, PsyD
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[#2E3A34]">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2E3A34]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-[#2E3A34]">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
