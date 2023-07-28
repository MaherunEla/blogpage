import React from 'react'
import Image from 'next/image'

const Passion = () => {
  return (
    <div className='container py-12 lg:py-32'>
        <div className='flex flex-col xl:flex-row gap-4'>
          
            <div className='w-full h-[350px] lg:w-[949px] lg:h-[705px] relative'>
                <Image src='/assets/images/Home/group.png' fill objectFit='cover' alt="image"/> 
            </div>

          

           
            <div className='xl:z-40  xl:w-[706px] xl:h-[584px] xl:mt-[125px] xl:-ml-[343px] bg-white'>
            <div className='py-20 px-20 '>
                <span className='p_text mb-6'>Why we started </span>
                <h1 className='mb-4'>It started out as a simple idea and evolved into our passion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

            </div>
            </div>

        </div>

    </div>
  )
}

export default Passion