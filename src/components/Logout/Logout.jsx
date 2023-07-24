import { useNavigate } from "react-router-dom";
import "./logout.css";
import { TbLogout } from "react-icons/tb";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="container-logout">
            <button 
                type="button" 
                role="button"
                aria-label="Cerrar sesión"
                title="Cerrar sesión"
                className="button-logout"
                onClick={(e) => { handleLogout(e) }} 
            >
                <TbLogout className="icon-logout"/>
            </button>
        </div>
    )
};
export default Logout;
