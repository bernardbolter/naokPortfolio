"use client"

import Link from "next/link"
import Image from "next/image"

import LogoImg from '/public/images/naok_logo.png'

const Logo = () => {
    return (
        <Link 
            className="logo"
            href="/"    
        >
            <Image
                src={LogoImg}
                alt="NAOK logo"
                width={350}
                height={172}
            />
        </Link>
    )
}

export default Logo