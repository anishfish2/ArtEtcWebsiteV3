import Image from 'next/image'
import bunny from './art/bunny.png'
import artEtcLogo from './art/logo.png'
import barcode from './art/Art Etc.exe.png'
export default function Home() {
  return (
    <div className="bg-[#F6AF42] h-auto w-zfull">
      <div className="bg-[#F6AF42] relative width-full flex flex-row justify-end gap-12 text-3xl pt-40">
        <Image className="" src={bunny} alt="bunny :)"></Image>
        <Image className="" src={barcode} alt="barcode :)"></Image>
        <div className="bg-[#79DAAD] border-[#1C975E] border-4 rounded-3xl text-[#000000] flex items-center flex-row justify-end w-1/5">About Us</div>
        <div className="bg-[#F6AF42] border-[#88501D] border-4 rounded-3xl text-[#000000] flex items-center flex-row justify-end w-1/5">Calendar</div>
        <div className="bg-[#F18B9F] border-[#A9364C] border-4 rounded-3xl text-[#000000] flex items-center flex-row justify-end w-1/5">Showcase</div>
        <div className="bg-[#A1BFE0] border-[#456A92] border-4 rounded-3xl text-[#000000] flex items-center flex-row justify-end w-1/5">Team</div>
        <div className="bg-[#ED465F] border-[#771221] border-4 rounded-3xl text-[#000000] flex items-center flex-row justify-end w-1/5">Gallery</div>
      </div>
    </div>
  )
}
