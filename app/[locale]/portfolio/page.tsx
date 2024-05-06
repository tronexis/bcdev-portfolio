import PortItem from "@/components/portfolio/PortItem";

interface Portfolio {
  title: string
  description: string
  imgSrc: string
  link: string
}

const portfolios: Portfolio[] = [
  {
    title: 'My Portfolio',
    description: 'A portfolio website with responsive, switchable themes and multi-language display using Next.js.',
    imgSrc: '/portfolio/0/00.png',
    link: 'https://yamataku.vercel.app/',
  },
  {
    title: 'TokenStand Swap',
    description: 'Be a DeFi Chef with TokenStand. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi',
    imgSrc: '/portfolio/1/00.png',
    link: 'https://tokenstand.finance/',
  },
  {
    title: 'Red Kite',
    description: 'Launch hand-picked projects and help them shine. Hold $PKF to participate.',
    imgSrc: '/portfolio/2/00.png',
    link: 'https://redkitepad.com/',
  },
  {
    title: 'HoDooi',
    description: 'Multi-chain NFT marketplace supporting Ethereum Polyon and Binance Smart Chain',
    imgSrc: '/portfolio/3/00.png',
    link: 'https://www.hodooi.com/',
  },
  {
    title: 'TrustPad',
    description: 'TrustPad is a decentralized multi-chain fundraising platform enabling projects to raise capital and promise safety to early stage participants.',
    imgSrc: '/portfolio/4/00.png',
    link: 'https://trustpad.io/',
  },
  {
    title: 'Metaverse Starter',
    description: 'Metaverse Starter - Accelerate Growth at Any Scale powered by Bunicorn',
    imgSrc: '/portfolio/5/00.png',
    link: 'https://metaversestarter.io/',
  },
  {
    title: 'Solster - IDO Launchpad',
    description: 'Lottery Platform on Solana Blockchain',
    imgSrc: '/portfolio/6/00.png',
    link: 'https://solster.finance/',
  },
  {
    title: 'SOTA',
    description: 'Enable easy creation and transaction of Limited Digital Content Editions secured with blockchain to mass users',
    imgSrc: '/portfolio/7/00.png',
    link: 'https://sota.finance/',
  },
  {
    title: 'D-Wallet',
    description: 'The leading crypto wallet available on browser extension and mobile application. D-wallet allows you to buy crypto assets such as Ethereum, Matic, Solana, and so on. ',
    imgSrc: '/portfolio/8/00.png',
    link: 'https://www.d-wallet.io/',
  },
  {
    title: 'D-Ecosystem',
    description: 'A Valuable Blockchain & Web3 Platform Worth Checking Out',
    imgSrc: '/portfolio/9/00.png',
    link: 'https://www.d-ecosystem.io/',
  },
]

export default async function PortfolioPage() {
  return (
    <div className="px-10 pt-20 pb-32 md:py-20 md:px-20 lg:px-14 container mx-auto">
      <div className="w-full relative">
        <div className="tracking-widest text-center uppercase text-4xl md:text-6xl lg:text-8xl text-base-300 font-extrabold">Portfolio</div>
        <div className="absolute w-full text-center translate-y-[-50%] text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-wider top-[50%] uppercase text-base-100">Projects</div>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:px-6 gap-x-12 gap-y-6 lg:gap-y-12 md:gap-y-12 px-0 md:px-2 mx-auto">
        {
          portfolios.map((portfolio, pIdx) => (
            <PortItem
              title={portfolio.title}
              description={portfolio.description}
              imgSrc={portfolio.imgSrc}
              link={portfolio.link}
              key={pIdx}
            />
          ))
        }
      </div>
    </div>
  )
}