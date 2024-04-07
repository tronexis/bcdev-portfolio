'use client'
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="mx-auto py-[12px] pl-[147px] flex justify-between items-center">
      <Link href="#" >
        <Image src={'/img/logo.png'} priority alt={"header logo"} width={198} height={106} className="w-auto h-auto " />
      </Link>
      <div className="flex mr-[153px] items-center">
        <Link href="#" className="text-[#7A7A7A] text-center font-[500] leading-[30px] tracking-[-1.7%] text-[25px] w-[182px] mr-[31px]">O nás</Link>
        <Link href="#" className="text-[#7A7A7A] text-center font-[500] leading-[30px] tracking-[-1.7%] text-[25px] w-[278px] mr-[76px]">Okna a dveře</Link>
        <Link href="#" className="text-[#7A7A7A] text-center font-[500] leading-[30px] tracking-[-1.7%] text-[25px] w-[182px] mr-[54px]">Ke stažení</Link>
        <Link href={'#'} className="font-[700] text-white text-center place-content-center rounded-[50px] leading-[30px] tracking-[-1.7%] text-[25px] bg-[#DD222A] w-[197px] h-[45px]">Kontakt</Link>
      </div>
    </div>
  )
}

export default Header