import wedding1 from '/src/images/wedding1.jpg';
import wedding2 from '/src/images/wedding2.webp';
import wedding3 from '/src/images/wedding3.webp';
import wedding4 from '/src/images/wedding4.webp';
import logoPhotographer from '/src/icons/jpg/photographer-logo.jpg';
import rusinaruProfile from '/src/images/rusinaru-profile.jfif';
import {useState} from "react";
import "/src/pages/styles/Home.css"
import "/src/pages/styles/Block-1.css"
import "/src/pages/styles/Block-2.css"
import "/src/pages/styles/Block-3.css"

const images = [
    wedding1,
    wedding2,
    wedding3,
    wedding4,
];
const firstText = [
    "Capturând momentele",
    "Unde iubirea întâlnește",
    "Fiecare detaliu spune",
    "În rama amintirilor"
];

const secondText = [
    "ce rămân veșnice.",
    "lumina perfectă.",
    "o poveste aparte.",
    "păstrate pentru totdeauna."
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    return (
        <section id="home">
            <div className="home-container">
                <div className="block-1">
                    <img className="image" src={images[currentIndex]} alt="Wedding background"/>
                    <div className="content-image">
                        <div className="text-1">{firstText[currentIndex]}</div>
                        <div className="horizontal-bar"></div>
                        <div className="arrows-buttons">
                            <button className="arrow-left" onClick={handlePrev}>&#171;</button>
                            <div className="text-2-mid">{secondText[currentIndex]}</div>
                            <button className="arrow-right" onClick={handleNext}>&#187;</button>
                        </div>
                    </div>
                </div>
                <div className="block-2">
                    <div className="container">
                        <div className="text-left">
                            Momente reale, capturate cu sinceritate. Fiecare imagine spune o poveste unică și autentică.
                        </div>
                        <div className="vertical-bar"/>
                        <div className="img-mid">
                            <img src={logoPhotographer} alt="Logo photographer"/>
                        </div>
                        <div className="vertical-bar"/>
                        <div className="text-right">
                            Planul tău este să te bucuri de fiecare clipă, iar scopul meu este să transform acele clipe
                            în amintiri de neuitat
                        </div>
                    </div>
                </div>
                <div className="block-3">
                    <div className="container">
                        <div className="profile-image">
                            <img src={rusinaruProfile} alt="Profile picture"/>
                        </div>
                        <div className="description-block">
                            <div className="description-container">
                                Description
                            </div>
                        </div>
                    </div>
                    <div className="block-4">

                    </div>
                </div>
            </div>
        </section>
);
}

export default Home;