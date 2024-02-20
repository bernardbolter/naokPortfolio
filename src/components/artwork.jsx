import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import NextImage from 'next/image'

import Magnify from '@/svg/magnify'
import Unmagnify from '@/svg/unmagnify'
import Enlarge from './enlarge'

const loadImage = (setArtWidth, setArtHeight, setProportion, setEnlargeLoaded, imageUrl) => {
    const img = new Image()
    img.src = imageUrl

    img.onload = () => {
        setArtWidth(img.width)
        setArtHeight(img.height)
        setProportion(img.width / img.height)
        setEnlargeLoaded(true)
    };
        img.onerror = (err) => {
        console.log("img error");
        console.error(err);
    };
}

const Artwork = ({ artwork, odd }) => {
    const [artEnlarge, setArtEnlarge] = useState(false)
    const [enlargeLoaded, setEnlargeLoaded] = useState(false)
    const [artWidth, setArtWidth] = useState(0)
    const [artHeight, setArtHeight] = useState(0)
    const [proportion, setProportion] = useState(0)

    useEffect(() => {
        loadImage(setArtWidth, setArtHeight, setProportion, setEnlargeLoaded, artwork.photo.url)
        // console.log(artWidth, artHeight)
    }, [])

    return (
        <AnimatePresence>
            <motion.div 
                className="artwork-container"
                initial={{ x: odd ? -100 : 100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 1 }}
            >
                <NextImage
                    src={artwork.photo.sizes.large}
                    alt={artwork.title}
                    fill
                />
                <div className="artwork-info-container">
                    <div className="artwork-text">
                        <h1>{artwork.title}</h1>
                        <h4>{artwork.details}</h4>
                        <p>{artwork.date}</p>
                    </div>
                    {enlargeLoaded && (
                        <motion.div
                            className="artwork-enlarge-container"
                            onClick={() => setArtEnlarge(!artEnlarge)}
                            style={{ 
                                zIndex: artEnlarge ? 1002 : 602,
                                position: artEnlarge ? 'fixed' : 'relative',
                                bottom: artEnlarge ? 40 : 0,
                                right: artEnlarge ? 40 : 0
                            }}
                        >
                            {artEnlarge ? <Unmagnify /> : <Magnify />}
                        </motion.div>
                    )}
                </div>
                {artEnlarge && (
                    <Enlarge
                        url={artwork.photo.url}
                        width={artWidth}
                        height={artHeight}
                        proportion={proportion}
                        alt={artwork.title}
                    />
                )}
                <div className="artwork-line" />
            </motion.div>
        </AnimatePresence>
    )
}

export default Artwork