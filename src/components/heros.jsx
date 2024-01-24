"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

import Hero1 from '/public/images/01_SRWRITE_EQUALJAM_LOW.jpg'
import Hero2 from '/public/images/02_SRWRITE_UAH_LOWBW.jpg'
import Hero3 from '/public/images/03_SRWRITE_TEUFELSBERG_LOWBW.jpg'
import Hero4 from '/public/images/04_SRWRITE_PARK_LOWBW.jpg'

const images = [Hero1, Hero2, Hero3, Hero4]

const Heros = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          // Change the current image every 3000 milliseconds (3 seconds)
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="heros-container">
            {images.map((image, index) => (
                <Image
                    src={image}
                    key={index}
                    className={`image-fade ${
                        currentImageIndex === index ? 'visible' : 'hidden'
                    }`}
                    alt={`NAOK hero image ${index}`}
                    fill={true}
                    style={{objectFit: "cover"}}
                />
            ))}
        </div>
    )
}

export default Heros