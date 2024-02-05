import { useContext } from "react"
import { NaokContext } from "@/providers/NaokProvider"

const Footer = () => {
    const today = new Date()
    const [naok] = useContext(NaokContext)

    return (
        <footer
            style={{ margin: !naok.dataLoaded  ? '90vh 10% 40px' : '100px 10% 40px' }}
            className="footer-container"
        >
            <div className="footer-line" />
            <p>@ {today.getFullYear()} NAOK || <span> webwork: <a href="https://smoothism.com">smoothism.com</a></span></p>
        </footer>
    )
}

export default Footer