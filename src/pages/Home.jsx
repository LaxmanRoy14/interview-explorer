import Hero from "../components/Hero";
import { Link } from "react-router-dom";

import {
  FaLock,
  FaHeart,
  FaMoon,
  FaSearch,
  FaShieldAlt,
  FaListOl,
} from "react-icons/fa";

import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.webp";
import dsaImg from "../assets/dsa.png";
import hrImg from "../assets/hr.png";

function Home() {
  return (
    <>
      <Hero />

      {/* FEATURES */}

      <section className="home-section">
        <h2 className="section-title">Powerful Features</h2>

        <div className="home-grid">
          <div className="feature-card">
            <FaLock className="feature-icon" />

            <h3>Authentication</h3>

            <p>Secure login and registration system with protected routes.</p>
          </div>

          <div className="feature-card">
            <FaHeart className="feature-icon" />

            <h3>Favorites</h3>

            <p>Save important interview questions for quick revision.</p>
          </div>

          <div className="feature-card">
            <FaMoon className="feature-icon" />

            <h3>Dark Mode</h3>

            <p>
              Persistent theme support for a comfortable learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="home-section categories-preview">
        <h2 className="section-title">Interview Categories</h2>

        <div className="home-grid">
          <div className="feature-card">
            <div className="image-wrapper">
              <img
                src={frontendImg}
                alt="Frontend"
                className="home-category-img"
              />
            </div>

            <h3>Frontend</h3>

            <p>HTML, CSS, JavaScript and React interview questions.</p>
          </div>

          <div className="feature-card">
            <div className="image-wrapper">
              <img src={backendImg} alt="Backend" className="home-category-img" />
            </div>

            <h3>Backend</h3>

            <p>Python, Flask and API development concepts.</p>
          </div>

          <div className="feature-card">
            <div className="image-wrapper">
              <img src={dsaImg} alt="DSA" className="home-category-img" />
            </div>

            <h3>DSA</h3>

            <p>Data Structures, Algorithms and coding interview preparation.</p>
          </div>

          <div className="feature-card">
            <div className="image-wrapper">
              <img
                src={hrImg}
                alt="HR"
                className="home-category-img"
              />
            </div>

            <h3>HR</h3>

            <p>Behavioral and communication interview questions.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="home-section">
        <h2 className="section-title">Why Choose InterviewAce?</h2>

        <div className="home-grid">
          <div className="feature-card">
            <FaSearch className="feature-icon" />

            <h3>Search & Filter</h3>

            <p>
              Quickly find relevant interview questions using search and
              filters.
            </p>
          </div>

          <div className="feature-card">
            <FaListOl className="feature-icon" />

            <h3>Pagination</h3>

            <p>
              Smooth browsing experience for large collections of questions.
            </p>
          </div>

          <div className="feature-card">
            <FaHeart className="feature-icon" />

            <h3>Redux Favorites</h3>

            <p>Efficient state management using Redux Toolkit.</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />

            <h3>Protected Routes</h3>

            <p>Secure access control for user actions and features.</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <h2>Ready To Ace Your Next Interview?</h2>

        <p>Start practicing today and build confidence for your dream job.</p>

        <Link to="/categories" className="btn">
          Start Practicing
        </Link>
      </section>
    </>
  );
}

export default Home;
