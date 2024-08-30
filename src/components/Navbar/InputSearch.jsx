"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSeacrh = (event) => {
        event.preventDefault()
        let keyword = searchRef.current.value

        if (!keyword) {
            // Jika input kosong, jangan lakukan apapun
            return
        }
    keyword = encodeURIComponent(keyword.trim()) // Encode terlebih dahulu untuk memastikan URL aman
    router.push(`/search/${decodeURI(keyword)}`)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter"){
            handleSeacrh(event)
            }
        }

    return(
        <div className="relative">
            <input 
            placeholder="Cari Anime.." 
            className="
                    p-2 
                    rounded-md 
                    border 
                    border-slate-400
                    bg-slate-200 
                    text-slate-950
                    placeholder:text-slate-500
                    text-lg 
                    outline-none 
                    w-64 
                    transition 
                    duration-500 
                    ease-in-out 
                    focus:border-sky-500
                    focus:border-1  
                    focus:bg-white 
                    focus:shadow-xl 
                    hover:border-sky-500
                    hover:bg-white"
                ref={searchRef}
                onKeyDown={handleKeyDown}
                    />
                    <button className="absolute top-2 end-2" onClick={handleSeacrh}>
                        <MagnifyingGlass size={28} />
                    </button>
        </div>
    )
}

export default InputSearch