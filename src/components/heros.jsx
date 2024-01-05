"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

import Hero1 from '/public/images/01_SRWRITE_EQUALJAM_LOW.jpg'
import Hero2 from '/public/images/02_SRWRITE_UAH_LOWBW.jpg'
import Hero3 from '/public/images/03_SRWRITE_TEUFELSBERG_LOWBW.jpg'
import Hero4 from '/public/images/04_SRWRITE_PARK_LOWBW.jpg'

const Heros = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(Hero1)

    useEffect(() => {
        console.log(imageIndex)
        
    }, [])

    return (
        <div className="heros-container">
            <Image
                src={currentImage}
                alt="NAOK image"
                placeholder="blur"
                fill={true}
                style={{objectFit: "cover"}}
            />
        </div>
    )
}

export default Heros