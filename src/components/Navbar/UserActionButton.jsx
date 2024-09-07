import Link from "next/link"
import {authUserSession} from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin?callbackUrl=/"

    return(
        <div className="flex justify-between gap-2 Md:text-sm text-xl font-semibold">
            <div className="text-color-primary hover:text-color-accent py-1">
            {
                user ? <Link href="/user/dashboard">Dashboard</Link> : null
            }
            </div>
            
            <div className="rounded-md bg-color-dark text-color-highlight hover:text-color-accent py-1 px-8">
                <Link href={actionURL} className="">{actionLabel}</Link>
            </div>
        </div>
    )
}


export default UserActionButton