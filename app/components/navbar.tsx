"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: "Products", href: "#products", num: "01" },
    { name: "About", href: "#about", num: "02" },
    { name: "Location", href: "#location", num: "03" },
    { name: "FAQ", href: "#faq", num: "04" },
  ];

  const WHATSAPP_NAV_URL =
    "https://wa.me/919366834064?text=Hi%20Poyodhara%2C%20I%20would%20like%20to%20order%20drinking%20water.";

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between py-3.5 px-5 sm:px-8 md:px-12"
          aria-label="Primary Navigation"
        >
          {/* Brand Logo */}
          <Link href="/" aria-label="Poyodhara Homepage" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Poyodhara"
              width={150}
              height={48}
              priority
              className="object-contain w-[120px] sm:w-[145px] h-auto transition-opacity hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wide text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#0b5a8e] transition-colors relative py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919366834064"
              className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              +91 9366834064
            </a>
            <a
              href={WHATSAPP_NAV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0b5a8e] hover:bg-[#074066] text-white text-xs font-semibold tracking-wider uppercase py-2.5 px-5 rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Order Water</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href={WHATSAPP_NAV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-full bg-[#0b5a8e] text-white"
              aria-label="Order on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 stroke-[1.75]" />
            </button>
          </div>
        </nav>
      </header>

      {/* Modern Awwwards-style Fullscreen Mobile Overlay Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300 md:hidden">
          {/* Header in Overlay */}
          <div className="flex items-center justify-between">
            <Image
              src="/logo.webp"
              alt="Poyodhara"
              width={130}
              height={42}
              className="object-contain w-[115px] brightness-0 invert"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6 stroke-[1.75]" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 my-auto py-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Menu
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-baseline justify-between text-3xl font-light tracking-tight text-slate-200 hover:text-white transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-500 group-hover:text-sky-300 transition-colors">
                  {link.num}
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex flex-col gap-2.5">
              <a
                href={WHATSAPP_NAV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3.5 rounded-full text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href="tel:+919366834064"
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-slate-200 border border-white/10 font-medium py-3 rounded-full text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotline: +91 9366834064</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-500 text-center">
              Facility: West Pilak, Jolaibari, South Tripura • Supply across Agartala
            </div>
          </div>
        </div>
      )}
    </>
  );
}
