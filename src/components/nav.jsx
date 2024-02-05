"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import useWindowSize from '@/helpers/useWindowSize'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
    { slug: 'avant-letters', name: 'Avant Letters', left: 54 },
    { slug: 'realism', name: 'Realism', left: 174},
    { slug: 'murals', name: 'Murals', left: 268 },
    { slug: 'videos', name: 'Videos', left: 359 },
    { slug: 'calligraphy', name: 'Calligraphy', left: 469},
    { slug: 'contact', name: 'Contact', left: 580 }
]

const Nav = () => {
    const [viewIntialLink, setViewInitalLink] = useState(true)
    const [navOpen, setNavOpen] = useState(false)
    const [initalLink, setInitalLink] = useState(0)
    const [currentLink, setCurrentLink] = useState(0)
    const size = useWindowSize()
    const path = usePathname()

    const decideNav = (link, enter) => {
        if (path === '/') {
            if (enter) {
                setViewInitalLink(true)
            } else {
                setViewInitalLink(false)
            }
        }
        if (enter) {
            const getCurrentLink = links.find(l => l.slug === link)
            setCurrentLink(getCurrentLink.left)
        } else {
            setCurrentLink(initalLink)
        }
    }

    useEffect(() => {
        if (size.width > 999) {
            setNavOpen(false)
        }
    }, [size])

    useEffect(() => {
        if (path === '/') {
            setViewInitalLink(false)
        } else {
            setViewInitalLink(true)
            const getInitialLink = links.find(link => link.slug === path.substring(1))
            setInitalLink(getInitialLink.left)
            setCurrentLink(getInitialLink.left)
        }
    },[path])


    return (
        <>
            {size.width < 999 && (
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
                className={size.width > 999 ? 'nav-links' : navOpen ? 'nav-links nav-links-mobile' : 'nav-links nav-links-mobile nav-links-open'}
            >
                {links.map((link, i) => (
                    <Link
                        onClick={() => setNavOpen(false)}
                        className={`/${link.slug}` === path ? `link link-${i} link-on` : `link link-${i}`}
                        key={i}
                        href={`/${link.slug}`}
                        onMouseEnter={() => decideNav(link.slug, true)}
                        onMouseLeave={() => decideNav(initalLink, false)}
                    >
                        {link.name}
                    </Link>

                ))}
                <motion.div 
                    className={size.width > 999 ? 'triangle-down' : 'triangle-down triangle-down-mobile'}
                    initial={{ x: initalLink }}
                    animate={{ x: currentLink }}
                    transition={{ duration: 0.2, origin: 1 }}
                    style={{ visibility: viewIntialLink ? 'visible' : 'hidden'}}
                >
                </motion.div>
                <div className={size.width > 999 ? 'nav-under' : 'nav-under nav-under-mobile'} />
            </nav>
        </>
    )
}

export default Nav