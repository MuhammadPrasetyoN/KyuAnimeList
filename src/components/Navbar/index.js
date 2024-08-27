import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center bg-slate-800 p-4 shadow-lg gap-2">
            <Link href="/" className="text-white text-2xl font-bold">KyuAnimeList</Link>
            <input placeholder="Cari Anime.." className="
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
                    hover:bg-white"/>
        </div>
    )
}

export default Navbar