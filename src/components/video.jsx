import { motion, AnimatePresence } from 'framer-motion'
import ReactPlayer from 'react-player/file'

const Video = ({ video }) => {
    console.log(video)
    return (
        <AnimatePresence>
            <motion.div
                className="video-container"

            >
                <h1>video</h1>
            </motion.div>
        </AnimatePresence>
    )
}

export default Video