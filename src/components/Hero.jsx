import { Link } from "react-router-dom";
import heroImg from "../assets/developer-Photoroom.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Ace Your Next Interview</h1>

        <p>
          Practice Frontend, Backend, DSA and HR interview questions in one
          modern platform.
        </p>

        <Link className="btn" to="/categories">
          Start Practicing
        </Link>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Interview Preparation" />
      </div>
    </section>
  );
}

export default Hero;
