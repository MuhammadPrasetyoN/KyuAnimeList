import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"
import { redirect } from "next/navigation" 

const Page = async() => {
    const user = await authUserSession()
    //console.log(user)

    // Cek apakah user tidak ada
    if (!user) {
        // Redirect ke halaman sign-in jika user tidak ada
        return redirect("/api/auth/signin")
    }

    return (
        <div>
            <h3>DASHBOARD</h3>
            <h3>Welcome, {user.name}</h3>
            <div style={{ width: "250px", height: "250px" }}>
            <Image src={user.image} alt="...." width={250} height={250}/>
            </div>
        </div>
    )
}

export default Page