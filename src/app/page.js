"use client"

import { useContext } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import Nav from "@/components/nav"
import Heros from "@/components/heros"
import Loading from "@/svg/loading"

const Home = () => {
  const [naok] = useContext(NaokContext)

  return (
    <main className="home-container" suppressHydrationWarning>
      {naok.dataLoaded && <Nav />}
      <Heros />
      {naok.errorMsg.length > 0 && (
        <div className="error-message">
          <p>{naok.errorMsg}</p>
        </div>
      )}

      {!naok.dataLoaded && (
        <div className="loading-container">
          <Loading color="white" />
          <p>loading...</p>
        </div>
      )}
    </main>
  )
}

export default Home