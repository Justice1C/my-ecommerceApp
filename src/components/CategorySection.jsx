import React from 'react'
import cate1 from '../assets/images/cate1.jpg'
import cate2 from '../assets/images/cate2.jpg'
import cate3 from '../assets/images/cate3.jpg'

const categories = [
    {
        title: 'Woman',
        imageUrl:cate1,
    },
    {
        title: 'Man',
        imageUrl: cate2,
    },
    {
        title: 'Lady',
        imageUrl: cate3,
    },
]



const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
   {categories.map((category, index) => (
    <div key={index} className='relative h-64 transform transition-transform duration-500 hover:scale-105'>
<img src={category.imageUrl} alt=""  className='w-full h-full object-cover rouded-lg shadow-md '/>
<div className='absolute top-20 left-9'>
    <p className='text-xl font-bold'>{category.title}</p>
    <p className='text-gray-600'>View All</p>
</div>
    </div>
   ))}
    </div>
  )
}

export default CategorySection
