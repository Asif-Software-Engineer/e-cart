import React from 'react';
import logo from "../../assets/images/logo.png";

export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='py-4 px-8'>
        <hr />
        <div className='px-40 flex justify-between items-center'>
            <img src={logo} alt="logo" className='w-16'/>
            <p className='text-sm font-semibold'>Copyright {year} page by Web Eng </p>
        </div>
    </div>
  )
}
