"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { BsDot } from 'react-icons/bs';
import { PiBookmarksSimpleFill, PiBookmarksSimple } from 'react-icons/pi';
import { Blog } from '@/utiles/types/blogcard-types';

interface BlogCardProps {
  data: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const [save, setSave] = useState(false);
  const { title, author, date, time, content, img, _id } = data;
  
  return (
    <Link href={`/blog/${_id}`} passHref>
      <div className='grid grid-cols-4 gap-6 group cursor-pointer'>
        <div className='col-span-3 h-full'>
          <div className='flex gap-2 items-center'>
            <Image src={author?.photo?.url} className="h-6 w-6 rounded-full object-cover" height={40} width={40} alt="" />
            <h2 className='text-sm group-hover:translate-x-1 tr'>{author?.name}</h2>
          </div>
          <h2 className='text-xl font-bold mt-3 mb-2 text-gray-700 group-hover:text-sec tr'>{title}</h2>
          <div className='text-sm text-gray-700 group-hover:text-primary tr'>{parse(content.slice(0, 130))}</div>
          <div className='flex justify-between items-center mt-3'>
            <div className='flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 tr'>
              <p>{date}</p>
              <BsDot />
              <p>{time} read</p>
            </div>
            <button onClick={() => setSave(!save)}>
              {save ? <PiBookmarksSimpleFill className="text-2xl text-primary mr-3" /> : <PiBookmarksSimple className="text-2xl text-gray-600 mr-3" />}
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
