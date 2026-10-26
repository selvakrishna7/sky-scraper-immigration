
import {
  ArrowRight,
  Globe2,
  Compass,
  ShieldCheck,
  Users,
  FileCheck2,
  Handshake,
  UserRound,
} from "lucide-react";

import "./About.css";

const benefits = [
  {
    icon: UserRound,
    title: "Personalized Guidance",
    description:
      "We understand your goals and help you explore suitable pathways.",
  },
  {
    icon: FileCheck2,
    title: "Clear Communication",
    description:
      "Straightforward explanations of requirements, processes, and next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Organized Support",
    description:
      "Practical assistance with document preparation and application readiness.",
  },
  {
    icon: Handshake,
    title: "A People-First Approach",
    description:
      "Your plans matter. We focus on understanding your needs at every stage.",
  },
];

const values = [
  {
    icon: Globe2,
    title: "Global Opportunities",
    description: "Explore your possibilities",
  },
  {
    icon: Compass,
    title: "Personalized Guidance",
    description: "A path built around you",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description: "Clear steps and expectations",
  },
  {
    icon: Users,
    title: "People First",
    description: "Your future matters",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left: Global travel visual */}
          <div className="about-visual">
            <div className="about-image">
              <div className="about-image-shade" />

              <div className="about-image-label">
                <span>MORE COUNTRIES.</span>
                <span>MORE OPPORTUNITIES.</span>
                <i />
              </div>

              <div className="about-image-caption">
                <span>Your next chapter</span>
                <strong>Starts with a journey.</strong>
              </div>

              <div className="about-image-bottom">
                <Globe2 size={18} />
                <span>EXPLORE A WORLD OF POSSIBILITIES</span>
              </div>
            </div>

            <div className="about-image-badge">
              <div className="about-badge-icon">
                <Compass size={23} />
              </div>

              <div>
                <span>YOUR JOURNEY</span>
                <strong>Begins with a plan.</strong>
              </div>
            </div>
          </div>

          {/* Right: About content */}
          <div className="about-content">
            <div className="about-eyebrow">
              <span />
              ABOUT SKY SCRAPER
            </div>

            <h2>
              Your Ambitions.
              <br />
              <span>Our Commitment.</span>
            </h2>

            <p className="about-intro">
              Every international journey is personal. Your guidance should
              be, too.
            </p>

            <p className="about-description">
              At <strong>SKY SCRAPER IMMIGRATION</strong>, we help individuals
              and families explore international visa and immigration
              pathways through personalized guidance, clear communication,
              and thoughtful preparation. Our aim is to help you understand
              your options and approach your next steps with greater clarity.
            </p>

            <div className="about-benefits">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div className="about-benefit" key={title}>
                  <div className="about-benefit-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div className="about-benefit-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="about-cta">
                Get to Know Us
                <ArrowRight size={18} />
              </a>

              <span className="about-cta-note">
                Clear guidance for your next step.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="about-values">
          {values.map(({ icon: Icon, title, description }) => (
            <div className="about-value" key={title}>
              <Icon size={27} strokeWidth={1.6} />

              <h3>{title}</h3>

              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;