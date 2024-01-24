"use client"

import { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import useWindowSize from '@/helpers/useWindowSize'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
    { slug: 'avant-letters', name: 'Avant Letters' },
    { slug: 'realism', name: 'Realism' },
    { slug: 'murals', name: 'Murals' },
    { slug: 'videos', name: 'Videos' },
    { slug: 'contact', name: 'Contact' }
]

const Nav = () => {
    const [nav, setNav] = useState(0)
    const [navOpen, setNavOpen] = useState(false)
    const [linkSize, setLinkSize] = useState(0)
    const navRef = useRef(null)
    const size = useWindowSize()
    const path = usePathname()

    useEffect(() => {
        const currentNavSize = navRef.current.clientWidth
        setLinkSize(currentNavSize / links.length)
    },[size])

    useEffect(() => {
        if (size.width > 768) {
            setNavOpen(false)
        }
    }, [size])

    return (
        <>
            {size.width < 769 && (
                <div
                    onClick={() => setNavOpen(!navOpen)}
                    className={navOpen ? 'menu-icon menu-icon-open' : 'menu-icon'}
                >
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )}
            <nav
                className={size.width > 768 ? 'nav-links' : navOpen ? 'nav-links nav-links-mobile' : 'nav-links nav-links-mobile nav-links-open'}
                ref={navRef}
            >
                {links.map((link, i) => (
                    <Link
                        onClick={() => setNavOpen(false)}
                        className={`/${link.slug}` === path ? `link link-${i} link-on` : `link link-${i}`}
                        key={i}
                        href={`/${link.slug}`}
                        onMouseEnter={() => setNav(i)}
                        onMouseLeave={() => setNav(0)}
                    >
                        {link.name}
                    </Link>
                ))}
                <motion.div 
                    className={size.width > 768 ? 'triangle-down' : 'triangle-down triangle-down-mobile'}
                    initial={{ x: linkSize / 2 }}
                    animate={{ x: (linkSize / 2) + (linkSize * nav) }}
                    transition={{ duration: 0.2, origin: 1 }}
                >
                </motion.div>
                <div className={size.width > 768 ? 'nav-under' : 'nav-under nav-under-mobile'}></div>
            </nav>
        </>
    )
}

export default Nav