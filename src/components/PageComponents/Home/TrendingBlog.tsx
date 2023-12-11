import Image from 'next/image'
import React from 'react'
import { MdOutlineTrendingUp } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'

const TrendingBlog = () => {
  const trending = [
    {
      title: "Exploring the Mysteries of Deep Space",
      author: "Astronomy Enthusiast",
      profile: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1351",
      date: "15 Jan, 2023",
      time: "8 mins",
    },
    {
      title: "Cooking Adventures: A Culinary Journey Around the World",
      author: "Gourmet Explorer",
      profile: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1351",
      date: "10 Feb, 2023",
      time: "12 mins",
    },
    {
      title: "The Art of Mindfulness: Finding Peace in a Busy World",
      author: "Shahtaz Rahman",
      date: "22 Mar, 2023",
      time: "10 mins",
      profile: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1351",
    },
    {
      title: "Unraveling the Secrets of Ancient Civilizations",
      author: "Archaeology Scholar",
      date: "05 Apr, 2023",
      time: "15 mins",
      profile: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1351",
    },
    {
      title: "Future Tech: A Glimpse into Tomorrow's Innovations",
      author: "Tech Visionary",
      date: "18 May, 2023",
      profile: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1351",
      time: "7 mins",
    },
    {
      title: "The Language of Flowers: Symbolism and Meanings",
      author: "Floral Enthusiast",
      date: "30 Jun, 2023",
      profile: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1351",
      time: "9 mins",
    },
  ];
  
  return (
    <section>
      <h2 className='flex items-center ml-24'>
        <MdOutlineTrendingUp className="text-xl mr-3" />
        Trending on hashread
      </h2>
      <div className='grid grid-cols-3 gap-10 mt-10'>
        {
          trending?.map(({ title, author, profile, date, time }, i) => (
            <div key={i} className='flex items-center gap-5'>
              <div className='text-7xl font-bold text-gray-300'>0{i + 1}</div>
              <div>
                <div className='flex gap-2 items-center'>
                  <Image src={profile} className="h-6 w-6 rounded-full object-cover" height={40} width={40} alt="" />
                  <h2 className='text-sm'>{author}</h2>
                </div>
                <div className='mt-3'>
                  <h1 className='font-bold'>{title}</h1>
                  <div className='flex items-center gap-2 text-sm mt-3'>
                    <p>{date}</p>
                    <BsDot/>
                    <p>{time} read</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TrendingBlog