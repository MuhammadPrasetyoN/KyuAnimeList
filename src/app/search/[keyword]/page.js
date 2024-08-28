import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({params}) => {
  let { keyword } = params
  keyword = decodeURIComponent(keyword) // Decode keyword yang di-pass ke URL
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()
  
  return (
    <>
      {/* anime yang dicari */}
      <section>
      <Header title={`Pencarian Untuk "${keyword}"...`}/>
      <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page

 