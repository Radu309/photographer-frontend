import '/src/styles/Home.css'
import {useEffect, useState} from "react";
import wedding1 from '/src/images/wedding1.webp';
import wedding2 from '/src/images/wedding2.webp';
import wedding3 from '/src/images/wedding3.webp';
import wedding4 from '/src/images/wedding4.webp';

const images = [
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding1,
    wedding2,
    wedding3,
    wedding4,
];

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                showPrevImage();  // Schimbă la imaginea anterioară
            } else if (event.key === 'ArrowRight') {
                showNextImage();  // Schimbă la imaginea următoare
            } else if (event.key === 'Escape') {
                closeImage(); // Închide imaginea dacă se apasă "Escape"
            }
        };

        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage, selectedIndex]);  // Reactualizează când se schimbă imaginea selectată

    const openImage = (image, index) => {
        setSelectedImage(image);
        setSelectedIndex(index);
    }

    const closeImage = () => {
        setSelectedImage(null);
        setSelectedIndex(null);
    }

    const showPrevImage = () => {
        const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
        setSelectedImage(images[prevIndex])
        setSelectedIndex(prevIndex)
    }

    const showNextImage = () => {
        const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    return (
        <section id="home">
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => openImage(image, index)}>
                        <img src={image} alt={`Image ${index + 1}`}/>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="overlay" onClick={closeImage}>
                    <div className="overlay-content">
                        <div className="image-display">
                            <img src={selectedImage} alt="Selected"/>
                            <div className="image-counter">
                                {selectedIndex + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                    <div className="nav-arrow left-arrow" onClick={(e) => {
                        e.stopPropagation();
                        showPrevImage();
                    }}>
                        &#11160;
                        {/*⮘*/}
                    </div>

                    <div className="nav-arrow right-arrow" onClick={(e) => {
                        e.stopPropagation();
                        showNextImage();
                    }}>
                        &#11162;
                        {/*⮚*/}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Home;