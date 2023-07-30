import React from 'react'
import Image from 'next/image'

const AboutDetails = () => {
  return (
    <div className='container py-20 '>
        <div className='flex flex-col lg:flex-row lg:ml-[108px] gap-8'>
            <div className='z-10 py-16 px-16 bg-white '>
                <span>ABOUT US</span>
                <h1 className='w-full lg:w-[496px]'>We are a team of content writers who share their learnings</h1>

            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-mediumgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

        </div>
        
        <div className='w-full h-[200px] lg:w-[1280px] lg:h-[444px] relative xl:-mt-10'>
            <Image src='/assets/images/About/aboutbg.png' fill objectFit='cover' alt="about"/>

        </div>
        <div className='lg:-mt-[151px] xl:-mt-[200px] lg:ml-28 absolute hidden xl:block'>
            <div className='grid grid-cols-3  gap-16 bg-yellow py-8 px-12 lg:w-[630px] '>
                <div>
                    <h1 className='display'> 12+</h1>
                    <p className='b1'>Blogs Published</p>
                </div>
                <div>
                    <h1 className='display'> 18K+</h1>
                    <span className='b1'>Views on Finsweet</span>
                </div>
                <div>
                    <h1 className='display'>30K+</h1>
                    <p className='b1'>Total active Users</p>
                </div>
                

            </div>
            <div className='flex justify-start'>
                <div className='w-[311px] h-[23] bg-[#592EA9]'></div>
                <div className='w-[550px] h-[23px] bg-[#FFD050]'></div>

            </div>
        </div>
        <div className=' bg-levender '>
        
        <div className='flex flex-col md:flex-row gap-[82px] py-12 px-8 xl:py-[96px] xl:px-[80px]'>
            <div className='flex flex-col gap-6 w-full lg:w-[494px]'>
                <span className='font-inter text-base font-semibold leading-5 tracking-[3px] uppercase'>Our mision</span>
                <div className='flex flex-col gap-4'>
                <h3>Creating valuable content for creatives all around the world</h3>
                <p className='text-mediumgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                
                </div>
                

            </div>

            <div className='flex flex-col gap-6 w-full lg:w-[494px]'>
                <span className='font-inter text-base font-semibold leading-5 tracking-[3px] uppercase'>Our Vision</span>
                <div className='flex flex-col gap-4'>
                <h3>A platform that empowers individuals to improve</h3>
                <p className='text-mediumgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                

                </div>
                

            </div>
            <div>

            </div>

        </div>
        </div>

        

        
         

       
    </div>
  )
}

export default AboutDetails