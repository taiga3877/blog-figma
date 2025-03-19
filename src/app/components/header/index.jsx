"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#232536]'>
      <div className='flex items-center justify-between max-w-[1440px] mx-auto h-[70px] px-4 md:px-8 lg:px-12'>
        <h1 className='text-3xl font-bold'>
          FinsWeet
        </h1>
        
        {/* Burger Menu */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-[20px] md:gap-[40px] items-center'>
          <ul className='flex gap-[10px] md:gap-[14px] items-center justify-around'>
            <Link href="/home">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About Us</Link>
            <Link href="/register">Register</Link>
          </ul>
          <button 
            className="w-[110px] h-[40px] rounded-2xl text-center bg-white text-[#232536] hover:bg-[#232536] hover:text-white hover:border-2 hover:scale-105 transition-transform duration-200 font-semibold"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-[#232536] text-white py-4'>
          <Link href="/home" className='py-2'>Home</Link>
          <Link href="/blog" className='py-2'>Blog</Link>
          <Link href="/about" className='py-2'>About Us</Link>
          <Link href="/register" className='py-2'>Register</Link>
          <button 
            className="mt-4 w-[110px] h-[40px] rounded-2xl bg-white text-[#232536] hover:bg-[#232536] hover:text-white hover:border-2 hover:scale-105 transition-transform duration-200 font-semibold"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default Index;
