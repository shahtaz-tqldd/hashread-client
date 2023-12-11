import React from 'react'
import Profile from '../Reusable/Profile'
import Image from 'next/image'
import { comments } from '@/utiles/mock-data/comments'

const Comments = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold my-10'>Comments</h2>
      <div className="flex flex-col gap-5">
        {
          comments?.map(({ comment, author, replies, time }, i) => (
            <div key={i} className=''>
              <Profile data={author} time={time} />
              <p className='text-gray-700 ml-12 mt-1 text-[16px]'>{comment}</p>
              <div className="flex flex-col gap-3 ml-12 mt-3">
                {
                  replies?.map(({ comment, author, time }, i) => (
                    <div key={i} className=''>
                      <div className='flex gap-2.5 items-center'>
                        <Image src={author?.photo?.url} className="h-7 w-7 rounded-full object-cover" height={40} width={40} alt="" />
                        <div>
                          <h2 className='font-bold text-sm text-gray-800'>{author?.name}</h2>
                          <p className='text-xs text-gray-500'>{time}</p>
                        </div>
                      </div>
                      <p className='text-gray-700 ml-[38px] mt-1 text-[15px]'>{comment}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Comments
