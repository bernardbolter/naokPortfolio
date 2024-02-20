import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Draggable from 'react-draggable'
import useWindowSize from '@/helpers/useWindowSize'

const Enlarge = ({ url, width, height, proportion, alt }) => {
    const size = useWindowSize()
    const nodeRef = useRef(null)
    const [artWidth, setWidth] = useState(width)
    const [artHeight, setArtHeight] = useState(height)
    const [controlledPosition, setControlledPosition] = useState({ x: 0, y: 0})
    const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 })

    useEffect(() => {
    const newBounds = {
            left: size.width > artWidth
            ? -(((size.width - artWidth) / 2) - 40)
            : -(((artWidth - size.width) / 2) + 40),

            right: size.width > artWidth
            ? (((size.width - artWidth) / 2) - 40)
            : (((artWidth - size.width) / 2) + 40),

            top: size.height > artHeight
            ? -(((size.height - artHeight) / 2) - 40)
            : -(((artHeight - size.height) / 2) + 40),

            bottom: size.height > artHeight
            ? (((size.height - artHeight) / 2) - 40)
            : (((artHeight - size.height) / 2) + 40)
        }
        setBounds(newBounds)
    }, [size, proportion, artHeight, artWidth])

    const handleDrag = (e, position) => {
        const { x, y } = position
        setControlledPosition({ x: x, y: y })
    }

    const handleStop = (e, ui) => {
        // console.log(ui, e)
    }

    return (
        <div className="enlarge-container">
            <Draggable
                onDrag={handleDrag}
                onStop={handleStop}
                position={controlledPosition}
                nodeRef={nodeRef}
                bounds={bounds}
            >
                <div
                    className="enlarged-image"
                    ref={nodeRef}
                >
                    <Image
                        src={url}
                        alt={alt}
                        width={artWidth}
                        height={artHeight}
                    />
                </div>
            </Draggable>
        </div>
    )
}

export default Enlarge