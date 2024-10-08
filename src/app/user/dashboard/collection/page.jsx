import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"


const Page = async() => {
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({where: {user_email: user.email}})
    
    //console.log({ collection })
    return(
        <section className="mt-4 w-full px-4">
            <Header title={"My Collection"}/>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                {collection.map ((collect, index) => {
                    // Cek apakah koleksi merupakan anime atau manga
                    const linkPath = collect.type === "anime" 
                        ? `/anime/${collect.anime_mal_id}` 
                        : `/manga/${collect.anime_mal_id}`;

                    return(
                        <Link key={index} href={linkPath} className="relative">
                        <Image src={collect.anime_image} 
                               alt={collect.anime_image} width={350} height={350} 
                        className="w-full rounded-md"/>
                        <div className="absolute flex items-center justify-center bottom-0 w-full 
                        bg-slate-800 text-color-primary h-16 hover:text-color-accent">
                            <h5 className="px-2 text-xs lg-text-xl text-center sm:text-sm">
                                {collect.anime_title}</h5>
                        </div>
                    </Link>
                    )
                })}

            </div>
        </section>
    )
}

export default Page