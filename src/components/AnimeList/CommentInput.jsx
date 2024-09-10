"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({anime_mal_id, user_email, username, anime_title, type}) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async(event) => {
        event.preventDefault()
        
        const data = { anime_mal_id, user_email, comment, username, anime_title, type}

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if(postComment.status){
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
        return

    }

    return (
        <div className="flex flex-col gap-2">
           {isCreated && <p className="text-white">postingan terkirim...</p>}
           <textarea 
                onChange={handleInput}
                value={comment} 
                className="w-full h-32 md:text-xl text-lg p-4 rounded-lg bg-color-primary hover:bg-white"/>
           <button 
                className="px-3 py-2 w-52 rounded-xl bg-color-secondary 
                text-color-accent hover:bg-color-dark" 
                onClick={handlePosting}>
                Send a Comment
            </button>
        </div>
    )
}

export default CommentInput;