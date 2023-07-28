"use client";
import React from 'react'
import { useParams } from 'next/navigation'

import Image from 'next/image';
import Link from 'next/link';
import { AllBlogdata } from '@/app/Home/components/AllData';


const PostDetails = () => {
    const param = useParams()
    const blog=AllBlogdata.find(e=>e.slug==param?.slug)
    
    console.log({param,blog});
    const post = AllBlogdata.filter(item=>item.slug == param?.slug )
    console.log({post});
  return (
    <div className='container py-12 lg:py-32'>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full lg:w-[768px]'>
            <div className='flex flex-row gap-4'>
                <div>
                <Image src={blog.authors.image} width={48} height={48} alt="author"/>

                </div>
                
                <div>
                <h3 className='text-purple'>{blog.authors.title}</h3>
                <span className='b1 text-mediumgray'>Posted on {blog.date}</span>

                </div>
                

             </div>
             <h1 className='mb-8'>{blog.title}</h1>

             <div className='flex flex-row gap-2' >
              <Image src={blog.icon} width={24} height={24} alt="icon"/>
              <h4>{blog.category.name}</h4>

             </div>
            </div>
           <div className='py-16'>
           <div className='w-full h-[400px] lg:w-[1280px] lg:h-[582px] relative '>
              <Image src={blog.image} fill objectFit="cover" alt="post"/>
            </div>

           </div>
          <div className='w-full lg:w-[843px] py-32'>
          <h2 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
          <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
          <h2 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
          <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
          <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
          <div className='flex flex-row gap-3'>
            <Image src="/assets/images/Blog/pointer.svg" width={5} height={5} alt="pointer"/>
            <h4>Lorem ipsum dolor sit amet</h4>


          </div>
          <div className='flex flex-row gap-3'>
            <Image src="/assets/images/Blog/pointer.svg" width={5} height={5} alt="pointer"/>
            <h4>Non blandit massa enim nec scelerisque</h4>
            

          </div>
          <div className='flex flex-row gap-3 mb-6'>
            <Image src="/assets/images/Blog/pointer.svg" width={5} height={5} alt="pointer"/>
            <h4>Neque egestas congue quisque egestas</h4>
            

          </div>

          <p className='mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </p>

          <h2 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

          </div>
           

          
          



    </div>
     {/* whats read to next */}
    <div>
          <h2 className='mb-14'>What to read next</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {
              
                post.map((item,index)=>(
                  <Link href={`/blog/${item.slug}`} key={index}>
                <div className='flex flex-col ' >
                  <div className='w-full h-[300px] lg:w-[405px] lg:h-[318px] relative mb-8'>
                  <Image src={item.image} fill objectFit="cover" alt="image"/>

                  </div>
                  <span className='l1 mb-4 text-mediumgray'>By <span className='text-purple'>{item.authors.title}</span>  l   {item.date} </span>
                  <h3 className='mb-4'>{item.title}</h3>
                  <p className='text-mediumgray'>{item.subTitle}</p>

                 

                </div>
                </Link>

              ))

              
              
            }


          </div>
           
            
        </div>
    </div>
  )
}

export default PostDetails