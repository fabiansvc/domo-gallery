import TitleEISC from "../../components/TitleEISC/TitleEISC"
import "./home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const isDesktop = () => {
        if (/Android|webOS|iPad|Tablet|PlayBook|Kindle|Windows Phone|IEMobile|Surface|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile Safari|Windows Phone|SymbianOS/i.test(navigator.userAgent)) {
            return (
                <p className="note">
                    This demo works only on Desktops
                </p>
            )
        } else {
            return (
                <button
                    role="button"
                    className="button-start"
                    onClick={() => window.location.assign('/domo-gallery') }
                >
                    Start
                </button>
            )
        }
    }

    return (
        <div className="container-home">
            <div className="card">
                <TitleEISC />
                <span className="authors">
                    Created by:
                    <br />
                    Fabian Stiven Valencia C.
                    <br />
                    Javier Mauricio Reyes V. Ph.D
                    <br />
                    Paola Johanna Rodriguez C. Ph.D
                </span>
                {isDesktop()}
            </div>
        </div>
    )
}

export default Home;