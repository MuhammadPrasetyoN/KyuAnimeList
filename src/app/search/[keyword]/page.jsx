import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import NotFound from "@/app/not-found";   


const Page = async ({params}) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword); // Decode keyword yang di-pass ke URL

  // Pencarian anime
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  const animeResults = searchAnime.data.map((item) => ({ ...item, type: "anime" }));

  // Pencarian manga
  const searchManga = await getAnimeResponse("manga", `q=${decodeKeyword}`);
  const mangaResults = searchManga.data.map((item) => ({ ...item, type: "manga" }));

  // Menggabungkan hasil pencarian
  const combinedResults = {
    data: [...animeResults, ...mangaResults]
  };

  // Jika tidak ada hasil yang ditemukan
  if (combinedResults.data.length === 0) {
    return <NotFound/>; // Render halaman not-found jika tidak ada hasil
    }

  // Sort the results so that titles that match the keyword come first
  combinedResults.data.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    const keywordLower = decodeKeyword.toLowerCase();

    // Priority sorting for exact matches or very similar titles
    const exactMatchA = titleA === keywordLower;
    const exactMatchB = titleB === keywordLower;
    const includesKeywordA = titleA.includes(keywordLower);
    const includesKeywordB = titleB.includes(keywordLower);

    if (exactMatchA && !exactMatchB) return -1;
    if (!exactMatchA && exactMatchB) return 1;
    if (includesKeywordA && !includesKeywordB) return -1;
    if (!includesKeywordA && includesKeywordB) return 1;
    
    return 0;
  });

  return (
    <>
      {/* anime yang dicari */}
      <section>
      <Header title={`Pencarian Untuk "${decodeKeyword}"...`}/>
      <AnimeList api={combinedResults}/>
      </section>
    </>
  )
}

export default Page;
