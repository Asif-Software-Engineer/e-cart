import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { Slider } from './slider/Slider';
import NavigateButton from '../navigate/NavigateButton';
import ProductSection from '../productSection/ProductSection';

export const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='max-w-screen-2xl w-full'>
        <Navbar></Navbar>
        <Slider></Slider>
        <NavigateButton></NavigateButton>
        <ProductSection></ProductSection>
        </div>
    </div>
  )
}
