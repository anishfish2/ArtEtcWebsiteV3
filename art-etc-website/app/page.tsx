import Image from 'next/image'
import bunny from './art/bunny.png'
import artEtcLogo from './art/logo.png'
import barcode from './art/Art Etc.exe.png'

import { Gamja_Flower, Poppins } from 'next/font/google'
const gamja = Gamja_Flower({ weight: '400', subsets: ['latin'] })


export default function Home() {
  return (
    <div className={`bg-[#F6AF42] h-auto w-screen ${gamja.className}`}>
      <div className="bg-[#F6AF42] relative flex flex-row justify-around 2xl:gap-4 xl:mr-8 2xl:mr-8">
        <div className="flex flex-row justify-evenly xl:gap-4 md:pt-8 xl:pt-12 2xl:pt-20 2xl:gap-4">
          <Image className="xl:mt-4 w-20 xl:w-32 2xl:w-60 md:h-20 xl:h-32 2xl:h-60" src={bunny} alt="bunny :)"></Image>
          <Image className="xl:mt-4 w-20 xl:w-12 2xl:w-20 md:h-24 xl:h-40 2xl:h-80" src={barcode} alt="barcode :)"></Image>
        </div>
        <div className="flex flex-row  justify-around gap-2 md:gap-4 xl:gap-12 md:pt-12 2xl:pt-24 text-xs sm:text-xl md:text-3xl 2xl:text-7xl xl:mt-12">
          <div className="bg-[#79DAAD] border-[#1C975E] border-2 2xl:border-8 rounded-xl 2xl:rounded-3xl text-[#000000] flex items-center flex-row justify-center h-8 w-12 sm:h-8 sm:w-20 md:h-12 md:w-28 lg:h-16 lg:w-40 2xl:w-80 2xl:h-40">About Us</div>
          <div className="bg-[#F6AF42] border-[#88501D] border-2 2xl:border-8 rounded-xl 2xl:rounded-3xl text-[#000000] flex items-center flex-row justify-center h-8 w-12 sm:h-8 sm:w-20 md:h-12 md:w-28 lg:h-16 lg:w-40 2xl:w-80 2xl:h-40">Calendar</div>
          <div className="bg-[#F18B9F] border-[#A9364C] border-2 2xl:border-8 rounded-xl 2xl:rounded-3xl text-[#000000] flex items-center flex-row justify-center h-8 w-12 sm:h-8 sm:w-20 md:h-12 md:w-28 lg:h-16 lg:w-40 2xl:w-80 2xl:h-40">Showcase</div>
          <div className="bg-[#A1BFE0] border-[#456A92] border-2 2xl:border-8 rounded-xl 2xl:rounded-3xl text-[#000000] flex items-center flex-row justify-center h-8 w-12 sm:h-8 sm:w-20 md:h-12 md:w-28 lg:h-16 lg:w-40 2xl:w-80 2xl:h-40">Team</div>
          <div className="bg-[#ED465F] border-[#771221] border-2 2xl:border-8 rounded-xl 2xl:rounded-3xl text-[#000000] flex items-center flex-row justify-center h-8 w-12 sm:h-8 sm:w-20 md:h-12 md:w-28 lg:h-16 lg:w-40 2xl:w-80 2xl:h-40">Gallery</div>
        </div>
      </div>
      <div className="relative flex flex-row justify-end w-auto">
        <div className="relative 2xl:ml-80 overflow-hidden">
          <div className="absolute ml-140 2xl:ml-240">
            <Image className="2xl:w-300 2xl:h-180" src={artEtcLogo} alt="Art Etc Logo :)"></Image>
          </div>
          <div className="absolute mt-80 w-1/2 2xl:mt-120 ml-180 text-5xl 2xl:text-7xl text-black">
              Texas A&M University
          </div>
          <div className="relative ml-140 mt-100 2xl:mt-140 text-3xl flex flex-row justify-center gap-12">
            <div className="bg-[#79DAAD] border-[#1C975E] h-16 w-40 border-4 rounded-3xl text-[#000000] flex items-center flex-row justify-center w-40">Join Us</div>
            <div className="bg-[#79DAAD] border-[#1C975E] h-16 w-40 border-4 rounded-3xl text-[#000000] flex items-center flex-row justify-center w-40">About Us</div>
          </div>
        </div>
      </div>
    </div>
  )
}
