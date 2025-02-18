"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='w-full lg:w-[600px]'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input
            type='email'
            className='py-2 px-4 border focus:border-black w-1/2 focus:outline-none'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
          <input
            type='text'
            className='py-2 px-4 border focus:border-black focus:outline-none w-1/2'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
          />
        </div>
        <textarea
          className='py-2 px-4 border lg:w-full h-52 text-wrap focus:border-black focus:outline-none'
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder='Write your message here...'
          required
        />
        <Button>Send the Message</Button>
      </form>
    </div>
  );
};

export default EmailForm;
