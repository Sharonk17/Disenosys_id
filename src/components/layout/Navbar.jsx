"use client";
import { X,BellDotIcon } from "lucide-react";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/components/assests/logo.jpg";
import Button from "../custom/Button";
import BookDemoModal from "../modal/BookDemo";
import Link from "next/link";
import { User, Settings, Bell, LogOut } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ NEW
import EditProfile from "../modal/EditProfile";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const pathname = usePathname(); // ✅ ACTIVE PATH

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Course", href: "/course" },
    { name: "Admission", href: "/admission" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Load user from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      if (savedUser) setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white top-0 left-0 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-8 xl:px-24 py-2">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="object-cover w-28 lg:w-44" />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-3 md:order-2 relative">
          {/* Book a Demo */}
          <Button
            text="Book a Demo"
            onClick={() => setIsOpen(true)}
            className="hidden lg:block bg-[linear-gradient(to_right,#2229BF,#101359)] px-4 py-2 font-bold rounded-lg text-white font-dm-sans"
          />

          {/* If user logged in */}
          {user ? (
            <div className="flex items-center gap-4 relative">
              {/* Notification Popup */}
              <div className="relative">
                {notificationOpen && (
                  <div className="absolute top-8 right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 font-dm-sans">
                    <div className="flex items-center justify-between mb-2 relative">
                      <h1 className="text-[#101359] font-bold">Notifications</h1>

                      <button
                        onClick={() => setNotificationOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <div className="border-t border-gray-200 mb-3"></div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-light text-gray-700">
                        Welcome to Disenosys
                      </p>
                      <div  className=" text-gray-600 ">
                         <BellDotIcon size={15}/>
                      </div>
                     

                    </div>
                  </div>
                )}
              </div>


              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none font-dm-sans"
                >
                  <div className="w-9 h-9 rounded-full bg-[#F2F2F2] flex items-center justify-center font-semibold" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-[#595959] leading-tight">
                      {user.name}
                    </span>
                    <span className="text-xs text-gray-500 truncate w-[90px]">
                      {user.email}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-gray-600 transition-transform ${dropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-4 w-43 bg-white rounded-lg shadow-lg z-50 border border-gray-300">
                    <div className="bg-white p-4 rounded-lg">
                      <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-blue-100"
                        onClick={() => setProfileOpen(true)}
                      >
                        <User className="w-4 h-4" /> Edit Profile
                      </button>

                      <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-blue-100">
                        <Settings className="w-4 h-4" /> Settings
                      </button>

                      <button
                        onClick={() => {
                          setNotificationOpen(!notificationOpen);
                          setDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-blue-100"
                      >
                        <Bell className="w-4 h-4" /> Notifications
                      </button>

                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-blue-100"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link href="/signup">
              <Button
                text="Sign Up"
                className="hidden lg:block bg-Setting] px-8 py-2 font-bold rounded-lg text-white"
              />
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-6 md:order-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`py-2 px-3 font-dm-sans text-base ${isActive
                  ? "text-[#101359] font-semibold border-[#101359]"
                  : "text-black hover:text-[#101359]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 font-dm-sans text-base ${isActive
                      ? "text-[#101359] font-semibold border-l-4 border-[#101359] pl-2"
                      : "text-black hover:text-[#101359]"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            {/* Buttons visible in mobile */}
            <div className="flex flex-col gap-3 mt-4">
              <Button
                text="Book a Demo"
                onClick={() => setIsOpen(true)}
                className="bg-[linear-gradient(to_right,#2229BF,#101359)] px-4 py-2 font-bold rounded-lg text-white"
              />
              {!user && (
                <Link href="/signup">
                  <Button
                    text="Sign Up"
                    className="bg-Sett] px-6 py-2 font-bold rounded-lg text-white"
                  />
                </Link>
              )}
            </div>
          </ul>
        </div>
      )}

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <EditProfile profileOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </nav>
  );
};

export default Navbar;
