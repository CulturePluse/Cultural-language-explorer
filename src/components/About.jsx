import React from 'react';
import './About.css';
import Map from '../assets/MapOfSA.png';
import AfricanPattern from '../assets/african.png'; // Add an African pattern background

const About = () => {
  return (
    <div className="african-container">
      {/* Hero Section with African-inspired design */}
      <section className="hero-section" style={{backgroundImage: `url(${AfricanPattern})`}}>
        <div className="hero-overlay">
          <h1 className="hero-title">Ukubona kweLwimi</h1>
          <p className="hero-subtitle">The Language Preservation Journey</p>
          <div className="african-border"></div>
        </div>
      </section>

      {/* Our Approach with African-inspired cards */}
      <section className="plans-section">
        <h2 className="section-title">
          <span className="title-decoration">❖</span> Indlela yethu <span className="title-decoration">❖</span>
        </h2>
        <p className="section-subtitle">Our Approach</p>
        <div className="plans-grid">
          <div className="plan-card">
            <div className="card-icon">𓃠</div>
            <h3>Izifundo eziqhuba ngokuzibandakanya</h3>
            <p>Interactive Lessons that connect you to heritage</p>
          </div>
          <div className="plan-card">
            <div className="card-icon">𓃭</div>
            <h3>Ukugcina amasiko</h3>
            <p>Cultural preservation through language</p>
          </div>
          <div className="plan-card">
            <div className="card-icon">𓃯</div>
            <h3>Ubuntu</h3>
            <p>Community-focused learning</p>
          </div>
        </div>
      </section>

      {/* Our Story with African pattern */}
      <section className="story-section">
        <div className="pattern-left"></div>
        <div className="story-content">
          <h2 className="section-title">
            <span className="title-decoration">◆</span> Indaba yethu <span className="title-decoration">◆</span>
          </h2>
          <p className="intro-text">
            We are dedicated to preserving and celebrating South African languages through innovative digital platforms.
          </p>
        </div>
        <div className="pattern-right"></div>
      </section>

      {/* Mission/Vision with Ndebele-inspired design */}
      <section className="mission-vision-card">
        <div className="text-content ndebele-pattern">
          <h3>Inhloso yethu</h3>
          <p>To empower South Africans by preserving their cultural heritage through language learning.</p>
        </div>
        <div className="text-content ndebele-pattern">
          <h3>Inkambiso</h3>
          <p>A world where every South African language thrives in the digital age.</p>
        </div>
      </section>

      {/* Map section with African design elements */}
      <section className="map-section">
        <h2 className="section-title">
          <span className="title-decoration">⧉</span> Ukusabalala kweLwimi <span className="title-decoration">⧉</span>
        </h2>
        <div className="map-container">
          <img src={Map} alt="Language Distribution Map" className="map-image" />
            <div className="legend">
          </div>
        </div>
      </section>

      {/* Testimonials with African border designs */}
      <section className="testimonials-section">
        <h2 className="section-title">
          <span className="title-decoration">✻</span> Okushiwo abafundi <span className="title-decoration">✻</span>
        </h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="testimonial-border-top"></div>
            <p>"This platform brought me closer to my heritage."</p>
            <strong>Thabang Ndaba</strong>
            <small>isiZulu Learner</small>
            <div className="testimonial-border-bottom"></div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-border-top"></div>
            <p>"Learning became fun and engaging!"</p>
            <strong>Sibongile Dlamini</strong>
            <small>isiXhosa Learner</small>
            <div className="testimonial-border-bottom"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;