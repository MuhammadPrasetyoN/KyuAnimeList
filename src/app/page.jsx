import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse, random } from "@/libs/api-libs";
import AnimeRecommendation from "@/components/AnimeRecommendation";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()
  
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const topAnimeWithType = {
    data: topAnime.data.map((item) => ({ ...item, type: "anime" }))
  };
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  
  //recommendedAnime = { data: recommendedAnime.sort(() => Math.random() - 0.5).slice(0, 12)}
  recommendedAnime = random(recommendedAnime, 12)

  return (
    <>
      {/* anime terpopuler */}
      <section>
      <Header title={"Paling Populer"} linkTitle={"Lihat Semua"} linkHref={"/populer"}/>
      <AnimeList api={topAnimeWithType}/>
      </section>

      {/* anime rekomendasi */}
      <section>
      <Header title={"Rekomendasi"}/>
      <AnimeRecommendation api={recommendedAnime}/>
 
      </section>
    </>
  )
}

export default Page
