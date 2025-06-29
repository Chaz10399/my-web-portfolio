import React, { useRef, useState, useEffect } from "react";
import { arrowForward, arrowBack } from "../../assets/images/imglibrary";
import "./ImageScroller.css";

export default function ImageScroller({ images }) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i) => {
    if (i < 0 || i >= images.length) return; // Prevent invalid scrolling
    const el = ref.current;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setIndex(i);
  };

  return (
    <div className="scroller-col">
      <div className="scroll-wrapper">
        <button
          className="scroll-arrow left-arw"
          onClick={() => scrollTo(index - 1)}
          disabled={index === 0}
        >
          <img src={arrowBack} alt="prev" />
        </button>

        <div className="img-container" ref={ref}>
          {images.map((img, i) => (
            <img key={i} src={img} alt={`img${i}`} />
          ))}
        </div>

        <button
          className="scroll-arrow right-arw"
          onClick={() => scrollTo(index + 1)}
          disabled={index === images.length - 1}
        >
          <img src={arrowForward} alt="next" />
        </button>
      </div>
      <div className="img-bar-container">
        {images.map((_, i) => (
          <div
            key={i}
            className={`img-bar ${index === i ? "active" : ""}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
