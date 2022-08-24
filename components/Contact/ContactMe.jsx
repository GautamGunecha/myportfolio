import React, { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      subject,
      message,
    };

    await axios
      .post("/api/contact", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res) {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        }
      });

    setLoading(false);
  };
  return (
    <div id="contactme" className="w-full text-white bg-neutral-900 h-screen">
      <div className="max-w-[1240px] flex flex-col mx-auto justify-center  w-full px-2 py-16 h-full">
        <h1 className="text-xl text-orange-400">Contact Me</h1>
        <p className="mt-2 text-sm text-slate-200 text-justify tracking-widest">
          If you have an exciting project in mind, get in touch with me.
        </p>
        <div className="w-full mt-8">
          <form
            onSubmit={handleFormSubmit}
            className="w-[95%] shadow-2xl hover:scale-105 ease-in duration-500  p-4 justify-center m-auto flex gap-4 flex-col"
          >
            <section className="w-full flex gap-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[50%] p-2 text-black tracking-widest"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-[50%] p-2 text-black tracking-widest"
              />
            </section>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="p-2 text-black tracking-widest"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 text-black tracking-widest resize-none"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {!submitted ? (
              <button
                type="submit"
                className="bg-orange-400 hover:bg-red-500 ease-in duration-300 p-2"
              >
                {!loading ? "Send Mail" : "Sending mail..."}
              </button>
            ) : (
              <p className="text-lg text-center justify-center text-green-600">
                Form Submitted
              </p>
            )}
          </form>
        </div>
        <div className="flex justify-end mt-8">
          <Link href="/">
            <div className="cursor-pointer shadow-sm shadow-orange-500 rounded-full hover:scale-110 p-2 ease-in duration-300">
              <FaAngleDoubleUp size={25} className="text-red-600" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
