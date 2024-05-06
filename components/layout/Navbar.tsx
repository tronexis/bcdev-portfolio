import Link from "next/link"
import { HomeIcon, PortfolioIcon, UserIcon, MessageIcon, CommentsIcon } from "../common/Icon"

const Navbar = () => {
  return (
    <>
      <header className="fixed bottom-0 w-full flex md:hidden justify-around py-2 px-6 z-10 bg-base-300 rounded-t-full">
        <Link href={'/'} className="w-12 h-12 rounded-full bg-base-400 text-base-200 hover:bg-base-100 content-center flex-col items-center flex justify-center hover:text-white">
          <HomeIcon />
        </Link>
        <Link href={'/info'} className="w-12 h-12 rounded-full bg-base-400 text-base-200 hover:bg-base-100 content-center flex-col items-center flex justify-center hover:text-white">
          <UserIcon />
        </Link>
        <Link href={'/portfolio'} className="w-12 h-12 rounded-full bg-base-400 text-base-200 hover:bg-base-100 content-center flex-col items-center flex justify-center hover:text-white">
          <PortfolioIcon />
        </Link>
        <Link href={'/contact'} className="w-12 h-12 rounded-full bg-base-400 text-base-200 hover:bg-base-100 content-center flex-col items-center flex justify-center hover:text-white">
          <MessageIcon />
        </Link>
        <Link href={'/blog'} className="w-12 h-12 rounded-full bg-base-400 text-base-200 hover:bg-base-100 content-center flex-col items-center flex justify-center hover:text-white">
          <CommentsIcon />
        </Link>
      </header >

      <header className="fixed top-[50%] items-center md:flex hidden right-6 xl:right-8 gap-8 z-10 flex-col justify-center translate-y-[-50%]">
        <Link href={'/'} className="w-12 h-12 rounded-full bg-base-300 text-base-200 content-center flex-col items-center flex justify-center hover:bg-base-100 hover:text-white transition-all duration-500">
          <HomeIcon />
        </Link>
        <Link href={'/info'} className="w-12 h-12 rounded-full bg-base-300 text-base-200 content-center flex-col items-center flex justify-center hover:bg-base-100 hover:text-white transition-all duration-500">
          <UserIcon />
        </Link>
        <Link href={'/portfolio'} className="w-12 h-12 rounded-full bg-base-300 text-base-200 content-center flex-col items-center flex justify-center hover:bg-base-100 hover:text-white transition-all duration-500">
          <PortfolioIcon />
        </Link>
        <Link href={'/contact'} className="w-12 h-12 rounded-full bg-base-300 text-base-200 content-center flex-col items-center flex justify-center hover:bg-base-100 hover:text-white transition-all duration-500">
          <MessageIcon />
        </Link>
        <Link href={'/blog'} className="w-12 h-12 rounded-full bg-base-300 text-base-200 content-center flex-col items-center flex justify-center hover:bg-base-100 hover:text-white transition-all duration-500">
          <CommentsIcon />
        </Link>
      </header>
    </>
  )
}

export default Navbar