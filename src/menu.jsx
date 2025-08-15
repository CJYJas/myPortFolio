import { Link } from "react-router-dom";
import './css/menu.css'

function Menu() {
    const menuItems = [
        { label: "Home", path:"/"},
        { label: "About Me", path:"/aboutme"},
        { label: "Contact", path:"/contact"}
    ];

    return(
        <nav>
            {menuItems.map((item, index) => (
                <Link 
                    key={index} 
                    to={item.path}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}

export default Menu;
