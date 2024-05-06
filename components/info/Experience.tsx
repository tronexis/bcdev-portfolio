import { PortfolioIcon } from "../common/Icon"

type Props = {
  info: {
    position: string
    period: string
    company: string
    address: string
    works: string[]
  }
}

const Experience = ({ info }: Props) => {
  return (
    <div className="flex">
      <div className="h-ful z-10 hidden md:block">
        <div className="p-4 bg-base-100 rounded-full text-white">
          <PortfolioIcon />
        </div>
      </div>
      <div className="md:pl-6 text-base-200 time-line">
        <div className="flex gap-4">
          <div className="md:hidden">
            <div className="p-4 bg-base-100 rounded-full text-white">
              <PortfolioIcon />
            </div>
          </div>
          <div>
            <span className="text-base-200 text-sm bg-base-300 px-2 rounded-full py-1">{info.period}</span>
            <div className="text-2xl mt-2 font-semibold text-base-200">
              {info.position}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <span className="text-lg">{info.company}</span>
          <span className="text-base-200 ml-2 opacity-75">- {info.address}</span>
        </div>
        <ul className="mt-2 list-disc list-outside pl-4 leading-7">
          {
            info.works.map((work, idx) => (
              <li key={idx}>{work}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Experience