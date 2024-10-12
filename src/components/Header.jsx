import "/src/styles/Header.css"
import {useState} from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <header id="header">
            <div className="sidebar">
                <button className="menu-button" onClick={toggleMenu}>
                    ☰
                </button>
                <nav
                    className={`menu ${menuOpen ? 'open' : 'closed'}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;