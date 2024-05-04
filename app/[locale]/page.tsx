import ThemeToggle from "@/components/theme/ThemeToggle"
import { getScopedI18n } from "@/locales/server"
import './index.scss'
import Image from "next/image"


export default async function LocalePage() {
  const profileT = await getScopedI18n('profile')

  return (
    <div className="full-container flex relative overflow-clip">
      <div className="transform-15deg absolute bg-base-100 h-[200%] w-[100%] left-[-83%] top-[-50%] hidden md:hidden lg:block"></div>
      <div className="flex h-full w-full items-center z-10 overflow-auto">
        <div className="md:w-[60%] lg:w-[50%] h-[80%] ml-[5%] bg-white shadow-md rounded-lg hero-photo hidden lg:block"></div>
        <div className="w-full px-10 xl:px-48 lg:px-20 md:px-20 overflow-auto h-full content-center py-20">
          <div className="w-full flex justify-center mb-16 lg:hidden">
            <div className="hero-photo-mobile w-56 h-56 border-base-300 border-4 rounded-full" />
          </div>
          <h1 className="text-base-100 lg:text-left text-center text-4xl md:text-6xl font-extrabold">{profileT('name')}</h1>
          <h1 className="text-base-200 lg:text-left text-center mt-8 text-2xl md:text-3xl font-semibold">{profileT('position')}</h1>
          <h1 className="text-base-200 leading-8 text-lg mt-8 whitespace-break-spaces text-justify" dangerouslySetInnerHTML={{ __html: profileT('summary') }}></h1>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}