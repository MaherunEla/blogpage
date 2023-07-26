import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='container py-32'>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col'>
                <h2>Featured Post</h2>
                <div className='border border-mediumgray p-8'>
                    <div className='w-[669px] h-[352px] relative'>
                    <Image src="/assets/images/Home/homeab.png" fill alt="feature"/>
                    </div>

                    

                </div>

            </div>
            <div>

            </div>

        </div>


    </div>
  )
}

export default Feature