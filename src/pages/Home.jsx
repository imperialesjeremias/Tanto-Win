import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

import VideoBackground from '../components/VideoBackground';

const Home = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-6rem)] 
      md:h-[calc(100vh-5.5rem)] text-[#fff] font-avertaRegular flex-col text-[45px] md:justify-end md:items-start'>
      <VideoBackground />
      <div className='flex flex-col items-center md:flex-row md:w-full md:p-10 md:justify-between md:items-end'>
        <div className='text-center md:text-start '>
          <h1>VISUALIZING</h1>
          <h1>YOUR</h1>
          <h1>SUCCESS</h1>
        </div>
        <div>
          <button className='btn btn-ghost'>
            <IoIosArrowDown className='text-4xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
