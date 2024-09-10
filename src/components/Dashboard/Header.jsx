"use client"

import { ArrowCircleLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }
    
    return (
        <div className="flex justify-between items-center mb-4">
            <button className="text-color-dark hover:text-color-pink" onClick={handleBack}>
                <ArrowCircleLeft size={32} />
            </button>
            <h3 className="text-2xl text-color-pink font-bold">
            {title}</h3>
        </div>      
    )
}

export default Header