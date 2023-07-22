import "./logout.css";
import { TbLogout } from "react-icons/tb";

const Logout = () => {

    const handleLogout = (e) => {
        e.preventDefault();
        window.location.assign('/');
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
