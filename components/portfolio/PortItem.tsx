import Image from "next/image"
import { LinkIcon } from "../common/Icon"

type Props = {
  imgSrc: string
  title: string
  description: string
  link: string
}

const PortItem = ({ description, title, imgSrc, link }: Props) => {
  return (
    <div className="text-base-200 p-2">
      <div className="grayscale hover:grayscale-0 transition-all duration-500 relative flex flex-col">
        <Image src={imgSrc} alt={description} width={300} height={100} className="border-base-100 shadow-lg border w-full rounded-md" />
        <div className="absolute w-full bg-gray-900 rounded-md bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500 h-full flex flex-col justify-center items-center">
          <a href={link} target="_blank" className="w-14 text-white opacity-90 h-14 flex justify-center items-center rounded-full bg-base-100">
            <LinkIcon />
          </a>
        </div>
      </div>
      <div className="text-center pt-4 text-2xl font-semibold">{title}</div>
      <div className="opacity-85 mt-2">{description}</div>

    </div>
  )
}

export default PortItem