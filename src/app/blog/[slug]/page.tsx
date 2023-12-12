"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { blogs } from '@/utiles/mock-data/blogs';
import Image from 'next/image';
import parse from 'html-react-parser';
import { FaRegHeart } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'
import { IoBookmarkOutline } from 'react-icons/io5'
import { HiOutlineShare } from 'react-icons/hi'
import Comments from '@/components/PageComponents/Content/Comments';
import { BsDot } from 'react-icons/bs';

const Page: React.FC = () => {
  const path = usePathname();
  const id = path?.split('/')[2];
  const blog = blogs[Number(id) - 1];

  return (
    <div className='max-w-[920px] mx-auto px-3 mt-5 mb-10'>
      <Image src={blog?.img} alt="" height={400} width={400} className="h-[400px] w-full object-cover rounded-xl" />
      <h1 className='text-5xl font-bold mt-6 text-primary'>{blog?.title}</h1>
      <div className='flex gap-2 items-center mt-8'>
        <Image src={blog?.author?.photo?.url} className="h-10 w-10 rounded-full object-cover" height={40} width={40} alt="" />
        <div>
          <div className='flex gap-2 items-center'>
            <h2 className='text-lg font-bold text-gray-800'>{blog?.author?.name}</h2>
            <BsDot className="mt-1" />
            <button className='text-sec font-bold hover:opacity-80 tr'>Follow</button>
          </div>
          <p className='text-sm text-gray-500'>{blog?.date}</p>
        </div>
      </div>
      <hr className='mt-4 mb-6 border-gray-300' />

      <div className='text-[18px] text-gray-700'>{parse(blog?.content)}</div>

      <div className='py-2.5 px-6 mt-10 bg-cos bg-opacity-90 rounded-full shadow-lg w-fit mx-auto sticky bottom-4 flex items-center gap-4'>
        <h2 className='flex items-center gap-2'><FaRegHeart /> 83</h2>
        <div className='border border-l border-gray-400 h-6'></div>
        <h2 className='flex items-center gap-2'><BiCommentDetail /> 5</h2>
        <div className='border border-l border-gray-400 h-6'></div>
        <h2 className='flex items-center gap-2'><IoBookmarkOutline /></h2>
        <div className='border border-l border-gray-400 h-6'></div>
        <h2 className='flex items-center gap-2'><HiOutlineShare /></h2>
      </div>

      <Comments />
    </div>
  );
};

export default Page;
