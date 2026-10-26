import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
} from "lucide-react";

import "./ServiceDetail.css";

const serviceDetails = {
  "work-permit": {
    title: "Work Permit",
    category: "CAREER OPPORTUNITIES",
    subtitle: "Take the next step in your international career.",
    description:
      "Explore work authorization pathways and understand the requirements relevant to your international career plans.",
    image:
      "https://www.ecoonline.com/wp-content/uploads/2025/01/woman-wearing-hardhat-checking-tablet.jpg",
    benefits: [
      "Understand destination-specific work authorization options.",
      "Learn about relevant eligibility requirements.",
      "Prepare the documentation required for your application.",
      "Understand the application process and next steps.",
    ],
  },

  "visit-visa": {
    title: "Visit Visa",
    category: "TRAVEL & EXPLORATION",
    subtitle: "Make your international travel plans with confidence.",
    description:
      "Learn about visitor visa requirements, supporting documents, and application procedures for your intended destination.",
    image:
      "https://bizztor.com/_next/image/?url=https%3A%2F%2Fvssblfqnvdsiqmzslhnb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fmedia%2F2026%2F10%2Fuse-of-ai-in-visa-applications.webp&w=1920&q=75",
    benefits: [
      "Understand visitor visa requirements.",
      "Learn about supporting travel documents.",
      "Prepare for the application process.",
      "Explore requirements based on your destination.",
    ],
  },

  "business-visa": {
    title: "Business Visa",
    category: "GLOBAL BUSINESS",
    subtitle: "Explore opportunities beyond borders.",
    description:
      "Understand visa options for eligible business meetings, professional engagements, and international business activities.",
    image:
      "https://lexvisas.in/wp-content/uploads/2026/05/Wordpress-Blog-Images-37.png",
    benefits: [
      "Understand business visitor visa requirements.",
      "Learn about documents for professional visits.",
      "Review the purpose and conditions of your intended trip.",
      "Understand the application process for your destination.",
    ],
  },

  "student-visa": {
    title: "Student Visa",
    category: "INTERNATIONAL EDUCATION",
    subtitle: "Move closer to your international education goals.",
    description:
      "Explore student visa processes and understand the documents needed to pursue education abroad.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqKD8O5QsaDe25z7p_RV2PEJl5abUeKoyNe0A3e4xXtFzVRvin6pMZFc&s=10",
    benefits: [
      "Understand student visa eligibility requirements.",
      "Learn about admission and supporting documents.",
      "Review financial documentation requirements.",
      "Understand the application process for your destination.",
    ],
  },

  "permanent-residency": {
    title: "Permanent Residency",
    category: "LONG-TERM OPPORTUNITIES",
    subtitle: "Understand your potential long-term pathways.",
    description:
      "Learn about potential permanent residency pathways, eligibility criteria, and relevant application processes.",
    image:
      "https://global.upenn.edu/isss/wp-content/uploads/sites/2/2025/02/happy-travellers-young-arab-couple-with-passports-2023-11-27-04-50-21-utc-scaled.jpg",
    benefits: [
      "Explore potential residency pathways.",
      "Understand eligibility criteria.",
      "Learn about required supporting documentation.",
      "Review the relevant application process.",
    ],
  },
};

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <section className="service-not-found">
        <h1>Service Not Found</h1>
        <Link to="/#services">Back to Services</Link>
      </section>
    );
  }

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <img
          className="service-detail-background"
          src={service.image}
          alt={service.title}
        />

        <div className="service-detail-overlay" />

        <div className="service-detail-container">
          <Link to="/#services" className="service-back-link">
            <ArrowLeft size={17} />
            <span>Back to Services</span>
          </Link>

          <div className="service-detail-eyebrow">
            <Globe2 size={16} />
            {service.category}
          </div>

          <h1>{service.title}</h1>

          <p className="service-detail-subtitle">
            {service.subtitle}
          </p>

          <p className="service-detail-description">
            {service.description}
          </p>

          <Link
            to="/#contact"
            className="service-detail-cta"
          >
            Book a Consultation
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      <section className="service-detail-information">
        <div className="service-detail-container">
          <div className="service-information-heading">
            <span>HOW WE CAN HELP</span>
            <h2>
              A clearer path to
              <br />
              <span>your next step.</span>
            </h2>
            <p>
              Understand the process, prepare your documents, and
              explore the relevant requirements for your plans.
            </p>
          </div>

          <div className="service-benefits-grid">
            {service.benefits.map((benefit, index) => (
              <article
                className="service-benefit-card"
                key={benefit}
              >
                <span className="service-benefit-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <CheckCircle2 size={23} />

                <p>{benefit}</p>
              </article>
            ))}
          </div>

          <div className="service-detail-bottom-cta">
            <div>
              <span>YOUR JOURNEY STARTS HERE</span>
              <h2>Let's discuss your plans.</h2>
              <p>
                Contact our team to discuss your intended destination
                and the guidance you may need.
              </p>
            </div>

            <Link to="/#contact">
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;