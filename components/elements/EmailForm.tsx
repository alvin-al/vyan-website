"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("error");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://vyan-email.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccess("Sudah dikirim");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(result.message || "Error");
      }
    } catch {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-8 mb-16 w-full lg:w-[600px]'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input
            type='text'
            className='py-2 px-4 border-[1.5px] border-gray-400 focus:border-gray-800 focus:outline-none w-1/2 transition delay-75 hover:bg-gray-100'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
          />
          <input
            type='email'
            className='py-2 px-4 border-[1.5px] border-gray-400 focus:border-gray-800 w-1/2 focus:outline-none transition delay-75 hover:bg-gray-100'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
        </div>
        <textarea
          className='py-2 px-4 border-[1.5px] border-gray-400 lg:w-full h-52 text-wrap focus:border-gray-800 focus:outline-none transition delay-75 hover:bg-gray-100'
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder='Write your message here...'
          required
        />
        {!loading && !success && !error && (
          <Button className='mt-4'>Send the Message</Button>
        )}
        {loading && (
          <Button className='mt-4' disabled>
            <Loader2 className='animate-spin' />
            Please wait
          </Button>
        )}
        {success && (
          <Button className='mt-4' variant='success' disabled>
            Success
          </Button>
        )}
        {error == "Error" && (
          <Button className='mt-4' variant='error' disabled>
            Error
          </Button>
        )}
      </form>
    </div>
  );
};

export default EmailForm;
