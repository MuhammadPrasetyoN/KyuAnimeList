"use client"

import React, { useState } from 'react'

const CollectionButton = ({anime_mal_id, user_email, anime_image, anime_title, type}) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async(event) => {
        event.preventDefault()
        
        const data = { anime_mal_id, user_email, anime_image, anime_title, type}

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if(collection.status){
            setIsCreated(true)
        }
        return
    }
  
    return (
        <>
            {
                isCreated 
                ?
                <p className='text-color-darkblue'>
                Berhasil Ditambahkan ke Koleksi
                </p>
                :
                <button onClick={handleCollection} 
                    className="px-2 py-1 bg-color-accent rounded-md hover:bg-color-secondary hover:text-color-accent">
                    Add to Collection
                </button>    
            }
            
        </>
    )
}

export default CollectionButton