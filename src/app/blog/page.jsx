"use client";

import Image from 'next/image';
import React from 'react';
import background from './photo-of-woman-wearing-eyeglasses-3184405.png';
import autor from './Image (4).png';

function Page() {
  return (
    <div className='bg-white'>
      <br />
      <div className='max-w-[1440px] mx-auto flex items-center justify-center px-4'>
        <Image 
          className='w-full max-w-[1280px] h-auto rounded-[10px] transition-all duration-500 hover:scale-105' 
          src={background} 
          alt='Background'
        />
      </div>
      <br />

      <div className='max-w-[700px] mx-auto px-4'>
        <div className='flex items-center gap-[20px] text-[#232536]'>
          <Image 
            className='w-[50px] h-[50px] rounded-full transition-transform duration-300 hover:scale-110' 
            src={autor} 
            alt='Author'
          />
          <div>
            <h1 className='font-bold text-[19px]'>Andrew Jonson</h1>
            <p>Posted on 27th January 2022</p>
          </div>
        </div>
        <br />
        <h1 className='text-4xl font-bold max-w-[600px] text-[#232536] transition-opacity duration-500 hover:opacity-80'>
          Step-by-step guide to choosing great font pairs
        </h1>
        <br />
        <br />
        <h1 className='font-bold text-2xl text-black'>Startup (#business, #screen, #life)</h1>
        <br />
        <br />
        <p className='text-[#232536] leading-7 transition-transform duration-500 hover:scale-[1.02]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <br />
        <p className='text-[#232536] leading-7 transition-transform duration-500 hover:scale-[1.02]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      <br />
      </div>
    </div>
  );
}

export default Page;
