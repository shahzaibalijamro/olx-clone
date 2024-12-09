import { useState, useEffect } from "react";

export function SimpleCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://images.olx.com.pk/thumbnails/437508562-800x600.webp",
        "https://images.olx.com.pk/thumbnails/437508562-800x600.webp",
        "https://images.olx.com.pk/thumbnails/437508562-800x600.webp", // Add more images if needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // 3 seconds for auto-slide

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`, // Set width to fit all images
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full object-cover"
                    />
                ))}
            </div>
        </div>
    );
}