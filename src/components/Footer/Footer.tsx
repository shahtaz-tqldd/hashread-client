import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-4 flex-wrap text-sm text-gray-600'>
      <Link href={'/help'} className='hover:text-sec tr'>Help</Link>
      <Link href={'/privacy'} className='hover:text-sec tr'>Privacy</Link>
      <Link href={'/career'} className='hover:text-sec tr'>Career</Link>
      <Link href={'/terms'} className='hover:text-sec tr'>Terms</Link>
    </div>
  )
}

export default Footer