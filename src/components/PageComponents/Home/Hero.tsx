import Image from 'next/image'
import React from 'react'
import blog1 from "../../../../public/images/blog1.png"
import blog2 from "../../../../public/images/blog2.png"
import blog3 from "../../../../public/images/blog3.png"


const Hero = () => {
  return (
    <div className='bg-sin py-12 select-none'>
      <div className='max-w-[1200px] mx-auto grid grid-cols-2 items-center gap-12'>
        <div>
          <h2 className='text-6xl text-cot font-bold'>Stay Curious</h2>
          <p className='text-xl mt-6 mb-16 text-tan'>Discover stories, thinking, and expertise from writers on any topic.</p>
          <button className='bg-cot tr text-[#fff] py-2.5 px-6 rounded-full'>Start Reading</button>
        </div>
        <div className='flex justify-center'>
          <Image src={blog2} height={450} width={450} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero
