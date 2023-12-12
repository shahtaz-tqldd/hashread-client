import Image from 'next/image'
import React from 'react'
import { MdOutlineTrendingUp } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { blogs } from '@/utiles/mock-data/blogs'
import { Blog } from '@/utiles/types/blogcard-types'
import Link from 'next/link'

const TrendingBlog: React.FC = () => {  
  return (
    <section>
      <h2 className='flex items-center ml-24'>
        <MdOutlineTrendingUp className="text-xl mr-3" />
        Trending on hashread
      </h2>
      <div className='grid grid-cols-3 gap-10 mt-10'>
        {
          blogs?.map(({_id, title, author, date, time }:Blog, i:number) => (
            <div key={i} className='flex items-center gap-5 group'>
              <div className='text-7xl font-bold text-gray-200 group-hover:text-gray-300 tr'>0{i + 1}</div>
              <Link href={`/blog/${_id}`} className='cursor-pointer'>
                <div className='flex gap-2 items-center'>
                  <Image src={author?.photo?.url} className="h-6 w-6 rounded-full object-cover" height={40} width={40} alt="" />
                  <h2 className='text-sm'>{author?.name}</h2>
                </div>
                <div className='mt-3'>
                  <h1 className='font-bold text-gray-900 group-hover:text-sec tr'>{title}</h1>
                  <div className='flex items-center gap-2 text-sm mt-3'>
                    <p>{date}</p>
                    <BsDot/>
                    <p>{time} read</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TrendingBlog
