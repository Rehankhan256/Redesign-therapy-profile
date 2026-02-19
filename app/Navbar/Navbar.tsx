"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  const bgColor = path === "/contact" ? "bg-[#E2DECD]": "bg-[#E9EFEA]";
  return (
    <nav className={`w-full ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Left: Brand */}
        <div className="text-[#2E3A34] text-lg font-medium tracking-wide">
          Dr. Maya Reynolds, PsyD
        </div>

        {/* Right: Links */}
        <div className="hidden md:flex items-center gap-8 text-[#2E3A34]">

          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>

          <Link href="/blog" className="hover:opacity-70 transition">
            Blog
          </Link>

          <Link href="/contact" className="hover:opacity-70 transition">
            Contact
          </Link>

          

        </div>

      </div>
    </nav>
  );
}
