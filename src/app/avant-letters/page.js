"use client"

import { useContext, useState, useEffect } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import Artwork from "@/components/artwork"

import { shuffle } from "@/helpers"

const AvantLetters = () => {
    const [naok] = useContext(NaokContext)
    const [shuffledArt, setShuffledArt] = useState([])

    useEffect(() => {
        if (Object.keys(naok.data).length !== 0) {
            setShuffledArt(shuffle(naok.data.avantletters))
        }
    },[naok.data])

    return (
        <main className="artworks-container letters-container">
            {shuffledArt.map((letter, i) => {
                return (
                    <Artwork artwork={letter} key={i} />
                )
            })}
        </main>
    )
}

export default AvantLetters