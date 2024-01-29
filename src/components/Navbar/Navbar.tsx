"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navdata } from "../../utiles/static-data/nav-data";
import { usePathname } from "next/navigation";
import DarkMode from "@/utiles/themes/DarkMode";
import LoginModal from "../Modals/LoginModal";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  return (
    <nav className="py-3 sticky top-0 z-40 bg-sin text-tan">
      <div className="flex justify-between items-center container ">
        <Link href="/" className="text-xl tracking-wide text-tan">
          #hash<strong>Read</strong>
        </Link>
        <div className="flex items-center gap-8">
          {navdata?.map(({ title, link }, i) => (
            <Link
              href={link}
              key={i}
              className={`hover:text-cot tr ${
                path?.includes(title?.toLowerCase().replace(/\s+/g, "-"))
                  ? "text-cot"
                  : ""
              }`}
            >
              {title}
            </Link>
          ))}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#fff] bg-cot py-2 px-4 rounded-full text-sm"
          >
            Get started
          </button>
          {isOpen && <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />}
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
