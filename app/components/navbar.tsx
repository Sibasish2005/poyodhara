"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Poppins } from "next/font/google"

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'] 
})

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "#products" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "https://wa.me/9366834064?text=Hi Poyodhara, I would like to order drinking water." },
    ]

    return (
        <nav className="flex flex-row justify-between items-center py-3 px-4 sm:py-4 sm:px-6 md:px-12 bg-white/90 md:bg-sky-500/10 md:backdrop-blur-xl sticky top-0 z-50 transition-all duration-300" aria-label="Main Navigation">
            {/* Logo Area */}
            <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <Link href="/" aria-label="Home">
                    <Image
                        src="/logo.png"
                        alt="Poyodhara Logo"
                        width={180}
                        height={60}
                        priority
                        className="object-contain w-[120px] h-auto sm:w-[150px] md:w-[180px]"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row items-center justify-end w-full pl-8">
                <ul className="flex flex-row gap-6 lg:gap-10 text-base font-semibold tracking-wide">
                    {navLinks.map((link) => {
                        const isExternal = link.href.startsWith("http");
                        return (
                            <li key={link.name}>
                                <Link 
                                    href={link.href} 
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className={`${poppins.className} relative text-base lg:text-xl text-[#0b5a8e] font-medium hover:text-[#084163] transition-colors duration-300 py-2 group`}
                                >
                                    {link.name}
                                    <span className="absolute left-0 -bottom-1 h-[3px] bg-[#0b5a8e] transition-all duration-300 rounded-full w-0 group-hover:w-full"></span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="p-2 rounded-lg hover:bg-sky-500/10 text-[#0b5a8e] transition-colors"
                    aria-label="Open Mobile Menu"
                >
                    <Menu className="h-7 w-7" />
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
                    onClick={() => setMobileOpen(false)}
                >
                    {/* Drawer Panel */}
                    <div
                        className="absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white/90 backdrop-blur-xl shadow-2xl flex flex-col animate-slide-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-2 rounded-lg hover:bg-sky-50 text-[#0b5a8e] transition-colors"
                                aria-label="Close Menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <div className="flex flex-col px-6 pt-4">
                            <ul className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const isExternal = link.href.startsWith("http");
                                    return (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                target={isExternal ? "_blank" : undefined}
                                                rel={isExternal ? "noopener noreferrer" : undefined}
                                                onClick={() => {
                                                    if (!isExternal) setMobileOpen(false);
                                                }}
                                                className={`${poppins.className} block text-lg text-[#0b5a8e] font-medium hover:text-[#084163] hover:bg-sky-50 transition-all duration-200 py-3 px-4 rounded-lg`}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}