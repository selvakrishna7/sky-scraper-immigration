import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Compass,
  ShieldCheck,
  Users,
  Plane,
  Plus,
  X,
} from "lucide-react";

import "./Destinations.css";

const destinations = [
  {
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    category: "EUROPE · OPPORTUNITIES",
    description: "Explore potential study, work, and travel pathways.",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=900&q=85",
    alt: "Amsterdam canals and architecture",
  },
  {
    name: "Norway",
    code: "NO",
    flag: "🇳🇴",
    category: "STUDY · WORK · TRAVEL",
    description:
      "Understand requirements relevant to your Norwegian plans.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85",
    alt: "Norwegian landscape beneath the northern lights",
  },
  {
    name: "Ireland",
    code: "IE",
    flag: "🇮🇪",
    category: "EDUCATION · CAREER",
    description:
      "Learn about relevant routes for education, employment, and visits.",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=900&q=85",
    alt: "Irish architecture and landscape",
  },
  {
    name: "Luxembourg",
    code: "LU",
    flag: "🇱🇺",
    category: "EUROPE · CAREER",
    description:
      "Explore applicable residence and work requirements.",
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=85",
    alt: "European city architecture",
  },
];

const moreCountries = [
  { name: "Austria", flag: "🇦🇹", code: "AT" },
  { name: "Belgium", flag: "🇧🇪", code: "BE" },
  { name: "Denmark", flag: "🇩🇰", code: "DK" },
  { name: "France", flag: "🇫🇷", code: "FR" },
  { name: "Germany", flag: "🇩🇪", code: "DE" },
  { name: "Iceland", flag: "🇮🇸", code: "IS" },
  { name: "Italy", flag: "🇮🇹", code: "IT" },
  { name: "Malta", flag: "🇲🇹", code: "MT" },
  { name: "Poland", flag: "🇵🇱", code: "PL" },
  { name: "Portugal", flag: "🇵🇹", code: "PT" },
  { name: "Switzerland", flag: "🇨🇭", code: "CH" },
];

const highlights = [
  {
    icon: Globe2,
    title: "Global Opportunities",
    description: "Explore your options",
  },
  {
    icon: ShieldCheck,
    title: "Clear Guidance",
    description: "Understand the process",
  },
  {
    icon: Users,
    title: "Personalized Support",
    description: "Guidance around your goals",
  },
  {
    icon: Compass,
    title: "Your Goals First",
    description: "Plan your next steps",
  },
];

// Create a consistent URL slug for each country.
const getCountrySlug = (countryName) =>
  countryName.toLowerCase().trim().replace(/\s+/g, "-");

function Destinations() {
  const [showMore, setShowMore] = useState(false);

  // Close the popup with Escape and prevent background scrolling.
  useEffect(() => {
    if (!showMore) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowMore(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMore]);

  return (
    <section className="destinations-section" id="destinations">
      <div className="destinations-container">
        {/* Section heading */}
        <header className="destinations-heading">
          <div className="destinations-eyebrow">
            <Globe2 size={17} />
            <span className="destinations-eyebrow-line" />
            EXPLORE THE WORLD
          </div>

          <div className="destinations-heading-row">
            <h2>
              Your World.
              <br />
              <span>Your Next Chapter.</span>
            </h2>

            <p>
              From international careers to overseas education, explore
              destinations and discover visa pathways that may align
              with your ambitions.
            </p>
          </div>

          <div className="destinations-heading-decoration">
            <span className="heading-decoration-line" />
            <span>ONE WORLD. MANY POSSIBILITIES.</span>
            <Plane size={16} />
          </div>
        </header>

        {/* Featured countries */}
        <div className="destination-grid destination-main-grid">
          {destinations.map((destination, index) => (
            <article
              className="destination-card"
              key={destination.code}
              style={{ "--card-index": index }}
            >
              <Link
                to={`/destinations/${getCountrySlug(destination.name)}`}
                className="destination-image-link"
                aria-label={`Explore ${destination.name} opportunities`}
              >
                <img
                  className="destination-image"
                  src={destination.image}
                  alt={destination.alt}
                  loading="lazy"
                />

                <div className="destination-image-overlay" />

                <div className="destination-badge">
                  <span>{destination.flag}</span>
                  <span>{destination.code}</span>
                </div>

                <span className="destination-globe">
                  <Globe2 size={19} />
                </span>

                <div className="destination-card-content">
                  <span className="destination-category">
                    {destination.category}
                  </span>

                  <h3>{destination.name}</h3>

                  <p>{destination.description}</p>

                  <span className="destination-link">
                    Explore options
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            </article>
          ))}

          {/* More countries popup trigger */}
          <button
            type="button"
            className="destination-more-card"
            onClick={() => setShowMore(true)}
            aria-label={`Explore ${moreCountries.length} more countries`}
            aria-haspopup="dialog"
            aria-expanded={showMore}
          >
            <span className="more-card-orbit orbit-one" />
            <span className="more-card-orbit orbit-two" />

            <span className="more-card-icon">
              <Plus size={27} />
            </span>

            <span className="more-card-number">
              +{moreCountries.length}
            </span>

            <span className="more-card-title">More Countries</span>

            <span className="more-card-description">
              Discover more European destinations
            </span>

            <span className="more-card-action">
              View all countries
              <ArrowUpRight size={17} />
            </span>
          </button>
        </div>

        {/* More countries popup */}
        {showMore && (
          <div
            className="countries-modal-overlay"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowMore(false);
              }
            }}
          >
            <div
              className="countries-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="countries-modal-title"
            >
              {/* Popup header */}
              <div className="countries-modal-header">
                <div className="countries-modal-heading-content">
                  <span className="more-countries-kicker">
                    <Globe2 size={16} />
                    EUROPEAN DESTINATIONS
                  </span>

                  <h3 id="countries-modal-title">
                    Explore More Countries
                  </h3>

                  <p>
                    Discover more destinations for your next journey.
                  </p>
                </div>

                <button
                  type="button"
                  className="countries-modal-close"
                  onClick={() => setShowMore(false)}
                  aria-label="Close countries popup"
                  autoFocus
                >
                  <X size={22} />
                </button>
              </div>

              {/* Clickable country cards */}
              <div className="countries-modal-grid">
                {moreCountries.map((country) => (
                  <Link
                    to={`/destinations/${getCountrySlug(country.name)}`}
                    className="countries-modal-country"
                    key={country.code}
                    onClick={() => setShowMore(false)}
                  >
                    <span className="countries-modal-flag">
                      {country.flag}
                    </span>

                    <span className="countries-modal-country-info">
                      <span className="countries-modal-country-name">
                        {country.name}
                      </span>

                      <span className="countries-modal-country-label">
                        EUROPE · {country.code}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="countries-modal-arrow"
                    />
                  </Link>
                ))}
              </div>

              {/* Popup footer */}
              <div className="countries-modal-footer">
                <span>
                  Find a destination that matches your goals.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom call to action */}
        <div className="destination-bottom">
          <div className="destination-bottom-message">
            <div className="destination-bottom-icon">
              <Compass size={26} />
            </div>

            <div>
              <h3>Different countries. Different rules.</h3>
              <p>Same dream — a better future.</p>
            </div>
          </div>

          <a href="#contact" className="destination-bottom-cta">
            Discuss Your Plans
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Highlights */}
        <div className="destination-highlights">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div className="destination-highlight" key={title}>
              <div className="destination-highlight-icon">
                <Icon size={22} strokeWidth={1.7} />
              </div>

              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="destinations-disclaimer">
          Visa eligibility, requirements, and decisions depend on the
          destination country's rules and relevant authorities. No visa
          or immigration outcome is guaranteed.
        </p>
      </div>
    </section>
  );
}

export default Destinations;