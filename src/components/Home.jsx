import { ArrowRight, ArrowUpRight, Globe2 } from "lucide-react";
import "./Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-background-glow" />

      <div className="home-container">
        <div className="home-content">
          <div className="home-eyebrow">
            <Globe2 size={17} />
            <span>YOUR GLOBAL JOURNEY STARTS HERE</span>
          </div>

          <h1>
            The World Is
            <br />
            Bigger <span>Than Where You Begin.</span>
          </h1>

          <p className="home-description">
            Your ambitions deserve a world of possibilities. Explore
            international opportunities with personalized immigration
            guidance built around your plans, goals, and next chapter.
          </p>

          <div className="home-actions">
            <a href="#contact" className="primary-btn">
              Start Your Journey <ArrowRight size={19} />
            </a>

            <a href="#services" className="secondary-btn">
              Explore Our Services <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="home-note">
            <span className="home-note-line" />
            <p>
              Clear guidance. Informed decisions. A future without limits.
            </p>
          </div>
        </div>
      </div>

      <a href="#about" className="home-scroll">
        <span />
        Scroll to discover
      </a>
    </section>
  );
}

export default Home;