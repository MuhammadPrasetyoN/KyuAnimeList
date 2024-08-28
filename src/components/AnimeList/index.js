import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return(
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 md:gap-4 px-1 md:px-2 container mx-auto">
            {api.data.map((anime) => {
                return(
                <Link href={`/${anime.mal_id}`} key={anime.mal_id} className="cursor-pointer">
                    <div className="relative overflow-hidden rounded-md">
                    <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="object-cover" />
                    {anime.rank && (
                        <span className="absolute bottom-2 left-2 bg-white text-black text-xs sm:text-sm font-semibold px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                            Rank: {anime.rank}
                        </span>
                    )}
                    {anime.score && (
                            <span className="absolute bottom-2 right-2 bg-white text-black text-xs sm:text-sm font-semibold px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                                Score: {anime.score}
                            </span>
                    )}
                    </div>
                    <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                </Link>
                )
            })}   
        </div>
    )
}

export default AnimeList