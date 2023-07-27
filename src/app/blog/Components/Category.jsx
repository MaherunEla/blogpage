import React from 'react'
import { AllBlogdata } from '@/app/home/Components/AllData';
import Image from 'next/image';

const Category = () => {
    const category = AllBlogdata.slice(0,4);
    return (
    <div className='container py-32'>
        <h2 className='text-start mb-12'>All Categories</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                category.map((item,index)=>(
                    <div className='py-8 px-8 border border-mediumgray hover:border-yellow hover:bg-yellow flex flex-col gap-4' key={index}>

                        <div className='w-[48px] h-[48px] border border-lightyellow bg-lightyellow flex items-center justify-center rounded-lg'>
                            <Image src={item.icon} width={23} height={23} alt="icon"/>

                        </div>
                        <div className='gap-1'>

                        <h3>{item.category.name}</h3>
                        <p className='text-mediumgray'>{item.content}</p>
                        </div>


                    </div>


                ))
            }

        </div>

    </div>
  )
}

export default Category