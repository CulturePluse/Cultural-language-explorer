import React from "react";
import "./components/OurStory.css";

const OurStory = () => {
  return (
    <div className="our-story-container">
      <header className="our-story-hero">
        <div className="hero-text">
          <h1>Our Story</h1>
          <p>
            Bridging Cultures Through Language and Art
          </p>
        </div>
        <div className="hero-image">
          {/* Optional illustration or pattern */}
          <img src="/ndebele.jpg" alt="Cultural Art" />
        </div>
      </header>

      <section className="our-story-content">
        <h2>Rooted in Heritage, Driven by Purpose</h2>
        <p>
          Our journey began with a dream — to celebrate South Africa's rich linguistic and cultural tapestry through immersive learning. We believe that language is more than just words — it is a vessel for identity, history, and unity.
        </p>
        <p>
          From the colorful geometric patterns of the Ndebele, to the drumbeats of isiZulu ceremonies and the wisdom in Xitsonga proverbs, our platform invites users to experience language in its cultural context. Our team, made up of storytellers, linguists, developers, and artists, built this platform to make indigenous languages not only accessible, but emotionally resonant.
        </p>
        <p>
          Whether you're reconnecting with your roots or discovering a new culture, we welcome you to join us on this journey — one word, one rhythm, one story at a time.
        </p>
      </section>
    </div>
  );
};

export default OurStory;
