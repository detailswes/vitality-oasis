import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState, type JSX } from "react";
import PlayIcon from "@/assets/icons/play.svg";
import StoryOneImage from "@/assets/images/story-one.webp";
import StoryTwoImage from "@/assets/images/story-two.webp";
import StoryThreeImage from "@/assets/images/story-three.webp";

interface story {
  image: JSX.Element;
}

// TypeScript type definition for the slider reference
declare global {
  interface Window {
    slick: any; // Temporarily defining slick as any. Replace with correct type if available
  }
}

const StoriesSlider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Defining ref with Slider type to access slick methods
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    arrows: false, // Disable default arrows since we're using custom buttons
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    } else {
      console.error("sliderRef.current is null");
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    } else {
      console.error("sliderRef.current is null");
    }
  };

  if (!isMounted) return null;

  const stories: story[] = [
    {
      image: (
        <img
          src={StoryOneImage.src}
          alt="program-one"
          className="w-[300px] h-[156px] object-cover"
        />
      ),
    },
    {
      image: (
        <img
          src={StoryTwoImage.src}
          alt="program-two"
          className="w-[300px] h-[156px] object-cover"
        />
      ),
    },
    {
      image: (
        <img
          src={StoryThreeImage.src}
          alt="program-three"
          className="w-[300px] h-[156px] object-cover"
        />
      ),
    },
  ];

  return (
    <div className="flex items-center gap-4 mt-8 md:mt-14 relative">
      <div className="flex-col items-end min-w-[218px] absolute bottom-[-60px] inset-x-0 md:static md:flex">
        <p className="text-white text-center uppercase mb-2">Other Stories</p>
        <div className="flex items-center justify-center md:justify-end md:mr-8">
          <button
            onClick={handlePrev}
            className="hover:scale-105 transition-transform"
          >
            <svg
              className="mr-3 rotate-180"
              width="26"
              height="11"
              viewBox="0 0 26 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.539068 5.84209H23.7115L20.3293 9.22427L21.1265 10.0215L25.8697 5.27833L21.1265 0.535182L20.3293 1.33239L23.7116 4.71464H0.539068V5.84209Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="hover:scale-105 transition-transform"
          >
            <svg
              width="26"
              height="11"
              viewBox="0 0 26 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.539068 5.84209H23.7115L20.3293 9.22427L21.1265 10.0215L25.8697 5.27833L21.1265 0.535182L20.3293 1.33239L23.7116 4.71464H0.539068V5.84209Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {stories.map((story, index) => (
            <div key={index} className="border border-secondary relative">
              {story.image}
              <button className="absolute bottom-[10px] left-[10px]">
                <img src={PlayIcon.src} alt="play-icon" className="w-[42px]" />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StoriesSlider;
