import React from 'react';
import Image from 'next/image';
import { comments } from '@/utiles/mock-data/comments';
import { Comment, Reply } from '@/utiles/types/comment-types';

const Comments: React.FC = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold my-10 uppercase'>Comments</h2>
      <div>
        <div className='flex gap-3 items-center'>
          <Image
            src={"https://mobilenetrix.com/assets/client/app/media/img/users/profile_user.jpg"}
            className="h-[36px] w-[36px] rounded-full object-cover"
            height={40}
            width={40}
            alt=""
          />
          <div>
            <h2 className='font-bold'>Shahtaz Rahman Shanto</h2>
          </div>
        </div>
        <input placeholder='write comments' className='ml-12 py-2 focus:outline-none border-b-2 border-cos bg-tan focus:border-b-gray-700 w-full' />
      </div>
      <div className="flex flex-col gap-5 mt-12">
        {comments?.map(({ comment, author, replies, time }: Comment, i: number) => (
          <div key={i} className=''>
            <div className='flex gap-3 items-center'>
              <Image
                src={author?.photo?.url || ''}
                className="h-[36px] w-[36px] rounded-full object-cover"
                height={40}
                width={40}
                alt=""
              />
              <div>
                <h2 className='font-bold'>{author?.name}</h2>
                <p className='text-xs text-gray-500'>{time}</p>
              </div>
            </div>
            <p className='text-gray-700 ml-12 mt-1 text-[16px]'>{comment}</p>
            <div className="flex flex-col gap-3 ml-12 mt-3">
              {replies?.map(({ comment, author, time }: Reply, i: number) => (
                <div key={i} className=''>
                  <div className='flex gap-2.5 items-center'>
                    <Image
                      src={author?.photo?.url || ''}
                      className="h-7 w-7 rounded-full object-cover"
                      height={40}
                      width={40}
                      alt=""
                    />
                    <div>
                      <h2 className='font-bold text-sm text-gray-800'>{author?.name}</h2>
                      <p className='text-xs text-gray-500'>{time}</p>
                    </div>
                  </div>
                  <p className='text-gray-700 ml-[38px] mt-1 text-[15px]'>{comment}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
