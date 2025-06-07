import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c89su0a",   // Replace with your EmailJS service ID
        "template_t9pum7g",  // Replace with your EmailJS template ID
        form.current,
        "6bSVa-IMPujrS3VAh"    // Replace with your EmailJS public key (user ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();  // reset form after sending
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full px-6 py-16 bg-gray-900 text-gray-300"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-cyan-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Send Message
          </motion.button>
          {done && (
            <p className="text-green-400 mt-4 text-center">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
