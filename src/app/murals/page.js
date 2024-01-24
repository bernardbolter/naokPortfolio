"use client"

import { useContext, useState, useEffect } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import Artwork from "@/components/artwork"

import { shuffle } from "@/helpers"

const Murals = () => {
    const [naok] = useContext(NaokContext)
    const [shuffledMurals, setShuffledMurals] = useState([])

    useEffect(() => {
        if (Object.keys(naok.data).length !== 0) {
            setShuffledMurals(shuffle(naok.data.murals))
        }
    }, [naok.data])
    
    return (
        <main className="artworks-container murals-container" suppressHydrationWarning>
            {shuffledMurals.map((mural, i) => (
                <Artwork artwork={mural} key={i} />
            ))}
        </main>
    )
}
 
export default Murals