import React from 'react';
import './About.css';
import MapImage from '../../assets/language-map.png'; // Replace with your actual image path

const About= () => {
  return (
    <div className="our-story-container">
      <h2 className="section-title">Our Story</h2>

      <div className="mission-vision-card">
        <div className="text-content">
          <h3>Our Mission</h3>
          <p>
            To preserve and promote South African languages through innovative digital platforms, making cultural heritage accessible to everyone.
          </p>
          <h3>Our Vision</h3>
          <p>
            Creating a world where language barriers dissolve, cultural understanding flourishes, and every South African language thrives in the digital age.
          </p>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Elements_of_language_-_lithographs.png" alt="Language Illustration" />
      </div>

      <h3 className="sub-section-title">Language Distribution</h3>
      <div className="map-card">
        <img src={MapImage} alt="Language Distribution Map" />
        <div className="legend">
          <div><span className="dot isiZulu"></span> isiZulu</div>
          <div><span className="dot Sesotho"></span> Sesotho</div>
          <div><span className="dot isiXhosa"></span> isiXhosa</div>
        </div>
      </div>

      <h3 className="sub-section-title">Testimonials</h3>
      <div className="testimonials">
        <div className="testimonial-card">
          <p>"Learning my ancestral language has reconnected me with my identity."</p>
          <strong>Thabang Ndaba</strong>
          <small>isiZulu Learner</small>
        </div>
        <div className="testimonial-card">
          <p>"The platform has helped me understand and appreciate the rich complexity of South African languages."</p>
          <strong>Sibongile Dlamini</strong>
          <small>isiXhosa Learner</small>
        </div>
        <div className="testimonial-card">
          <p>"The immersive learning approach makes it easy to practice and retain new language skills!"</p>
          <strong>Lesedi Mofokeng</strong>
          <small>Sesotho Learner</small>
        </div>
      </div>
    </div>
  );
};

export default About;
