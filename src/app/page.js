"use client"

import Heros from "@/components/heros"

const Home = () => {
  return (
    <main className="home-container" suppressHydrationWarning>
      <Heros />
    </main>
  )
}

export default Home