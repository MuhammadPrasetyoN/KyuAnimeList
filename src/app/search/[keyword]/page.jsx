import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({params}) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword) // Decode keyword yang di-pass ke URL
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
  // const searchAnime = await response.json()
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)
  
  return (
    <>
      {/* anime yang dicari */}
      <section>
      <Header title={`Pencarian Untuk "${decodeKeyword}"...`}/>
      <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page

 