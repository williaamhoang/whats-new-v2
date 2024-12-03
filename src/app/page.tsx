import { Slideshow } from "@/components/Slideshow/Slideshow";

export default function Home() {
  const images = [
    { src: "/images/homepageImage.jpg", alt: "Photo 1" },
    { src: "/images/homepageImage2.jpg", alt: "Photo 2" },
    { src: "/images/homepageImage3.jpg", alt: "Photo 3" },
    { src: "/images/homepageImage4.jpg", alt: "Photo 4" },
    { src: "/images/homepageImage5.jpg", alt: "Photo 5" },
    { src: "/images/homepageImage6.jpg", alt: "Photo 6" },
    { src: "/images/homepageImage7.jpg", alt: "Photo 7" },
  ];

  return (
    <div className="relative w-full h-screen">
      <Slideshow images={images} interval={1500} />
    </div>
  );
}