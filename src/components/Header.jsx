import "/src/styles/Header.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Header = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };
    const handleHomeClick = () => {
        navigate('/');
    };
    return(
        <header id="header" className={scrolled ? "scrolled" : ""}>
            <div className="header-body">
                <div className="header-container">
                    <div className="icon-text" onClick={handleHomeClick}>
                        <span>RSR</span>
                        <span>-videography-</span>
                    </div>
                    <button className="contact-button" onClick={handleContactClick}>Contact</button>
                </div>
            </div>
        </header>
    )
}

export default Header;