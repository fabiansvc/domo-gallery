import { useNavigate } from "react-router-dom";
import TitleEISC from "../../components/TitleEISC/TitleEISC"
import "./home.css"

const Home = () => {
    const navigate = useNavigate();
    const onHandleStart = () => navigate("/domo-gallery");

    const Start = () => {
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
                    onClick={onHandleStart}
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
                <Start />
            </div>
        </div>
    )
}

export default Home;