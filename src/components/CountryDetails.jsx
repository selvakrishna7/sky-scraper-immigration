import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

import "./CountryDetails.css";

const jobVacancies = [
  "Warehouse Admin",
  "Room Attendant",
  "Hotel Cleaner",
  "Kitchen Helper",
  "Healthcare Worker",
  "Waiter Assistant",
  "Packing Helper",
  "Front Desk Representative",
  "Caregiver / Nursing Assistant",
  "Kitchen Assistant",
  "Construction Worker",
  "Warehouse Supervisor",   
];

const countries = {
  netherlands: {
    name: "Netherlands",
    flag: "🇳🇱",
    code: "NL",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore job opportunities in the Netherlands and contact our team to discuss your employment interests and relevant requirements.",
  },

  norway: {
    name: "Norway",
    flag: "🇳🇴",
    code: "NO",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore job opportunities in Norway and learn about the requirements that may apply to your employment plans.",
  },

  ireland: {
    name: "Ireland",
    flag: "🇮🇪",
    code: "IE",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Discover job opportunities in Ireland and discuss your preferred role and relevant employment requirements with our team.",
  },

  luxembourg: {
    name: "Luxembourg",
    flag: "🇱🇺",
    code: "LU",
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore employment possibilities in Luxembourg and understand the requirements relevant to your plans.",
  },

  austria: {
    name: "Austria",
    flag: "🇦🇹",
    code: "AT",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore job opportunities in Austria and discuss your employment interests with our team.",
  },

  belgium: {
    name: "Belgium",
    flag: "🇧🇪",
    code: "BE",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Discover employment possibilities in Belgium and learn about the requirements relevant to your plans.",
  },

  denmark: {
    name: "Denmark",
    flag: "🇩🇰",
    code: "DK",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore job opportunities in Denmark and discuss your preferred employment pathway with our team.",
  },

  france: {
    name: "France",
    flag: "🇫🇷",
    code: "FR",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Discover employment possibilities in France and learn about the requirements that may apply to your plans.",
  },

  germany: {
    name: "Germany",
    flag: "🇩🇪",
    code: "DE",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore job opportunities in Germany and discuss your preferred role and relevant employment requirements.",
  },

  iceland: {
    name: "Iceland",
    flag: "🇮🇸",
    code: "IS",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Discover job opportunities in Iceland and discuss your employment interests with our team.",
  },

  italy: {
    name: "Italy",
    flag: "🇮🇹",
    code: "IT",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore employment possibilities in Italy and learn about the requirements relevant to your plans.",
  },

  malta: {
    name: "Malta",
    flag: "🇲🇹",
    code: "MT",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Discover job opportunities in Malta and discuss your preferred employment pathway with our team.",
  },

  poland: {
    name: "Poland",
    flag: "🇵🇱",
    code: "PL",
    image:
      "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore job opportunities in Poland and understand the requirements that may apply to your employment plans.",
  },

  portugal: {
    name: "Portugal",
    flag: "🇵🇹",
    code: "PT",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Discover employment possibilities in Portugal and discuss your preferred role with our team.",
  },

  switzerland: {
    name: "Switzerland",
    flag: "🇨🇭",
    code: "CH",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=90",
    introduction:
      "Explore job opportunities in Switzerland and learn about relevant employment and work authorisation requirements.",
  },
};

function CountryDetails() {
  const { countryName } = useParams();

  const country = countries[countryName?.toLowerCase()];

  if (!country) {
    return (
      <main className="country-not-found">
        <Globe2 size={44} />

        <h1>Country Not Found</h1>

        <p>
          We couldn't find the destination you're looking for.
        </p>

        <Link
          to="/"
          className="country-primary-button"
        >
          <ArrowLeft size={18} />
          Back to Destinations
        </Link>
      </main>
    );
  }

  return (
    <main className="country-details-page">
      {/* COUNTRY HERO */}
      <section
        className="country-hero"
        style={{
          "--country-image": `url("${country.image}")`,
        }}
      >
        <div className="country-hero-overlay" />

        <div className="country-hero-content">
          <Link
            to="/#destinations"
            className="country-back-link"
          >
            <ArrowLeft size={17} />
            All Destinations
          </Link>

          <div className="country-label">
            <span>{country.flag}</span>
            <span>{country.code}</span>
            <span>JOB OPPORTUNITIES</span>
          </div>

          <h1>
            Job Vacancies in <span>{country.name}</span>
          </h1>

          <p>{country.introduction}</p>

          <div className="country-hero-actions">
            <a
              href="#country-job-vacancies"
              className="country-primary-button"
            >
              View Job Vacancies
              <ArrowRight size={18} />
            </a>

            <Link
              to="/#contact"
              className="country-secondary-button"
            >
              <MessageCircle size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* INFORMATION STRIP */}
      <section className="country-info-strip">
        <div>
          <Globe2 size={23} />

          <span>
            <strong>Explore Job Options</strong>
            <small>Review the available job categories</small>
          </span>
        </div>

        <div>
          <ShieldCheck size={23} />

          <span>
            <strong>Understand Requirements</strong>
            <small>Check applicable work permit rules</small>
          </span>
        </div>

        <div>
          <BriefcaseBusiness size={23} />

          <span>
            <strong>Discuss Your Plans</strong>
            <small>Contact our team for further information</small>
          </span>
        </div>
      </section>

      {/* JOB VACANCIES */}
      <section
        className="country-work-section"
        id="country-job-vacancies"
      >
        <div className="country-section-heading">
          <span>JOB OPPORTUNITIES · {country.code}</span>

          <h2>
            JOB <span>VACANCIES</span>
          </h2>

          <p>
            Explore the following job categories for {country.name}.
          </p>
        </div>

        <div className="country-vacancies-list">
          {jobVacancies.map((job) => (
            <div
              className="country-vacancy-item"
              key={job}
            >
              <CheckCircle2
                size={23}
                className="country-vacancy-check"
              />

              <span>{job}</span>
            </div>
          ))}

          <div className="country-vacancy-item country-more-vacancies">
            <CheckCircle2
              size={23}
              className="country-vacancy-check"
            />

            <span>AND MORE....</span>
          </div>
        </div>

        {/* CONSULTATION */}
        <div className="country-consultation">
          <div>
            <span>YOUR INTERNATIONAL JOURNEY</span>

            <h2>
              Interested in working in {country.name}?
            </h2>

            <p>
              Contact our team to discuss your preferred job category
              and understand the requirements relevant to your situation.
            </p>
          </div>

          <Link
            to={`/#contact`}
            className="country-primary-button"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* DISCLAIMER */}
        <p className="country-disclaimer">
          These job categories are provided for general information
          and do not confirm current vacancies, employer sponsorship,
          eligibility, or visa approval. Availability and work
          authorisation depend on the relevant country's rules and
          individual circumstances.
        </p>
      </section>
    </main>
  );
}

export default CountryDetails;