import '/src/pages/styles/OldHome.css'
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

const OldHome = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const [translateX, setTranslateX] = useState(0); // State for translation
    const [swiping, setSwiping] = useState(false); // State to determine if swiping

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'Escape') {
                closeImage();
            }
        };

        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage, selectedIndex]);

    const openImage = (image, index) => {
        setSelectedImage(image);
        setSelectedIndex(index);
        setTranslateX(0); // Reset translation when opening a new image
    };

    const closeImage = () => {
        setSelectedImage(null);
        setSelectedIndex(null);
        setTranslateX(0); // Reset translation when closing
    };

    const showPrevImage = () => {
        const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
        setSelectedImage(images[prevIndex]);
        setSelectedIndex(prevIndex);
        setTranslateX(0); // Reset translation when changing image
    };

    const showNextImage = () => {
        const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
        setTranslateX(0); // Reset translation when changing image
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX); // Capture the starting position
        setSwiping(true); // Set swiping to true
    };

    const handleTouchMove = (e) => {
        if (touchStartX !== null) {
            setTouchEndX(e.touches[0].clientX); // Update the ending position
            // Calculate translation based on touch movement
            const movementX = e.touches[0].clientX - touchStartX;
            setTranslateX(movementX); // Update translation
        }
    };

    const handleTouchEnd = () => {
        if (touchStartX !== null && touchEndX !== null) {
            if (touchStartX - touchEndX > 50) {
                // Swipe left
                showNextImage();
            } else if (touchEndX - touchStartX > 50) {
                // Swipe right
                showPrevImage();
            }
        }
        // Reset touch positions and translation
        setTouchStartX(null);
        setTouchEndX(null);
        setTranslateX(0); // Reset translation
        setSwiping(false); // Set swiping to false
    };

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
                    <div className="overlay-content"
                         onTouchStart={handleTouchStart}
                         onTouchMove={handleTouchMove}
                         onTouchEnd={handleTouchEnd}>
                        <div className="image-display" >
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

export default OldHome;