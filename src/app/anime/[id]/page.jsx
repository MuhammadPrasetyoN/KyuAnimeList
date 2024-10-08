import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/utilities/VideoPlayer"
import Image from "next/image"
import Link from "next/link"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentCard from "@/components/AnimeList/CommentCard"

const Page = async ({ params: {id} }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: {user_email: user?.email, anime_mal_id: id}
    })

    //console.log(collection)
    
    //console.log("user:", user)
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="md:text-2xl text-xl text-color-dark font-semibold py-2">{anime.data.title } | <text className="text-red-500">{anime.data.title_japanese}</text></h3>
                {
                    !collection && user && <CollectionButton anime_mal_id={id} 
                    user_email={user?.email} 
                    anime_image={anime.data.images.webp.image_url} 
                    anime_title={anime.data.title}
                    type={"anime"}
                    />
                }
                
            </div>
            
            <div className="pt-4 px-4 flex justify-center items-center flex-col md:flex-row gap-2 text-color-secondary">
                <div className="pt-4 px-4 flex-col gap-2">
                    <Image 
                        src={anime.data.images.webp.image_url}
                        alt={anime.data.images.jpg.image_url}
                        width={250}
                        height={280}
                        className="w-full rounded-md object-cover"
                    />
                </div>
                {/* <div className="pt-4 gap-2 flex w-auto items-center md:w-1/3">
                    <Image 
                        src={anime.data.images.webp.image_url}
                        alt={anime.data.images.jpg.image_url}
                        width={250}
                        height={280}
                        className="w-full rounded-md object-cover"
                    />
                </div> */}
                <div className="pt-4 gap-2 flex text-color-dark md:text-lg text-sm font-semibold">
                    <ul>
                        <p className="text-rose-600"> Type: {anime.data.type}</p>
                        <p> Source: {anime.data.source}</p>
                        <p> Status: {anime.data.status}</p>
                        <p> Season: {anime.data.season || '-'}</p>
                        <p> Aired: {anime.data.aired.from } - {anime.data.aired.to} </p>
                    </ul>
                </div>
            </div> 
            <div className="pt-4 px-4 flex justify-center items-center gap-2 text-color-primary overflow-x-auto">
                        <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-pink-500">
                            <h3>Rilis</h3>
                            <p className="font-semibold">{anime.data.year || 'N/A'}</p>
                        </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-pink-500">
                        <h3>RANK</h3>
                        <p className="font-semibold">{anime.data.rank || 'N/A'}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-pink-500">
                        <h3>Skor</h3>
                        <p className="font-semibold">{anime.data.score || 'N/A'}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-pink-500">
                        <h3>Episode</h3>
                        <p className="font-semibold">{anime.data.episodes || 'N/A'}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-pink-500">
                        <h3>Anggota</h3>
                        <p className="font-semibold">{anime.data.members || 'N/A'}</p>
                    </div>
                </div>

                <div className="py-4 px-4">
                    <h3 className="text-color-dark text-2xl mb-2 font-semibold">Komentar Penonton</h3>
                    <CommentCard anime_mal_id={id}/>
                    {user && <CommentInput 
                        anime_mal_id={id} 
                        user_email={user?.email}
                        username={user?.name}
                        anime_title={anime.data.title}
                        type={"anime"}
                        />   
                    }       
                </div>  

            <div className="pt-4 px-4 gap-2 flex-wrap text-color-secondary">
                <h3 className="md:text-xl text-lg text-justify 
                    font-bold text-color-highlight">{anime.data.rating } | {anime.data.duration}
                </h3>
                <p className="md:text-lg text-sm text-justify">{anime.data.synopsis}
                <Link href={anime.data.url} className="text-color-link hover:text-color-accent"> Kunjungi Web Resmi</Link>
                </p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>    
            </div> 
        </>
    )
}

export default Page