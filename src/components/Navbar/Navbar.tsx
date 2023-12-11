// src/components/Navbar.tsx
import Link from 'next/link';
import React from 'react';
import { navdata } from '../../utiles/static-data/nav-data';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-primary py-3 sticky top-0 z-50'>
      <div className='flex justify-between items-center container text-gray-100'>
        <Link href='/' className='text-xl tracking-wide'><strong>#hash</strong>read</Link>
        <div className='flex items-center gap-8'>
          {
            navdata?.map(({ title, link }, i) => (
              <Link href={link} key={i} className='hover:text-cos tr'>
                {title}
              </Link>
            ))
          }
          <button className='bg-cos text-primary py-2 px-4 rounded-full text-sm'>Get started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
