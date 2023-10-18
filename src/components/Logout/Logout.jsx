import { useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import "./logout.css";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="container-logout">
            <button
                type="button"
                role="button"
                aria-label="logout"
                title="logout"
                className="button-logout"
                onClick={(e) => { handleLogout }}
            >
                <TbLogout className="icon-logout" />
            </button>
        </div>
    )
};
export default Logout;
