"use client"

import { useContext, useState, useEffect } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import Video from "@/components/video"

import { shuffle } from "@/helpers"

const Videos = () => {
    const [naok] = useContext(NaokContext)
    const [shuffledVideos, setShuffledVideos] = useState([])

    useEffect(() => {
        if (Object.keys(naok.data).length !== 0) {
            setShuffledVideos(shuffle(naok.data.videos))
        }
    }, [naok.data])

    return (
        <main className="videos-container" suppressHydrationWarning>
            {shuffledVideos.map((video, i) => (
                <Video video={video} key={i} />
            ))}
        </main>
    )
}

export default Videos