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
      <h2 className='flex items-center ml-24 text-sec'>
        <MdOutlineTrendingUp className="text-xl mr-3" />
        Trending on hashread
      </h2>
      <div className='grid grid-cols-3 gap-10 mt-10'>
        {
          blogs?.map(({_id, title, author, date, time }:Blog, i:number) => (
            <div key={i} className='flex items-center gap-5 group'>
              <div className='text-7xl font-bold text-cosec group-hover:text-sec tr'>0{i + 1}</div>
              <Link href={`/blog/${_id}`} className='cursor-pointer'>
                <div className='flex gap-2 items-center'>
                  <Image src={author?.photo?.url} className="h-6 w-6 rounded-full object-cover" height={40} width={40} alt="" />
                  <h2 className='text-sm text-cos'>{author?.name}</h2>
                </div>
                <div className='mt-3'>
                  <h1 className='font-bold text-sin group-hover:text-sec tr'>{title}</h1>
                  <div className='flex items-center gap-2 text-sm text-cos group-hover:text-sin mt-3 tr'>
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
