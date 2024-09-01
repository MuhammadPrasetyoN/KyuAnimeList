import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "./libs/api-libs";


const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()
  
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  return (
    <>
      {/* anime terpopuler */}
      <section>
      <Header title={"Paling Populer"} linkTitle={"Lihat Semua"} linkHref={"/populer"}/>
      <AnimeList api={topAnime}/>
      </section>

      {/* anime terbaru */}
      <section>
      <Header title={"Paling Baru"} linkTitle={"Lihat Sekarang"} linkHref={"/new"}/>
      <AnimeList api={topAnime}/>
      </section>
    </>
  )
}

export default Page
