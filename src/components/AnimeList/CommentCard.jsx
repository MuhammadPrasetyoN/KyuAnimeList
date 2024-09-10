import prisma from '@/libs/prisma'
import React from 'react'

const CommentCard = async({anime_mal_id}) => {
    const comments = await prisma.comment.findMany({where: {anime_mal_id}});
    
    return (
    <div className='grid grid-cols-4 gap-4 mb-4'>
        {comments.map(comment => {
            return (
                <div key={comment.id} className=' bg-color-dark p-2 rounded-lg'>
                    <p className='text-color-pink'>{comment.username}</p>
                    <p className='text-color-accent'>{comment.comment}</p>
                </div>
            )
        })}
    </div>
  )
}

export default CommentCard