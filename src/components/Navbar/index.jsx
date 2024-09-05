import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center bg-slate-800 p-4 shadow-lg gap-2">
            <Link href="/" className="text-white text-2xl font-bold">KyuAnimeList</Link>
            <InputSearch/>
            <UserActionButton/>
        </div>
    )
}

export default Navbar