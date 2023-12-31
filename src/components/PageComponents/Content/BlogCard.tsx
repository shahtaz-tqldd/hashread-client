"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { BsDot } from 'react-icons/bs';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { Blog } from '@/utiles/types/blogcard-types';

interface BlogCardProps {
  data: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const [save, setSave] = useState(false);
  const { title, author, date, time, content, img, _id } = data;

  return (
    <Link href={`/blog/${_id}`} >
      <div className='grid grid-cols-4 gap-6 group cursor-pointer'>
        <div className='col-span-3 h-full'>
          <div className='flex gap-2 items-center'>
            <Image src={author?.photo?.url} className="h-6 w-6 rounded-full object-cover" height={40} width={40} alt="" />
            <h2 className='text-sm group-hover:translate-x-1 tr'>{author?.name}</h2>
          </div>
          <h2 className='text-xl font-bold mt-3 mb-2 text-sin group-hover:text-sec tr'>{title}</h2>
          <div className='text-[15px] text-cos group-hover:text-primary tr'>{parse(content.slice(0, 130))}</div>
          <div className='flex justify-between items-center mt-3'>
            <div className='flex items-center gap-2 text-sm text-gray-500 group-hover:text-primary tr'>
              <p>{date}</p>
              <BsDot />
              <p>{time} read</p>
            </div>
            <button onClick={(e) => { e.preventDefault(); setSave(!save) }}>
              {save ? <BsBookmarkFill className="text-xl text-primary mr-3" /> : <BsBookmark className="text-xl text-gray-600 hover:text-black mr-3 tr" />}
            </button>
          </div>
        </div>
        <div className='col-span-1 h-full'>
          <Image src={img} height={300} width={300} alt="" className='w-full h-36 object-cover rounded-xl' />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
