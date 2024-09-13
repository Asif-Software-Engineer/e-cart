import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { Slider } from './slider/Slider';
import NavigateButton from '../navigate/NavigateButton';

export const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <NavigateButton></NavigateButton>
    </div>
  )
}
