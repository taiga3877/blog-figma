import Image from 'next/image';
import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import images from './two-women-in-front-of-dry-erase-board-1181533.png';
import images2 from './photo-of-people-doing-handshakes-3183197.png';
import { FaCity, FaIndustry } from "react-icons/fa6";
import { GiEcology } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";

function Page() {
    const data = [
        { p: "By John Doe | Aug 23, 2021", h1: 'A UX Case Study Creating a Studious Environment for Students:', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', img: images },
        { p: "By John Doe | Aug 23, 2021", h1: 'A UX Case Study Creating a Studious Environment for Students:', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', img: images2 },
        { p: "By John Doe | Aug 23, 2021", h1: 'A UX Case Study Creating a Studious Environment for Students:', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', img: images },
    ];

    const brand = [
        { brand: "Business", p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: <FaCity className="text-4xl text-[#232536]" /> },
        { brand: "Startup", p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: <GiEcology className="text-4xl text-[#232536]" /> },
        { brand: "Economy", p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: <FaIndustry className="text-4xl text-[#232536]" /> },
        { brand: "Technology", p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", icon: <GrTechnology className="text-4xl text-[#232536]" /> },
    ];

    return (
        <div className='bg-black'>

            {/* Hero Section */}
            <div className="relative w-full max-w-[1440px] h-[560px] flex items-center justify-center m-auto p-4">
                <iframe
                    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                    src="https://www.youtube.com/embed/ZzR62ApQVHE?si=TdHDL1BbOTLKdczA&amp;start=0&autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>

                {/* Content */}
                <div className="relative z-10 text-white text-center max-w-[700px]">
                    <p className="text-2xl">POSTER ON <span className="font-bold">STURUP</span></p>
                    <h1 className="text-4xl md:text-6xl font-bold mt-4">Step-by-step guide to choosing great font pairs</h1>
                    <p className="text-lg mt-4">By <span className="text-amber-300">James West</span> | May 23, 2022</p>
                    <p className="text-lg mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button 
                        className="mt-6 flex items-center justify-center w-52 h-14 rounded-lg bg-amber-300 text-black text-lg hover:bg-black hover:border-2 hover:text-amber-300 hover:scale-105 transition-transform duration-200"
                    >
                        Read More <MdNavigateNext className="ml-2" />
                    </button>
                </div>
            </div>

            {/* Popular Blogs Section */}
            <div className='bg-white p-4'>
                <div className='max-w-[1440px] m-auto'>
                    <h1 className='text-4xl p-6 font-bold text-black'>Popular Blogs</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item, index) => (
                            <div
                                className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl"
                                key={index}
                            >
                                <div className="relative w-full h-56">
                                    <Image src={item.img} alt="Blog image" layout="fill" objectFit="cover" className="rounded-xl" />
                                </div>
                                <p className="text-gray-500 text-sm mt-4"><span className="text-blue-600 font-medium">{item.p}</span></p>
                                <h3 className="text-xl font-semibold mt-2 text-gray-800">{item.h1}</h3>
                                <p className="text-gray-600 mt-2 leading-relaxed">{item.text}</p>
                                <button className="mt-4 bg-[#232536] text-white px-4 py-2 rounded-lg hover:scale-105 hover:bg-[#6f7299] transition">Read More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
