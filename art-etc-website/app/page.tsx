import Image from 'next/image'
import bunny from './art/bunny.png'
import artEtcLogo from './art/logo.png'
import barcode from './art/Art Etc.exe.png'
import cloud1 from './art/clouds.png'
import cloud2 from './art/clouds2.png'
import waves from './art/waves.svg'
import pinkwave from './art/pinkwave.svg'

import line1 from './art/line.svg'

import { Gamja_Flower, Istok_Web, Poppins } from 'next/font/google'
const gamja = Gamja_Flower({ weight: '400', subsets: ['latin'] })
const istok = Istok_Web({weight: "400", subsets: ['latin']})


export default function Home() {
  return (
    
    <div className={`bg-[#F6AF42] flex flex-col justify-between ${gamja.className}`}>
      {/* Container for Images and Buttons */}
      <div className="bg-white p-4 rounded-lg w-full max-w-screen-3xl flex flex-col sm:flex-row items-center justify-between space-y-4">
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
          <button className="text-black border-4 bg-[#79DAAD] border-[#1C975E] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">About Us</button>
          <button className="text-black border-4 bg-[#F6AF42] border-[#88501D] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Calendar</button>
          <button className="text-black border-4 bg-[#F18B9F] border-[#A9364C] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Showcase</button>
          <button className="text-black border-4 bg-[#A1BFE0] border-[#456A92] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Team</button>
          <button className="text-black border-4 bg-[#ED465F] border-[#771221] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4">Gallery</button>
        
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
            <button className="text-[#FFFFFF] tracking-widest text-xl md:text-3xl border-4 bg-[#EF643D] border-[#86280E] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4 mx-8">Join Us</button>
            <button className="text-[#FFFFFF] tracking-widest text-xl md:text-3xl border-4 bg-[#A1BFE0] border-[#456A92] hover:border-blue-500 focus:border-black focus:text-white focus:bg-black transition duration-300 ease-in-out rounded-xl py-2 px-4 mx-8 mt-2 sm:mt-0">Discord</button>
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
          <p className="text-black text-4xl sm:text-6xl lg:text-9xl">About Us</p>
          <p className={`text-black text-sm sm:text-lg md:xl lg:text-2xl w-full lg:w-2/3 pt-4 lg:pt-12 ${istok.className}`}>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
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
          <div className="w-1/2 xl:w-1/3 pt-24 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white font-semibold ">
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
        <div className="text-4xl md:text-7xl pl-12 tracking-widest">Calendar</div>
      </div>
      <div className="flex flex-col justify-center items-center pt-8">
        <div className="w-3/4 h-100 bg-white rounded-2xl"></div>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={pinkwave} 
          alt="Image 1"
          className="w-full"
        />
        <p className="absolute bottom-200 pl-8 text-4xl sm:text-6xl lg:text-7xl tracking-widest">Showcase</p>
        <div className="absolute w-full pt-24 top-0 left-0 right-0 bottom-60 flex flex-row justify-around items-center text-white font-semibold ">
          <div className="w-2/3 pt-8 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white font-semibold ">
            
            <p className={`text-xxs sm:text-sm lg:text-2xl w-full lg:w-2/3 pt-0 lg:pt-12 ${istok.className}`}>Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf Ooga booga ooga moogoa sosososo lelelelea lisnflsienfl iaesnflasingls indglisdn flskdnflksdn flskdnfl skd nflsknf</p>
            
          </div>
          <div className="w-1/4 h-100 bg-white rounded-2xl"></div>

        </div>
      </div>
    </div>

  )
}
