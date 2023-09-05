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
      <section className="title">Time...it's not just relative.</section>
      <h2>Check out our Featured Watches</h2>
      <section id="fw_details">
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
