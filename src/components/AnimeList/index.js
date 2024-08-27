import Image from "next/image"
import Link from "next/link"

const AnimeList = ({title, images, id, rank}) => {
    return(
            <Link href={`/${id}`} className="cursor-pointer">
                <div className="relative overflow-hidden rounded-md">
                <Image src={images} alt="..." width={350} height={350} className="object-cover" />
                {rank && (
                    <span className="absolute bottom-2 left-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded">
                        Rank: {rank}
                    </span>
                )}
            </div>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            </Link>

    )
}

export default AnimeList