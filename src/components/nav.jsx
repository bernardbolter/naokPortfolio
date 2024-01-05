"use client"

import { useState, useRef, useEffect } from 'react'
import Link from "next/link"

const links = [
    { slug: 'avant-letters', name: 'Avant Letters' },
    { slug: 'realism', name: 'Realism' },
    { slug: 'murals', name: 'Murals' },
    { slug: 'videos', name: 'Videos' },
    { slug: 'contact', name: 'Contact' }
]

const Nav = () => {
    const [nav, setNav] = useState(0)
    console.log(nav)
    const navRef = useRef(null)

    useEffect(() => {
        // console.log(navRef.current.clientWidth)
    },[])

    return (
        <nav
            className="nav-links"
            ref={navRef}
        >
            {links.map((link, i) => (
                <Link
                    className={i === nav ? 'link link-on' : 'link'}
                    key={i}
                    href={`/${link.slug}`}
                    onClick={() => setNav(index)}
                    onMouseEnter={() => console.log('enter')}
                    onMouseLeave={() => console.log('leave')}
                >
                    {link.name}
                </Link>
            ))}
            <div className="triangle-down"></div>
            <div className="nav-under"></div>
        </nav>
    )
}

export default Nav