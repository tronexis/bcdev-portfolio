import Certificaton from "@/components/info/Certificaton"
import CircularProgressBar from "@/components/info/CircularProgressBar"
import Experience from "@/components/info/Experience"
import '@/components/info/info.scss'
import Image from "next/image"

export default async function InfoPage() {
  return (
    <div className="px-10 pt-20 pb-32 md:py-20 md:px-20 lg:px-14 container mx-auto">
      <div className="w-full relative">
        <div className="tracking-widest text-center uppercase text-4xl md:text-6xl lg:text-8xl text-base-300 font-extrabold">Information</div>
        <div className="absolute w-full text-center translate-y-[-50%] text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-wider top-[50%] uppercase"><span className="text-base-200">About</span> <span className="text-base-100">ME</span></div>
      </div>
      <div className="flex mt-12 flex-col lg:flex-row">
        <div className="w-full text-base md:text-lg text-base-200 flex flex-col gap-6">
          <div className="md:text-3xl text-2xl font-bold">PERSONAL INFO</div>
          <div className="w-full flex justify-center my-6 lg:hidden">
            <div className="hero-photo-mobile w-56 h-56 border-base-300 border-4 rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">Name: <b>Taku</b></div>
            <div className="w-full">Surname: <b>Yamamoto</b></div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">Country: <b>Japan</b></div>
            <div className="w-full">Address: <b>Osaka, Japan</b></div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 lg:flex-col xl:flex-row">
            <div className="w-full">Phone: <b>+08043963016</b></div>
            <div className="w-full">Languages: <b>Japanese, English</b></div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">Email: <b>truepartner312@gmail.com</b></div>
          </div>
          <div>
            <button className="p-2 border-2 rounded-full border-base-100 hover:bg-base-100 hover:text-white">Download Resumes</button>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-3 mt-8 lg:mt-0 lg:px-12">
          <div className="border-base-300 border p-3 md:p-5 xl:p-6 rounded-md">
            <div className="text-4xl md:text-5xl text-base-100 xl:text-6xl font-extrabold">
              8 <span className="text-3xl align-top font-semibold">+</span>
            </div>
            <div className="flex uppercase">
              <div className="w-12 border-t lg:hidden xl:block border-base-100 mt-4 mr-4 hidden md:block" />
              <div className="text-lg md:text-2xl lg:text-lg xl:text-2xl text-base-200 font-medium">
                Years of<br /> experience
              </div>
            </div>
          </div>
          <div className="border-base-300 border p-3 md:p-5 xl:p-6 rounded-md">
            <div className="text-4xl md:text-5xl text-base-100 xl:text-6xl font-extrabold">
              5 <span className="text-3xl align-top font-semibold">+</span>
            </div>
            <div className="flex uppercase">
              <div className="w-12 border-t lg:hidden xl:block border-base-100 mt-4 mr-4 hidden md:block" />
              <div className="text-lg md:text-2xl lg:text-lg xl:text-2xl text-base-200 font-medium">
                Projects<br /> completed
              </div>
            </div>
          </div>
          <div className="border-base-300 border p-3 md:p-5 xl:p-6 rounded-md">
            <div className="text-4xl md:text-5xl text-base-100 xl:text-6xl font-extrabold">
              5 <span className="text-3xl align-top font-semibold">+</span>
            </div>
            <div className="flex uppercase">
              <div className="w-12 border-t lg:hidden xl:block border-base-100 mt-4 mr-4 hidden md:block" />
              <div className="text-lg md:text-2xl lg:text-lg xl:text-2xl text-base-200 font-medium">
                Years of<br /> development
              </div>
            </div>
          </div>
          <div className="border-base-300 border p-3 md:p-5 xl:p-6 rounded-md">
            <div className="text-4xl md:text-5xl text-base-100 xl:text-6xl font-extrabold">
              2 <span className="text-3xl align-top font-semibold">+</span>
            </div>
            <div className="flex uppercase">
              <div className="w-12 border-t lg:hidden xl:block border-base-100 mt-4 mr-4 hidden md:block" />
              <div className="text-lg md:text-2xl lg:text-lg xl:text-2xl text-base-200 font-medium">
                Language<br /> spoken
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center my-12 md:my-24">
        <hr className="w-96 border-t border-base-300"></hr>
      </div>
      <div>
        <div className="md:text-3xl text-2xl font-bold text-base-200 mb-14">TECHNICAL SKILLS</div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 lg:gap-y-24 gap-y-20 ">
          <CircularProgressBar percentage={90} sqSize={120} strokeWidth={8} icon='/svg/typescript-svgrepo-com.svg' />
          <CircularProgressBar percentage={75} sqSize={120} strokeWidth={8} icon='/svg/rust-svgrepo-com.svg' />
          <CircularProgressBar percentage={83} sqSize={120} strokeWidth={8} icon='/svg/go-svgrepo-com.svg' />
          <CircularProgressBar percentage={87} sqSize={120} strokeWidth={8} icon='/svg/python-svgrepo-com.svg' />
          <CircularProgressBar percentage={95} sqSize={120} strokeWidth={8} icon='/svg/react.svg' />
          <CircularProgressBar percentage={90} sqSize={120} strokeWidth={8} icon='/svg/vue-svgrepo-com.svg' />
          <CircularProgressBar percentage={95} sqSize={120} strokeWidth={8} icon='/svg/nextjs-icon-svgrepo-com.svg' />
          <CircularProgressBar percentage={92} sqSize={120} strokeWidth={8} icon='/svg/nuxt-svgrepo-com.svg' />
          <CircularProgressBar percentage={80} sqSize={120} strokeWidth={8} icon='/svg/node-svgrepo-com.svg' />
          <CircularProgressBar percentage={85} sqSize={120} strokeWidth={8} icon='/svg/express-svgrepo-com.svg' />
          <CircularProgressBar percentage={87} sqSize={120} strokeWidth={8} icon='/svg/nestjs-svgrepo-com.svg' />
          <CircularProgressBar percentage={83} sqSize={120} strokeWidth={8} icon='/svg/mongo-svgrepo-com.svg' />
        </div>
      </div>
      <div className="flex pt-12 justify-center my-12 md:my-24">
        <hr className="w-96 border-t border-base-300"></hr>
      </div>
      <div className="mt-12 flex flex-col gap-12 lg:pr-12">
        <div className="md:text-3xl text-2xl font-bold text-base-200 uppercase">Experience & Education</div>
        <Experience
          info={{
            address: 'Texas, United States',
            position: 'Blockchain Engineer',
            company: 'Clarisco Solutions Pvt Ltd.',
            period: '11/2022 - 04/2024',
            works: [
              'Spearheaded the front-end development of innovative DeFi applications, focusing on creating responsive, user-friendly interfaces that cater to a global user base. Utilized React.js and Vue.js to ensure seamless interaction and real-time updates on cryptocurrency transactions and lending services.',
              'Collaborated closely with UX designers to refine application designs, achieving an intuitive user experience that simplified complex financial operations. Enhanced user engagement by 40% through iterative design improvements based on user feedback and usability testing.',
              'Integrated Web3 technologies to connect blockchain-based backend systems with the front-end, enabling secure and decentralized transactions directly from the user interface. Implemented MetaMask and other Ethereum wallets for transaction facilitation, enhancing user trust and platform security.',
              'Optimized application performance for high traffic DeFi platforms, reducing load times by 30% and improving the responsiveness of the system during peak usage through advanced JavaScript techniques and efficient state management using Redux.',
              'Led a dynamic team of front-end developers in an Agile environment, delivering features on schedule and adapting swiftly to evolving project requirements in the fast-paced DeFi sector.',
              'Kept abreast of the latest developments in DeFi and blockchain technology, regularly attending workshops and seminars to continuously refine skills and apply cutting-edge solutions to development practices.'
            ]
          }}
        />
        <Experience
          info={{
            address: 'Osaka, Japan',
            position: 'Blockchain Engineer',
            company: 'SotaTek',
            period: '4/2019 - 10/2022',
            works: [
              'Contributed to the development of a comprehensive DeFi platform similar to Solster Finance, focusing on leveraging the Solana blockchain for its high throughput and low transaction costs. This platform included features like staking, fundraising, and token swapping to cater to a diverse user base.',
              'Engineered robust smart contracts for a token launchpad that supports innovative cryptocurrency projects in raising capital efficiently. This feature enhanced platform liquidity and enabled seamless token distributions, greatly benefiting early adopters and investors.',
              'Integrated a user-centric interface with real-time analytics using React and TypeScript, providing users with insights into their investments and market trends. This integration improved decision-making for users, leading to a higher transaction volume on the platform.',
              "Collaborated with security experts to conduct rigorous audits of all smart contracts, ensuring the safety and integrity of user transactions. These efforts minimized risks and built trust within the platform's growing community.",
              'Played a key role in cross-functional teams to continuously innovate and update platform features based on evolving DeFi trends and user feedback, ensuring the platform remained competitive and responsive to market needs.',
            ]
          }}
        />

        <Experience
          info={{
            address: 'Osaka, Japan',
            position: 'Bachelor of Information and Computer Science',
            company: 'OSAKA INSTITUTE OF TECHNOLOGY',
            period: '4/2016 - 10/2019',
            works: []
          }}
        />
      </div>
      <div className="flex justify-center my-12 md:my-24">
        <hr className="w-96 border-t border-base-300"></hr>
      </div>
      <div className="mt-12 flex flex-col gap-12 lg:pr-12">
        <div className="md:text-3xl text-2xl font-bold text-base-200 uppercase">Certification</div>
        <div className="flex flex-col lg:flex-row justify-around gap-4 mx-auto lg:mx-0">
          <Certificaton title="api" description="sdfasdf" image="/img/cert1.png" link="https://www.hackerrank.com/certificates/037de8bb3f0c"/>
          <Certificaton title="api" description="sdfasdf" image="/img/cert2.png" link="https://www.hackerrank.com/certificates/b7583f6c1ed0"/>
        </div>
      </div>
    </div>
  )
}