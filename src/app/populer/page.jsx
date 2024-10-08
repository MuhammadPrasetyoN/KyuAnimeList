"use client"

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/utilities/HeaderMenu'
import Pagination from '@/components/utilities/Pagination'
import AnimeList from '@/components/AnimeList'
import { getAnimeResponse } from '@/libs/api-libs'

const page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    //   )
    // const data = await response.json()
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    const populerAnimeWithType = {
      ...populerAnime,
      data: populerAnime.data.map((item) => ({ ...item, type: "anime" }))
    }  
    setTopAnime(populerAnimeWithType)
  }
  

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
    <HeaderMenu title={`ANIME TERPOPULER PAGE #${page}`}/>
    <AnimeList api={topAnime}/>
    <Pagination page={page} 
    lastPage={topAnime.pagination?.last_visible_page}
    setPage={setPage}
    />
    </>
  )
}

export default page