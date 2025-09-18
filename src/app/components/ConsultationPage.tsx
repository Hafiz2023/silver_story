"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    type: "Residential",
    budget: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setShowPopup(true);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full">
      {/* Consultation Form Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <h1 className="text-4xl font-bold mb-2">Book your free Consultation</h1>
        <p className="text-gray-600 mb-6">It’s time to live your dreams!</p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="First name"
              className="border p-3 rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border p-3 rounded-lg w-full"
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="address"
            placeholder="Address"
            className="border p-3 rounded-lg w-full"
            rows={3}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Project Type
              </label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Residential"
                    defaultChecked
                    onChange={handleChange}
                  />{" "}
                  Residential
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Commercial"
                    onChange={handleChange}
                  />{" "}
                  Commercial
                </label>
              </div>
            </div>
            <input
              type="text"
              name="budget"
              placeholder="Budget"
              className="border p-3 rounded-lg w-full"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Submit
          </button>

          {/* ✅ Address Text Added Under Submit */}
          <p className="text-gray-700 text-center max-w-2xl mt-4 italic">
            Premises 117, Pragati Maidan, Sector A, Metropolitan Co-Operative
            Housing Society Limited, P.S, Tangra, Kolkata, West Bengal 700105
          </p>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold">
              Data Submitted Successfully 🎉
            </h2>
            <p className="text-gray-600 mt-2">Your request has been sent!</p>
          </div>
        </div>
      )}

      {/* Google Map Section */}
      <div className="w-full h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.005918239408!2d85.32396031506122!3d27.717245982791464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a745e4f7d%3A0x5c70ffb62e8f3d7f!2sGoogle!5e0!3m2!1sen!2snp!4v1676123456789!5m2!1sen!2snp"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
