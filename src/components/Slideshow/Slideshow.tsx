"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SlideshowProps {
    images: { src: string; alt: string }[];
    interval?: number; // Time between pictures in ms
}

export const Slideshow = ({ images, interval = 5000 }: SlideshowProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) {
            console.error("No images provided.");
            return;
        }

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="relative w-full h-screen bg-black">
            <div className="absolute inset-0">
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </div>
    );
};