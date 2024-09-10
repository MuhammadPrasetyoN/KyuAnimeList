import Header from '@/components/Dashboard/Header'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import Link from 'next/link'
import React from 'react'


const page = async() => {
  const user = await authUserSession()
  const comments = await prisma.comment.findMany({where: {user_email: user.email}})
  //console.log(comments)
    
  return (
    <section className="mt-4 w-full px-4">  
    <Header title={"My Comment"}/>
    <div className='p-4 grid sm:grid-cols-4 grid-cols-2 gap-3'>
        {comments.map((comment,index) => {
          // Cek apakah koleksi merupakan anime atau manga
          const linkPath = comment.type === "anime" 
          ? `/anime/${comment.anime_mal_id}` 
          : `/manga/${comment.anime_mal_id}`;
          
          return (
            <Link href={linkPath} key={index} className='bg-color-primary text-color-dark p-4 font-semibold rounded-lg hover:scale-105 hover:bg-color-accent'>
            <p className='text-sm font-bold text-color-pink'>{comment.anime_title}</p>
            <p className='italic text-color-dark'>{comment.comment}</p>
            </Link>
          )
        })}
    </div>
    </section>
  )
}

export default page