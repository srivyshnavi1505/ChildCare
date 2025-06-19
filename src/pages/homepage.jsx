
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../components/homepage.css';
import ImageGallery from '../components/ImageGallery.jsx';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="homepage-container" style={{ display: "flex", width: "100%" }}>
      {/* LEFT SECTION */}
      <motion.div
        className="homepage-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ flex: 1, padding: '2rem' }}
      >
        <h1>ChildCare<br />Connect</h1>
        <motion.button
          className="learn-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="homepage-right"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: 0.7 }}
      >
        <ImageGallery />
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-backdrop"
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, y: -100, opacity: 0 }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 120, damping: 10 }
              }}
              exit={{
                scale: 0.7,
                y: 100,
                opacity: 0,
                transition: { duration: 0.3 }
              }}
            >
              <h2>About ChildCare Connect</h2>
              <p>
                We are dedicated to improving the lives of children and families through various programs and initiatives. Our mission is to provide support, education, and resources to ensure every child has a bright future. Our impact aims to transform communities by empowering children and families with the tools they need to thrive. From educational programs to health and nutrition support, we strive to create a nurturing environment for all children.
              </p>
              <button onClick={() => setShowModal(false)} className="close-btn">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Homepage;
