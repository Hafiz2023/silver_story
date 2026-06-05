"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-1000"
        >
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
            <div className="absolute inset-0 pointer-events-none bg-black/5 mix-blend-multiply"></div>
        </motion.div>
    );
}
