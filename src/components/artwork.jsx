import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Artwork = ({ artwork, odd }) => {
    console.log(artwork)
    return (
        <AnimatePresence>
            <motion.div 
                className="artwork-container"
                initial={{ x: odd ? -100 : 100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 1 }}
            >
                <Image
                    src={artwork.photo.sizes.large}
                    alt={artwork.title}
                    fill
                />
                <div className="artwork-text">
                    <h1>{artwork.title}</h1>
                    <h4>{artwork.details}</h4>
                    <p>{artwork.date}</p>
                </div>
                <div className="artwork-line" />
            </motion.div>

        </AnimatePresence>
    )
}

export default Artwork