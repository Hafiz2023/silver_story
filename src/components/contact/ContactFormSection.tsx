"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactFormSection() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", message: ""
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
        <Section className="py-20 md:py-28 relative overflow-hidden bg-white">
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

                        <div className="space-y-6">
                            {[
                                { icon: MapPin, title: "Visit Our Studio", content: "Premises 117, Pragati Maidan, Tangra, Kolkata 700105" },
                                { icon: Phone, title: "Call Us", content: "+91 98765 43210 \n Mon-Sat, 9am - 7pm" },
                                { icon: Mail, title: "Email Us", content: "hello@silverstorey.com" }
                            ].map((info, idx) => (
                                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="transition-transform">
                                    <Card className="border-none shadow-md bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <CardContent className="flex items-start gap-6 p-6">
                                            <div className="bg-white p-4 rounded-full text-primary shadow-sm">
                                                <info.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-1 text-gray-900">{info.title}</h3>
                                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{info.content}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100 relative"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                                <Input name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                                    <Input name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                                    <Input name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 ml-1">About Your Project</label>
                                <Textarea name="message" placeholder="Tell us about the space, your style preferences..." rows={5} value={formData.message} onChange={handleChange} required className="bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl resize-none p-4" />
                            </div>
                            <Button type="submit" className="w-full text-lg h-14 rounded-xl bg-black hover:bg-gray-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl mt-4" disabled={loading}>
                                {loading ? <Loader2 className="animate-spin mr-2" /> : <span className="flex items-center justify-center gap-2">Send Message <ArrowRight className="w-5 h-5" /></span>}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
