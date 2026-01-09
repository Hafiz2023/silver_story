import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-widest uppercase">Silver Storey</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transforming spaces into timeless stories of elegance and comfort.
                            India&apos;s fastest growing interior design brand.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase tracking-wider">Explore</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase tracking-wider">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Residential Design</li>
                            <li>Commercial Spaces</li>
                            <li>Modular Kitchens</li>
                            <li>Furniture Design</li>
                            <li>Renovations</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 mt-1" size={16} />
                                <span>
                                    Premises 117, Pragati Maidan, Sector A, <br />
                                    Metropolitan Co-Op Housing, Tangra, <br />
                                    Kolkata, West Bengal 700105
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0" size={16} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0" size={16} />
                                <span>hello@silverstorey.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Silver Storey. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
