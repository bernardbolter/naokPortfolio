import { motion, AnimatePresence } from 'framer-motion'
import ReactPlayer from 'react-player'

const Video = ({ video, odd }) => {
    console.log(video)
    return (
        <AnimatePresence>
            <motion.div
                className="video-container"
                initial={{ x: odd ? 100 : -100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 1 }}
            >
                <ReactPlayer
                    url={!video.video ? video.video_link : video.video.url}
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls
                />
                <div className="video-text">
                    <h3>{video.details}</h3>
                    <h4>{video.date}</h4>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Video