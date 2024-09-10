import Image from "next/image";
import Link from "next/link";

const MangaRecommendation = ({ api }) => {
    return(
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-2 md:gap-4 px-1 md:px-2 container mx-auto">
            {api.data?.map((manga) => {
                return(
                <Link href={`/manga/${manga.mal_id}`} key={manga.mal_id} className="cursor-pointer
                 text-color-secondary hover:text-slate-950 transition-all">
                    <div className="relative overflow-hidden rounded-md">
                    <Image src={manga.images.webp.image_url} alt="..." width={350} height={350} className="object-cover" />
                    {manga.rank && (
                        <span className="absolute bottom-2 left-2 bg-white text-black text-xs sm:text-sm font-semibold px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                            Rank: {manga.rank}
                        </span>
                    )}
                    {manga.score && (
                            <span className="absolute bottom-2 right-2 bg-white text-black text-xs sm:text-sm font-semibold px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                                Score: {manga.score}
                            </span>
                    )}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base 
                    md:text-lg lg:text-xl p-2 sm:p-3 md:p-4">{manga.title}</h3>
                </Link>
                )
            })}   
        </div>
    )
}

export default MangaRecommendation;
