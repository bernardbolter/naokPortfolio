"use client"

import Link from "next/link"
import Image from "next/image"
import useWindowSize from "@/helpers/useWindowSize"

import LogoImg from '/public/images/naok_logo.png'

const Logo = () => {
    const size = useWindowSize()

    return (
        <Link 
            className="logo"
            href="/"    
        >
            <Image
                src={LogoImg}
                alt="NAOK logo"
                width={size.width < 599 ? 200 : 350}
                height={size.width < 599 ? 100: 172}
            />
        </Link>
    )
}

export default Logo