// src/components/ImageGallery.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../components/imagegallery.css";

import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-bg">
        <h2 className="gallery-title"></h2>
        {images.map((image, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="gallery-image-wrapper"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-img-vertical" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
