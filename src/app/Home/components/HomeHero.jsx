import React from 'react'
import Link from 'next/link'

const HomeHero = () => {
  return (
    <div className={`bg-[url('/assets/images/Home/homebg.png')] bg-style w-screen h-full lg:h-[calc(100vh -72px)]`}>
        <div className="w-full h-full" style={{background: "radial-gradient(80.99% 71.93% at 74.58% 0.00%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)"}}>
            <div className='container flex flex-col py-36 gap-6 '>
                <span className='p_text text-white'>Posted on <span className='font-bold'>startup</span></span>
                <span className='display text-white'>Step-by-step guide to choosing </span>
                <span className='display text-white'>great font pairs</span>
                
                <div className='text-white flex flex-col gap-4'>
                <span className='b1 text-white'>By <span className='text-yellow'>James West</span>  |  May 23, 2022 </span>
                <div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
                <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
               

                

                </div>
                <div className='py-12'>
                <Link href="/" className="button bg-yellow ">Read More</Link>

                </div>
                
               



            </div>

        </div>

    </div>
  )
}

export default HomeHero