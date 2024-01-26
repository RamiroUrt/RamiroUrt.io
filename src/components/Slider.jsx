import { useState, useEffect } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew} from "react-icons/md" ;

const slideImages = [
  "/IMG/slider/1.png",
  "/IMG/slider/2.png",
  "/IMG/slider/3.png",
  "/IMG/slider/4.png",
  "/IMG/slider/5.png"
];

export default function Carousel({
  autoSlide = true,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slideImages.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slideImages.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full   md:mt-0 overflow-hidden ">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          width: `${slideImages.length * "full"}`,
        }}
      >
        {slideImages.map((imageUrl, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={imageUrl}
              alt={`slide-${index}`}
              className="w-[100%] object-cover h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full text-gray-800 opacity-60 "
        >
          <MdArrowBackIosNew size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full text-gray-800 opacity-60 "
        >
          <MdArrowForwardIos size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slideImages.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
