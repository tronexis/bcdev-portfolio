'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { CommentsIcon, HomeIcon, MessageIcon, PortfolioIcon, UserIcon } from "../common/Icon"

interface Props {
  children?: React.ReactNode
  href: string
}

const AppLink: React.FC<Props> = ({ href, children }) => {
  const pathName = usePathname()
  let active = pathName.includes('/en' + href) || pathName.includes('/ja' + href)
  if (href === '/')
    active = pathName === '/en' || pathName === '/ja'
  const activeClass = active ? ' bg-base-100 text-white' : ' bg-base-400 text-base-200 '
  return <Link href={href} className={"w-12 h-12 rounded-full hover:bg-base-100 hover:text-white content-center flex-col items-center flex justify-center hover:transition-all hover:duration-500" + activeClass}>
    {children}
  </Link>
}

const AppRigtLink: React.FC<Props> = ({ href, children }) => {
  const pathName = usePathname()
  let active = pathName.includes('/en' + href) || pathName.includes('/ja' + href)
  if (href === '/')
    active = pathName === '/en' || pathName === '/ja'
  const activeClass = active ? ' bg-base-100 text-white' : ' bg-base-300 text-base-200 '
  return <Link href={href} className={"w-12 h-12 rounded-full hover:bg-base-100 hover:text-white content-center flex-col items-center flex justify-center hover:transition-all hover:duration-500" + activeClass}>
    {children}
  </Link>
}


const Navbar = () => {
  return (
    <>
      <header className="fixed bottom-0 w-full flex md:hidden justify-around py-2 px-6 z-10 bg-base-300 rounded-t-full">
        <AppLink href={'/'} >
          <HomeIcon />
        </AppLink>
        <AppLink href={'/info'}>
          <UserIcon />
        </AppLink>
        <AppLink href={'/portfolio'}>
          <PortfolioIcon />
        </AppLink>
        <AppLink href={'/contact'}>
          <MessageIcon />
        </AppLink>
        <AppLink href={'/blog'}>
          <CommentsIcon />
        </AppLink>
      </header >

      <header className="fixed top-[50%] items-center md:flex hidden right-6 xl:right-8 gap-8 z-10 flex-col justify-center translate-y-[-50%]">
        <AppRigtLink href={'/'} >
          <HomeIcon />
        </AppRigtLink>
        <AppRigtLink href={'/info'}>
          <UserIcon />
        </AppRigtLink>
        <AppRigtLink href={'/portfolio'}>
          <PortfolioIcon />
        </AppRigtLink>
        <AppRigtLink href={'/contact'}>
          <MessageIcon />
        </AppRigtLink>
        <AppRigtLink href={'/blog'}>
          <CommentsIcon />
        </AppRigtLink>
      </header>
    </>
  )
}

export default Navbar