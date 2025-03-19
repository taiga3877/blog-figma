"use client";

import React from 'react';
import Image from 'next/image';
import image1 from './ground-group-growth-hands-461049.png';
import image2 from './three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png';

function Page() {
  const start = [
    { font: 'Our Mission', h1: 'Creating valuable content for creatives all around the world', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.' },
    { font: 'Our Vision', h1: 'A platform that empowers individuals to improve', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.' }
  ];

  const sections = [
    {
      font: 'Our team of creatives',
      h1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      img: image1,
      reverse: false
    },
    {
      font: 'Why we started this Blog',
      h1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      img: image2,
      reverse: true
    }
  ];

  return (
    <div className='bg-white'>
      <br />
      <div className='max-w-[1440px] mx-auto flex flex-col gap-8 px-4'>
      <div className="flex flex-col md:flex-row items-center justify-around bg-[#F4F0F8] rounded-[4px] p-8">
  {start.map((item, index) => (
    <div 
      key={index} 
      className="w-full md:w-[516px] text-[#232536] opacity-100 transition-opacity duration-1000"
    >
      <p className="text-[16px] mb-2">{item.font}</p>
      <h1 className="text-2xl font-bold mb-2">{item.h1}</h1>
      <p className="text-[16px] font-thin">{item.p}</p>
    </div>
  ))}
</div>

        
        {sections.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center justify-around gap-8 transition-transform duration-500 hover:scale-105 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className='w-full md:w-[519px] text-[#232536]'>
              <p className='text-2xl font-bold'>{item.font}</p>
              <br />
              <h1 className='font-bold text-4xl'>{item.h1}</h1>
              <br />
              <p className='font-thin'>{item.p}</p>
            </div>
            <div className='w-full max-w-[500px]'>
              <Image className='w-full h-auto rounded-lg shadow-md' src={item.img} alt={item.font} />
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default Page;
