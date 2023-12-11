import Image from 'next/image'
import React from 'react'
const img = "https://assets-global.website-files.com/60f85e33b5a89c61fcd8377d/6205da3b558f4a47223d731a_YQmUdGY9BbyQ9usKBdKySWw2X1K5nQvGUgcOfxHKkxzy7JLkC0YnTTlhww-IzEEYurN_FgFDnBZLLzztayWD4dE4L2Dk4dl2s7FqkN8pon9-ef_8BvRH5mZoMIwbviLx3JMh6m3w.png"

const Hero = () => {
  return (
    <div className='bg-[#245637] py-12'>
      <div className='max-w-[1200px] mx-auto grid grid-cols-2 items-center gap-12'>
        <div>
          <h2 className='text-6xl text-white font-bold'>Stay Curious</h2>
          <p className='text-xl mt-6 mb-16 text-gray-200'>Discover stories, thinking, and expertise from writers on any topic.</p>
          <button className='bg-primary hover:bg-gray-900 tr text-white py-2.5 px-6 rounded-full'>Start Reading</button>
        </div>
        <div className='flex justify-center'>
          <Image src={img} height={450} width={450} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Hero
