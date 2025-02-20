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
        <Button className='mt-4'>Send the Message</Button>
      </form>
    </div>
  );
};

export default EmailForm;
