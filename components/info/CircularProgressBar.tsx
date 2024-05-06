import Image from 'next/image'
import { FC } from 'react'

interface Props {
  strokeWidth?: number
  sqSize?: number
  percentage: number
  icon: string
}

const CircularProgressBar: FC<Props> = (props) => {
  const { strokeWidth = 8, sqSize = 160, percentage, icon } = props
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100

  return (
    <div className='flex mx-auto'>
      <div className='relative'>
        <svg width={sqSize} height={sqSize} viewBox={viewBox}>
          <circle
            className="fill-none stroke-base-300"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className="fill-none stroke-base-100 transition-all ease-in delay-200"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeLinecap="round"
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
        </svg>
        <Image src={icon} alt='react svg icon' width={32} height={32} className='grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 ease-in-out w-full h-full p-8 hover:p-6 shap-circle top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]'/>
        <div className='text-3xl text-base-200 left-[50%] absolute font-medium mt-2 translate-x-[-50%]'>{percentage}%</div>
      </div>
    </div>
  )
}

export default CircularProgressBar