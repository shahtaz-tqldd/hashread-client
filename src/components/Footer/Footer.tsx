import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-4 flex-wrap text-sm text-gray-600'>
      <Link href={'/help'} className='hover:text-primary tr'>Help</Link>
      <Link href={'/privacy'} className='hover:text-primary tr'>Privacy</Link>
      <Link href={'/career'} className='hover:text-primary tr'>Career</Link>
      <Link href={'/terms'} className='hover:text-primary tr'>Terms</Link>
    </div>
  )
}

export default Footer