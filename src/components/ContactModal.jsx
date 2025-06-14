import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent!");
        setFormData({ name: "", email: "", message: "" });
        onClose();
        setDisabled(false);
      })
      .catch(() => {
        toast.error("Failed to send message.");
        setDisabled(false);
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl max-w-md w-full shadow-xl p-6 relative space-y-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <Dialog.Title className="text-xl font-bold text-green-800">
            Contact FanFuture
          </Dialog.Title>
          <p className="text-gray-700 text-sm">
            we love to hear from you! Send us a message directly below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
              disabled={disabled}
            >
              Send Message
            </button>
          </form>

          <Toaster />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ContactModal;
