import Footer from '@/components/Footer/Footer'
import React from 'react'

const Topics = () => {
  const categories = [
    "Programming", "Data Science", "Technology", "Self Improvement", "Writing", "Relashionship"
  ]
  return (
    <div className='sticky top-20'>
      <h2 className='text-xl text-sec font-bold'>Discover more what matters you</h2>
      <div className='mt-8 flex flex-wrap gap-x-2 gap-y-3 mb-14'>
        {
          categories?.map((c, i) => <button key={i} className='bg-cosec py-1.5 px-4 rounded-full text-gray-600 hover:bg-sec text-sm hover:text-tan tr'>{c}</button>)
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Topics