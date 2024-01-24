"use client"

import React, { useState, useEffect, createContext } from 'react'

import artwork from '../data/artworks.json'

export const NaokContext = createContext()

const NaokProvider = ({ children }) => {
    const [naok, setNaok] = useState({
        slugs: ['home', 'avant-letters', 'realism', 'murals', 'videos'],
        data: {}
    })

    useEffect(() => {
        const newData = {}
        naok.slugs.map(slug => {
            const newSlug = slug.replace('-', '')
            artwork.map(art => {
                if (art.category === slug) {
                    if (!newData[newSlug]) {
                        newData[newSlug] = [art]
                    } else {
                        newData[newSlug].push(art)
                    }
                }
            })
        })
        setNaok(state => ({ ...state, data: newData }))
    }, [])
    
    return (
        <NaokContext.Provider
            value={[naok, setNaok]}
        >
            {children}
        </NaokContext.Provider>
    )
}

export default NaokProvider