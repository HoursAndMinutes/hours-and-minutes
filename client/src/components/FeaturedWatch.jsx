// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./FeaturedWatch.css";

const FeaturedWatch = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="container">
      <section id="fw_details">
      <h2 id="feat-text">Check out our Featured Watches</h2>
      <button id="open-button" onClick={openModal}>Click Here</button>
        <a onClick={openModal}>
          <img
            className="feat_img"
            src="./src/photos/watches-3518474_1920.jpg"
            alt="Featured Watch"
          />
        </a>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-bg" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <header>
              <h2>Featured Watch Details</h2>
            </header>
            <article>
              <p>Here are the details of the featured watch.</p>
            </article>
            <footer>
              <button className="button success" onClick={closeModal}>
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedWatch;
