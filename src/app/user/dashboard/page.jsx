import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation" 

const Page = async() => {
    const user = await authUserSession()
    //console.log(user)

    // Cek apakah user tidak ada
    // if (!user) {
    //     // Redirect ke halaman sign-in jika user tidak ada
    //     return redirect("/api/auth/signin")
    // }

    return (
        <div className="mt-8 text-color-dark flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold">Welcome, {user.name}</h3>
            <div style={{ width: "250px", height: "250px" }}>
            <Image src={user?.image} alt="...." width={250} height={250}/>
            </div>
            <div className="flex gap-4 py-6">
                <Link href="/user/dashboard/collection" 
                className="bg-color-pink text-xl font-semibold py-2 px-3 hover:text-color-primary">
                    My Collection
                </Link>
                <Link href="/user/dashboard/comment" 
                className="bg-color-pink text-xl font-semibold py-2 px-3 hover:text-color-primary">
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page