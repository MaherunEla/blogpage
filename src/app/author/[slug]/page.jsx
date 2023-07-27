"use client";
import React from "react";
import { useParams } from "next/navigation";
import { AllBlogdata } from "@/app/home/Components/AllData";
import {BsFacebook} from 'react-icons/bs'
import {BiLogoTwitter} from 'react-icons/bi'
import {AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai'
import Image from "next/image";

const page = () => {
  const param = useParams();
  const author = AllBlogdata.find((e) => e.authors.slug == param?.slug);
  const post = AllBlogdata.filter((e) => e.authors.slug == param?.slug);
  return (
    <div>
        <div className="bg-levender">
      <div className="container flex flex-col items-center justify-center py-32 ">
        <div className="flex flex-row gap-8">
          <div>
            <div className="w-full h-[250px] lg:w-[251px] lg:h-[250px] relative">
              <Image src={author.authors.image} fill alt="author" />
            </div>
          </div>
          <div className="w-full lg:w-[669px]">
            <h1 className="mb-8">
              Hey there, I’m {author.authors.title} and welcome to my Blog
            </h1>
            <p className="mb-8">{author.content}</p>
            <div className="flex flex-row items-center gap-6 ">
              <BsFacebook  />
              <BiLogoTwitter  />
              <AiOutlineInstagram  />
              <AiFillLinkedin  />
            </div>

          </div>
          
        </div>
       
      </div>
      <div className='container flex flex-row items-center justify-center '>
            <div className='w-full lg:w-[813px] h-[23px] bg-yellow'>

            </div>
            <div className='w-full lg:w-[271px] h-[23px] bg-purple'>

            </div>


        </div>
    </div>

    <div className="">
        
    </div>

    </div>
    
  );
};

export default page;
