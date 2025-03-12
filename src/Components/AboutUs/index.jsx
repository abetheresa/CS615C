import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container-fluid bg-white text-dark min-vh-100 py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">About Us</h1>
          <p className="text-secondary fs-5">
            Bringing creativity, fun, and innovation to gaming!
          </p>
        </div>

        {/* Company Introduction */}
        <div className="mb-5">
          <h3 className="fw-bold text-dark">Who We Are</h3>
          <p className="fs-5">
            At <strong>Abcdef Studios</strong>, we are passionate game developers committed to creating 
            fun and engaging experiences for players worldwide. 
            From classic board games like Tic-Tac-Toe to modern multiplayer adventures, 
            we aim to provide high-quality gaming that brings people together.
          </p>
          <p className="fs-5">
            Founded in 2025, our company has built a strong reputation for delivering 
            <strong> interactive and enjoyable</strong> games that appeal to all age groups.
            Our goal is to blend <strong>creativity, technology, and player engagement</strong> into every game we make.
          </p>
        </div>

        {/* Our Mission & Values */}
        <div className="mb-5">
          <h3 className="text-primary fw-bold">Our Mission & Values</h3>
          <p className="fs-5">
            Our mission is simple: <strong>to create games that entertain, inspire, and connect people.</strong>  
            Whether you are playing a quick match of Tic-Tac-Toe or diving into a strategic battle, 
            we want every player to have a seamless and enjoyable experience.
          </p>

          <h5 className="fw-bold text-success">🎯 Innovation</h5>
          <p className="fs-5">We constantly push the boundaries of game design and technology.</p>

          <h5 className="fw-bold text-info">🌍 Community</h5>
          <p className="fs-5">We believe in fostering a welcoming and inclusive gaming space.</p>

          <h5 className="fw-bold text-warning">💡 Creativity</h5>
          <p className="fs-5">Every game we develop is a blend of imagination, strategy, and fun.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
