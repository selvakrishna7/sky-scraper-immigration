import {
  ArrowUpRight,
  BriefcaseBusiness,
  Plane,
  Building2,
  GraduationCap,
  House,
  Globe2,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    id: "work-permit",
    number: "01",
    title: "Work Permit",
    category: "CAREER OPPORTUNITIES",
    description:
      "Explore work authorization pathways and understand the requirements relevant to your international career plans.",
    image:
      "https://www.ecoonline.com/wp-content/uploads/2025/01/woman-wearing-hardhat-checking-tablet.jpg",
    imageAlt: "Professional exploring international career opportunities",
    icon: BriefcaseBusiness,
  },
  {
    id: "visit-visa",
    number: "02",
    title: "Visit Visa",
    category: "TRAVEL & EXPLORATION",
    description:
      "Prepare for international visits with guidance on visitor visa requirements, documentation, and application steps.",
    image:
      "https://bizztor.com/_next/image/?url=https%3A%2F%2Fvssblfqnvdsiqmzslhnb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fmedia%2F2026%2F10%2Fuse-of-ai-in-visa-applications.webp&w=1920&q=75",
    imageAlt: "Airplane representing international travel",
    icon: Plane,
  },
  {
    id: "business-visa",
    number: "03",
    title: "Business Visa",
    category: "GLOBAL BUSINESS",
    description:
      "Understand visa options for eligible business meetings, professional engagements, and international opportunities.",
    image:
      "https://lexvisas.in/wp-content/uploads/2026/05/Wordpress-Blog-Images-37.png",
    imageAlt: "Professional international business environment",
    icon: Building2,
  },
  {
    id: "student-visa",
    number: "04",
    title: "Student Visa",
    category: "INTERNATIONAL EDUCATION",
    description:
      "Explore student visa processes and organize the documents needed for your overseas education plans.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqKD8O5QsaDe25z7p_RV2PEJl5abUeKoyNe0A3e4xXtFzVRvin6pMZFc&s=10",
    imageAlt: "University campus representing international education",
    icon: GraduationCap,
  },
  {
    id: "permanent-residency",
    number: "05",
    title: "Permanent Residency",
    category: "LONG-TERM OPPORTUNITIES",
    description:
      "Learn about potential permanent residency pathways, eligibility criteria, and the relevant application process.",
    image:
      "https://global.upenn.edu/isss/wp-content/uploads/sites/2/2025/02/happy-travellers-young-arab-couple-with-passports-2023-11-27-04-50-21-utc-scaled.jpg",
    imageAlt: "Travellers representing long-term international opportunities",
    icon: House,
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Heading */}
        <div className="services-heading">
          <div className="services-eyebrow">
            <span />
            <Globe2 size={16} />
            WHAT WE HELP WITH
          </div>

          <div className="services-heading-content">
            <div>
              <h2>
                Your Next Move.
                <br />
                <span>Our Guidance.</span>
              </h2>
            </div>

            <p>
              Every journey is different. Discover guidance for your
              international travel, career, education, and long-term goals.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            const servicePath = `/services/${service.id}`;

            return (
              <article
                className="service-card"
                id={service.id}
                key={service.id}
              >
                {/* Clickable Service Image */}
                <Link
                  to={servicePath}
                  className="service-image-link"
                  aria-label={`View ${service.title} details`}
                >
                  <img
                    className="service-image"
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                  />

                  <div className="service-image-overlay" />

                  <span className="service-image-number">
                    {service.number}
                  </span>

                  <span className="service-image-category">
                    {service.category}
                  </span>

                  <span className="service-image-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                </Link>

                {/* Service Content */}
                <div className="service-card-content">
                  <div className="service-card-title-row">
                    <div className="service-icon">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="service-card-index">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  {/* Navigate to Service Details */}
                  <Link
                    to={servicePath}
                    className="service-link"
                    aria-label={`Explore ${service.title}`}
                  >
                    <span>Explore {service.title}</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="services-disclaimer">
          <div className="disclaimer-icon">
            <ShieldCheck size={23} />
          </div>

          <div className="disclaimer-content">
            <strong>Clear guidance. Informed decisions.</strong>

            <p>
              Visa eligibility, requirements, and decisions depend on the
              destination country's rules and relevant authorities. No
              outcome is guaranteed.
            </p>
          </div>

          <Globe2 className="disclaimer-globe" size={64} />
        </div>

      </div>
    </section>
  );
}

export default Services;