"use client"

import { useContext } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import Artwork from "@/components/artwork"

const Realism = () => {
    const [naok] = useContext(NaokContext)

    return (
        <main className="artworks-container realism-container" suppressHydrationWarning>
            {Object.keys(naok.data).length !== 0 && naok.data.realism.map(real => {
                return (
                    <Artwork artwork={real} />
                )
            })}
        </main>
    )
}

export default Realism