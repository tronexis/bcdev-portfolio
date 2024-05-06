'use client'

import Image from "next/image"
import { LinkIcon } from "../common/Icon"

interface Props {
  title: string
  description: string
  image: string
  link: string
}

const Certificaton = ({ title, image, description, link }: Props) => {
  return (
    <div className="flex">
      <div className="relative rounded-md p-2 border border-base-300">
        <Image src={image} alt={description} width={400} height={300} className="w-full lg:max-w-[400px] " />
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 hover:bg-gray-300 opacity-0 hover:opacity-100 rounded-md transition-all duration-500 hover:bg-opacity-50">
          <a href={link} target="_blank" className="p-4 rounded-full bg-base-100 text-base-200 opacity-70">
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Certificaton