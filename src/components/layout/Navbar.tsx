"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-black/80 backdrop-blur-md py-3 shadow-md"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    {/* Using text for logo if image fails or just for clarity, or combine both if you have a small icon */}
                    {/* <div className="relative w-8 h-8">
             <Image src="/logo.png" alt="Logo" fill className="object-contain" />
           </div> */}
                    <span className="text-xl md:text-2xl font-bold text-white tracking-widest">
                        SILVER STOREY
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-wider transition-colors hover:text-gray-300",
                                pathname === link.href ? "text-white font-semibold underline underline-offset-4" : "text-white/80"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="outline" className="ml-4 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors" asChild>
                        <Link href="/contact">Book Consultation</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 md:hidden z-40"
                        >
                            <nav className="flex flex-col items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-2xl font-medium uppercase tracking-widest text-white/90 hover:text-white transition-colors",
                                            pathname === link.href && "text-white underline underline-offset-8"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button className="mt-4 rounded-full bg-white text-black px-8 py-6 text-lg" asChild>
                                    <Link href="/contact">Book Now</Link>
                                </Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
