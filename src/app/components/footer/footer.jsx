import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { GoOrganization } from "react-icons/go";


function footer() {
  return (
    <div className='bg-[#232536]'>
      <div className='flex items-center justify-between m-auto w-[1400px] h-[160px]'>
        <div>
          <h1>Tashkent, Amir Temur Avenue, 100A</h1>
          <h1>Taiga3877@gmail.com | +998 (94) 772 20 32</h1>
        </div>
        <div className='flex gap-[20px]'>
          <FaSquareFacebook size={20} />
          <FaXTwitter size={20} />
          <RxInstagramLogo size={20} />
          <GoOrganization size={20} />


        </div>
      </div>
    </div>
  )
}

export default footer