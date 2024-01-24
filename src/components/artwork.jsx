import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Artwork = ({ artwork }) => {
    return (
        <AnimatePresence>
            <motion.div 
                className="artwork-container"

            >
                <Image
                    src={`/images/${artwork.name}.jpg`}
                    alt={artwork.Title}
                    objectFit="cover"
                    fill
                />
                <div className="artwork-text">
                    <h1>{artwork.Title}</h1>
                    <h4>{artwork.details}</h4>
                    <p>{artwork.date}</p>
                </div>
                <div className="artwork-line" />
            </motion.div>

        </AnimatePresence>
    )
}

export default Artwork