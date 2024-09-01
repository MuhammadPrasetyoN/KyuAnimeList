"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)
     const [error, setError] = useState(false)
    
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
        setError(false) 
    }

    const option = {
        width: "300",
        height: "250"
    }

    const handleError = () => {
        setError(true)
    }

    const Player = () => {
        return (
            <div className="fixed bottom-0 right-0">
                <button 
                onClick={handleVideoPlayer}
                className="font-semibold text-color-primary float-right bg-color-secondary px-4 mb-1 hover:bg-color-primary hover:text-red-600 transition-all">
                    X
                </button>
                {error ? (
                <p className="rounded-lg px-2 text-red-600 bg-color-primary">Video tidak dapat diputar. Silakan coba lagi nanti.</p>
            ) : (
                <YouTube
                    videoId={youtubeId}
                    onError={handleError}
                    opts={option}
                />
            )}
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
        <button 
            onClick={handleVideoPlayer}
            className="rounded-md fixed bottom-5 right-5 w-32 bg-color-secondary text-color-primary md:text-xl text-lg hover:bg-color-dark transition-all">
            Tonton Trailer
        </button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/> 
}

export default VideoPlayer