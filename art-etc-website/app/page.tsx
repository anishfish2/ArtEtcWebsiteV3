'use client'

import Image from 'next/image'
import bunny from './art/bunny.png'
import artEtcLogo from './art/logo.png'
import barcode from './art/Art Etc.exe.png'
import cloud1 from './art/clouds.png'
import cloud2 from './art/clouds2.png'
import waves from './art/waves.svg'
import pinkgreenwave from './art/pinkgreen.svg'
import line1 from './art/line.svg'

import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { Gamja_Flower, Istok_Web, Poppins } from 'next/font/google'
const gamja = Gamja_Flower({ weight: '400', subsets: ['latin'] })
const istok = Istok_Web({weight: "400", subsets: ['latin']})

const images = [
  {
    src: bunny,
    description: 'Cait Vu - President',
  },
  {
    src: bunny,
    description: 'Taylor Rose - Vice President',
  },
  {
    src: bunny,
    description: 'Lily Lee - Director of Outreach',
  },
  {
    src: bunny,
    description: 'Ashley Graham - Treasurer',
  },
  {
    src: bunny,
    description: 'Anish Karthik - Website man',
  },
];

const images2 = [
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
];

const images3 = [
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
  bunny,
];

function ImageGallery() {
  return (
    <div className="flex flex-row justify-center items-center">
      {images.map((image, index) => (
        <div key={index} className="w-1/5 p-2">
          <Image
            src={image.src}
            alt={image.description}
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
          <p className="text-center text-xxs sm:text-lg lg:text-xl xl:text-4xl mt-2">{image.description}</p>
        </div>
      ))}
    </div>
  );
}

const settings = {
  dots: true,            // Show navigation dots below the slider
  infinite: true,        // Loop the slider infinitely
  speed: 2000,            // Transition speed in milliseconds
  slidesToShow: 2,       // Number of slides to show at once
  slidesToScroll: 1,     // Number of slides to scroll at a time
  autoplay: true,        // Enable autoplay
  autoplaySpeed: 4000,   // Autoplay speed in milliseconds
  centerMode: true,      // Enable center mode
  centerPadding: '100',    // Adjust the center padding
  rtl: true,
};

const settings2 = {
  dots: true,            // Show navigation dots below the slider
  infinite: true,        // Loop the slider infinitely
  speed: 2000,            // Transition speed in milliseconds
  slidesToShow: 2,       // Number of slides to show at once
  slidesToScroll: 1,     // Number of slides to scroll at a time
  autoplay: true,        // Enable autoplay
  autoplaySpeed: 4000,   // Autoplay speed in milliseconds
  centerMode: true,      // Enable center mode
  centerPadding: '100',    // Adjust the center padding
  rtl: false,
};

function ImageSlider() {
  return (
    <Slider {...settings}>
      {images2.map((image, index) => (
        <div className="" key={index}>
          <Image src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
}

function ImageSlider2() {
  return (
    <Slider {...settings2}>
      {images3.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
}

export default function Home() {
  
  return (
    
    <div className={`bg-[#F6AF42] flex flex-col justify-between custom-cursor ${gamja.className}`}>
      
      {/* Container for Images and Buttons */}
      <div className="bg-white p-4 w-screen flex flex-col sm:flex-row items-center justify-between space-y-4">
        {/* Two Images on the Left */}
        <div className="flex flex-row items-center justify-start space-x-4">
          <Image
            src={bunny} 
            alt="Image 1"
            className="w-20 h-20 rounded-full"
          />
          <Image
            src={barcode} 
            alt="Image 2"
            className="w-10 h-20"
          />
        </div>
        
        {/* Series of Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-evenly space-y-2 sm:space-y-0 sm:space-x-12 text-lg lg:text-4xl xl:text-4xl 2xl:text-7xl">
          <a href="#about-us">
            <button className="text-black border-4 bg-[#79DAAD] border-[#1C975E] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">About Us</button>
          </a>
          <a href="#calendar">
            <button className="text-black border-4 bg-[#F6AF42] border-[#88501D] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Calendar</button>
          </a>
          <a href="#showcase">
            <button className="text-black border-4 bg-[#F18B9F] border-[#A9364C] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Showcase</button>
          </a>
          <a href="#team">
            <button className="text-black border-4 bg-[#A1BFE0] border-[#456A92] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Team</button>
          </a>
          <a href="#gallery">
            <button className="text-black border-4 bg-[#ED465F] border-[#771221] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Gallery</button>
          </a>
        </div>
      </div>

      {/* Logo Image */}
      <div className="flex items-center justify-end mt-16 mr-4">
        <div className="grid grid-cols-1 text-center text-lg font-bold">
          <Image
            src={artEtcLogo} 
            alt="Your Image"
            className="max-w-full h-auto"
          />
          <p className="text-black text-3xl md:text-6xl tracking-widest pt-8">Texas A&M University</p>
          <div className="flex justify-center mt-4 pt-4">
            <a href="">
              <button className="text-[#FFFFFF] tracking-widest text-xl md:text-3xl border-4 bg-[#EF643D] border-[#86280E] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4 mx-8">Join Us</button>
            </a>
            <a href="https://discord.gg/pE7zmZSJ46">
              <button className="text-[#FFFFFF] tracking-widest text-xl md:text-3xl border-4 bg-[#A1BFE0] border-[#456A92] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4 mx-8 mt-2 sm:mt-0">Discord</button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={cloud1} 
          alt="Image 1"
          className="animate-move-horizontal-right"
        />
        <div className="absolute w-1/2 2xl:w-1/3 top-0 left-12 right-0 bottom-0 flex flex-col justify-center items-start text-white font-semibold ">
          <p id="about-us" className="text-black text-4xl sm:text-6xl lg:text-9xl">About Us</p>
            <p className={ ` hidden lg:block text-black text-sm sm:text-lg md:xl lg:text-2xl w-full lg:w-2/3 pt-4 lg:pt-12 ${istok.className}`}>
            Art Etc. is an all-inclusive art organization that welcomes members regardless of religion, identity, major, medium, or art style. We provide our members unique experiences such as figure drawing, painting, origami, and give them the opportunity to display their hard work and creativity through our annual end-of-the-year student art gallery. Art Etc. seeks to create an active network of friendships among TAMU artists and art groups, both within and across disciplines. We hope to aid our members in seeking out collaborative opportunities and strategies, and to create a unified voice and image for TAMU artists.

            </p>
            <p className={`block lg:hidden text-black text-sm sm:text-lg md:xl lg:text-2xl w-full lg:w-2/3 pt-4 lg:pt-12 ${istok.className}`}>
              Our mission is to provide a space for all TAMU undergraduate, graduate, and faculty to find their creative freedoms and explore their artistic goals freely.
            </p>
        </div>
      </div>

      <div className="relative overflow-hidden flex flex-row justify-end items-center bottom-0 md:bottom-40 xl:bottom-96">
        <Image
          src={cloud2} 
          alt="Image 1"
          className="animate-move-horizontal-left relative right-0"
        />
        <div className="absolute w-1/2 2xl:w-1/3 top-0 right-0 bottom-0 flex flex-col justify-center items-end text-white font-semibold ">
          <p className="text-black text-4xl sm:text-6xl lg:text-9xl left-0 pr-8">Schedule</p>
          <p className={`text-black text-sm sm:text-lg md:xl lg:text-2xl w-full lg:w-2/3 pt-4 lg:pt-12 ${istok.className}`}>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={waves} 
          alt="Image 1"
          className="w-full"
        />
        <div className="absolute w-full pt-24 top-0 left-0 right-0 bottom-0 flex flex-row justify-evenly items-center text-white font-semibold ">
          <div className="w-1/2 xl:w-1/2 pt-24 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white font-semibold ">
            <p className="text-2xl sm:text-6xl lg:text-7xl 2xl:text-9xl tracking-widest">What we do</p>
            <p className={`text-xxs sm:text-xs md:text-xs lg:text-xl 2xl:text-3xl w-full lg:w-2/3 pt-4 pb-48 sm:pb-40 md:pb-20 xl:pb-0 ${istok.className}`}>Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf</p>
          </div>
          <Image
          src={line1} 
          alt="Image 1"
          className=" h-1/2 mb-20 md:mb-8"
        />
        <div className="w-1/3 pb-12 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white font-semibold ">
            <p className="text-2xl sm:text-6xl lg:text-7xl 2xl:text-9xl tracking-widest">FAQ</p>
            <p className={`text-xs sm:text-md md:text-xl lg:text-2xl 2xl:text-3xl w-3/4 lg:w-2/3 pt-4 sm:pt-8 lg:pt-8 ${istok.className}`}>Q: Question 1</p>
            <p className={`text-xs sm:text-md md:text-xl lg:text-2xl 2xl:text-3xl w-3/4 lg:w-2/3 ${istok.className}`}>A: Question 1</p>
            <p className={`text-xs sm:text-md md:text-xl lg:text-2xl 2xl:text-3xl w-3/4 lg:w-2/3 pt-4 sm:pt-8 lg:pt-12 ${istok.className}`}>Q: Question 2</p>
            <p className={`text-xs sm:text-md md:text-xl lg:text-2xl 2xl:text-3xl w-3/4 lg:w-2/3 pb-20 sm:pb-0 ${istok.className}`}>A: Question 2</p>
          </div>
        </div>
        <div id="calendar" className="text-white text-4xl md:text-7xl xl:text-9xl pl-12 tracking-widest">Calendar</div>
      </div>
      <div className="flex flex-col justify-center items-center pt-8">
        <div className="w-3/4 h-100 bg-white rounded-2xl"></div>
      </div>
      <div className="z-2 relative">
        <p id="showcase" className="absolute text-white pl-8 top-12 sm:top-32 2xl:top-64 text-3xl sm:text-6xl lg:text-9xl tracking-widest">Showcase</p>
        <Image
          src={pinkgreenwave} 
          alt="Image 1"
          className=" static w-full bg-transparent"
        />
        <div className="absolute w-full pb-36 sm:pb-80 md:pb-100 lg:pb-140 xl:pb-180 2xl:pb-220 3xl:pb-380 sm:pt-0 xl:pt-0 top-0 left-0 right-0 bottom-0 flex flex-row justify-around items-center text-white font-semibold ">
          <div className="w-full flex flex-col justify-between items-start text-white font-semibold">
            <p className={`text-xxs pl-12 sm:pl-8 sm:text-lg lg:text-3xl 2xl:text-5xl w-full sm:w-5/6 pt-0 lg:pt-12 ${istok.className}`}>Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf</p>
          </div>
          <div className="w-1/4 h-1/5 bg-white rounded-2xl mr-12"></div>
        </div>
        <div className="absolute bottom-12 sm:bottom-20 lg:bottom-40 2xl:bottom-120 3xl:bottom-160 w-full">
            <h1 id="team" className="text-xl sm:text-5xl xl:text-9xl sm:pb-12 text-white tracking-widest">Meet The Team</h1>
              <ImageGallery />
            
        </div>
        
      </div>
      <h1 id="gallery" className="text-4xl sm:text-7xl md:7xl xl:text-9xl pl-12 sm:pb-12 text-white tracking-widest">Gallery</h1>

      <div className="w-screen h-1/2 flex items-center justify-center">
        <div className="relative w-5/6 pt-12 lg:pt-40">
          <ImageSlider />
        </div>
      </div>
      <div className="w-screen h-1/2 flex items-center justify-center">
        <div className="relative w-5/6 pt-12 lg:pt-40">
          <ImageSlider2 />
        </div>
      </div>
      <div className="mt-44 w-screen h-12 flex text-md sm:text-5xl items-center justify-evenly text-black bg-white">
        <a href="https://discord.gg/pE7zmZSJ46">Discord</a>
        <a href="https://www.instagram.com/tamuartetc/">Instagram</a>
        <a href="mailto:artetc.tamu@gmail.com">Email</a>
      </div>
      
    </div>

  )
}
