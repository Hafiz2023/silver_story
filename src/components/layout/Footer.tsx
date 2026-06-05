"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                        >
                            Silver Storey
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-400 text-sm leading-relaxed"
                        >
                            Transforming spaces into timeless stories of elegance and comfort.
                            India&apos;s fastest growing interior design brand.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-4 pt-4"
                        >
                            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                                <Link 
                                    key={i} 
                                    href="#" 
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-4 inline-block">Explore</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {[
                                { name: "About Us", path: "/about" },
                                { name: "Our Services", path: "/services" },
                                { name: "Portfolio", path: "/projects" },
                                { name: "Contact", path: "/contact" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.path} className="group flex items-center gap-2 hover:text-white transition-colors">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-4 inline-block">Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {["Residential Design", "Commercial Spaces", "Modular Kitchens", "Hospitality Design", "Renovations"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-4 inline-block">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <MapPin size={14} />
                                </div>
                                <span className="pt-1">
                                    Premises 117, Pragati Maidan,<br />
                                    Tangra, Kolkata 700105
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Phone size={14} />
                                </div>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Mail size={14} />
                                </div>
                                <span>hello@silverstorey.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Silver Storey. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
