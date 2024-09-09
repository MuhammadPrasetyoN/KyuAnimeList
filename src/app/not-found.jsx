"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"


const Page = () => {
    const router = useRouter() 

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-slate-900"/>
                <h3 className="text-slate-900 text-4xl font-bold">Tidak Ditemukan</h3> 
                <button onClick={() => router.back()} className="text-color-dark hover:text-color-link transition-all underline">
                Kembali</button>
            </div>
        </div>
    )
}

export default Page