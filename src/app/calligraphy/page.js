"use client"

import { useContext } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import { usePathname } from "next/navigation"
import Nav from "@/components/nav"
import Artwork from "@/components/artwork"
import Footer from "@/components/footer"

import Loading from "@/svg/loading"

const Calligraphy = () => {
    const [naok] = useContext(NaokContext)
    const path = usePathname()

    return (
        <main className="artworks-container calligraphy-container">
            {naok.dataLoaded && <Nav />}

            {   naok.calligraphy.length > 0 
                && 
                naok.calligraphy.map((letter, i) => {
                    return (
                        <Artwork artwork={letter} key={i} odd={i % 2} />
                    )
                })
            }

            {naok.errorMsg.length > 0 && (
                <div className="error-message">
                    <p>{naok.errorMsg}</p>
                </div>
            )} 

            {!naok.dataLoaded && (
                <div className="loading-container">
                    <Loading color="black"/>
                    <p
                        style={{ color: path === '/' ? 'white' : "black" }}
                    >loading...</p>
                </div>
            )}
            <Footer />
        </main>
    )
}

export default Calligraphy