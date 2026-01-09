"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundVideo } from "@/components/ui/background-video";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
    const CONTACT_HERO_VIDEO = "lpzEd8gpWVM"; // Consistent video or choose another
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending message.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden bg-black text-white">
                <BackgroundVideo videoId={CONTACT_HERO_VIDEO} />
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h1" className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4 drop-shadow-lg">
                            Get In Touch
                        </Typography>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                            Let&apos;s build something extraordinary together.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Section className="py-20 md:py-28 relative overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info & Context */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="block text-primary font-bold tracking-widest uppercase mb-2 text-sm">Contact Us</span>
                            <Typography variant="h2" className="mb-6 leading-tight text-4xl font-bold text-gray-900">
                                We&apos;d love to hear from you.
                            </Typography>
                            <Typography className="text-gray-600 mb-12 text-lg leading-relaxed">
                                Whether you have a specific project in mind or just want to explore possibilities, our team is here to help you navigate your interior design journey.
                            </Typography>

                            <div className="space-y-8">
                                <Card className="border-none shadow-md bg-gray-50/50 hover:bg-gray-50 transition-colors">
                                    <CardContent className="flex items-start gap-6 p-6">
                                        <div className="bg-white p-4 rounded-full text-black shadow-sm">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-1 text-gray-900">Visit Our Studio</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Premises 117, Pragati Maidan, <br />
                                                Tangra, Kolkata, West Bengal 700105
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-md bg-gray-50/50 hover:bg-gray-50 transition-colors">
                                    <CardContent className="flex items-start gap-6 p-6">
                                        <div className="bg-white p-4 rounded-full text-black shadow-sm">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-1 text-gray-900">Call Us</h3>
                                            <p className="text-gray-600 mb-2">+91 98765 43210</p>
                                            <p className="text-sm text-gray-500">Mon-Sat, 9am - 7pm</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-md bg-gray-50/50 hover:bg-gray-50 transition-colors">
                                    <CardContent className="flex items-start gap-6 p-6">
                                        <div className="bg-white p-4 rounded-full text-black shadow-sm">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-1 text-gray-900">Email Us</h3>
                                            <p className="text-gray-600">hello@silverstorey.com</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">About Your Project</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about the space, your style preferences, or any specific requirements..."
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl resize-none p-4"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full text-lg h-14 rounded-xl bg-black hover:bg-gray-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="animate-spin mr-2" /> : <span className="flex items-center justify-center gap-2">Send Message <ArrowRight className="w-5 h-5" /></span>}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Map / Location Visual */}
            <div className="w-full h-[400px] bg-gray-200 relative grayscale">
                {/* Embedded Google Map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.661605334789!2d88.39707291541624!3d22.554359739324545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02768565555555%3A0x1234567890abcdef!2sKolkata!5e0!3m2!1sen!2sin!4v1612423523423!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Map"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-black/10"></div>
            </div>
        </div>
    );
}
