import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative w-[1920px]">
      <Image src="/img/hero-bg.png" alt="alt" width={1920} height={1024.66} className="" />
      <div className="absolute top-0 left-0 flex w-full">
        <div className="flex flex-col mx-auto">
          <h1 className=" text-white mt-[381.51px] mb-[48.65px]  border-white border-l-[8.41px] pl-[18.38px] font-[700] text-[72px] leading-[87.14px] tracking-[-1.7%] w-[1306.12px]">Kvalitní okna od výrobce Rehau v nejlepším poměru cena:výkon  </h1>
          <Link href="#" className=" text-white font-[600] text-[30px] bg-[#DD222A] w-[383.2px] place-content-center text-center h-[61.04px] rounded-full leading-[36.31px] tracking-[-1.7%]">Druhy oken a dveří</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero