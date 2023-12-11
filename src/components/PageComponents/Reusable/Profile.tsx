import Image from 'next/image'
import React from 'react'

const Profile = ({ data, time }) => {
  const { name, photo } = data
  return (
    <div className='flex gap-3 items-center'>
      <Image src={photo?.url} className="h-[36px] w-[36px] rounded-full object-cover" height={40} width={40} alt="" />
      <div>
        <h2 className='font-bold'>{name}</h2>
        <p className='text-xs text-gray-500'>{time}</p>
      </div>
    </div>
  )
}

export default Profile
