import CollectionButton from "@/components/AnimeList/CollectionButton";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentCard from "@/components/AnimeList/CommentCard";
import CommentInput from "@/components/AnimeList/CommentInput";

const MangaPage = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}`);
  const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: {user_email: user?.email, anime_mal_id: id}
    })
  
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="md:text-2xl text-xl text-color-dark font-semibold">{manga.data.title} | <text className="text-color-pink">{manga.data.title_japanese}</text></h3>
        {
            !collection && user && <CollectionButton anime_mal_id={id} 
            user_email={user?.email} 
            anime_image={manga.data.images.webp.image_url} 
            anime_title={manga.data.title}
            type={"manga"}
          />
        }
      </div>
      <div className="pt-4 px-4 flex justify-center items-center flex-col md:flex-row gap-2 text-color-secondary">
        <div className="pt-4 px-4 flex-col gap-2">
          <Image
            src={manga.data.images.webp.image_url}
            alt={manga.data.images.jpg.image_url}
            width={250}
            height={280}
            className="w-full rounded-md object-cover"
          />
        </div>
        <div className="font-semibold pt-4 gap-2 flex text-color-dark md:text-lg text-sm">
          <ul>
            <p className=" text-color-darkblue text-lg"> Type: {manga.data.type}</p>
            <p> Author: {manga.data.authors.name || "N/A"}</p>
            <p> Status: {manga.data.status}</p>
            <p> Volumes: {manga.data.volumes || "N/A"}</p>
            <p> Chapters: {manga.data.chapters || "N/A"}</p>
            <p> Published: {manga.data.published.from} - {manga.data.published.to}</p>
          </ul>
        </div>
      </div>

      <div className="pt-4 px-4 flex justify-center items-center gap-2 text-color-primary overflow-x-auto">
                        <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-color-blue">
                            <h3>Score</h3>
                            <p className="font-semibold">{manga.data.score || 'N/A'}</p>
                        </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-color-blue">
                        <h3>Rank</h3>
                        <p className="font-semibold">{manga.data.rank || 'N/A'}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-color-blue">
                        <h3>Popularity</h3>
                        <p className="font-semibold">{manga.data.popularity || 'N/A'}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-color-blue">
                        <h3>Members</h3>
                        <p className="font-semibold">{manga.data.members || 'N/A'}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center 
                        rounded-md border-collapse border-color-secondary bg-color-blue">
                        <h3>Favorites</h3>
                        <p className="font-semibold">{manga.data.favorites || 'N/A'}</p>
                    </div>
                </div>

                <div className="font-semibold text-color-text text-justify px-4 gap-2 pt-4">
                    <p className="text-xl md:text-lg text-color-dark">
                        Background
                    </p>
                    {manga.data.background || "N/A"}
                </div>  

                <div className="py-4 px-4">
                    <h3 className="text-color-dark text-2xl mb-2 font-semibold">Komentar Penonton</h3>
                    <CommentCard anime_mal_id={id}/>
                    {user && <CommentInput 
                        anime_mal_id={id} 
                        user_email={user?.email}
                        username={user?.name}
                        anime_title={manga.data.title}
                        />   
                    }       
                </div>

      <div className="pt-4 px-4 gap-2 flex-wrap text-color-secondary">
      <h3 className="md:text-xl text-lg text-justify 
                    font-bold text-color-highlight">{manga.data.genres.type || "N/A"} | {manga.data.themes.type || "N/A"}
                </h3>

        <p className="font-semibold text-color-dark text-xl md:text-lg">
            Sinopsis
        </p>

        <p className="md:text-lg text-sm text-justify">{manga.data.synopsis}
          <Link href={manga.data.url} className="text-color-link hover:text-color-accent"> Kunjungi Web Resmi</Link>
        </p>
      </div>
    </>
  );
};

export default MangaPage;
