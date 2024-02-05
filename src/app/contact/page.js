"use client"

import { useContext } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import { usePathname } from "next/navigation"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

import Loading from "@/svg/loading"

const Contact = () => {
    const [naok] = useContext(NaokContext)
    const path = usePathname()

    return (
        <main className="contact-container">
            {naok.contactLoaded && <Nav />}

            {Object.keys(naok.contact).length > 0 && (
                <div 
                    className="contact-content" 
                    dangerouslySetInnerHTML={{__html: naok.contact.content.rendered}}
                />
            )}

            {naok.errorMsg.length > 0 && (
                <div className="error-message">
                    <p>{naok.errorMsg}</p>
                </div>
            )} 

            {!naok.contactLoaded && (
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

export default Contact