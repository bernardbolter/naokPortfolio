"use client"

import { useContext } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import { usePathname } from "next/navigation"
import Nav from "@/components/nav"
import Video from "@/components/video"
import Footer from "@/components/footer"

import Loading from "@/svg/loading"

const Videos = () => {
    const [naok] = useContext(NaokContext)
    const path = usePathname()

    return (
        <main className="videos-container" suppressHydrationWarning>
            {naok.dataLoaded && <Nav />}

            {   naok.videos.length > 0 
                && 
                naok.videos.map((video, i) => {
                    return (
                        <Video video={video} key={i} odd={i % 2} />
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

export default Videos