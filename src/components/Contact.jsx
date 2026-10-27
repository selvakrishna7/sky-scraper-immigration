
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ========================================
// EMAILJS CONFIGURATION
// ========================================
const EMAILJS_SERVICE_ID = "service_1kcjfgc";
const EMAILJS_TEMPLATE_ID = "template_07und24";
const EMAILJS_PUBLIC_KEY = "jKB6LgBANt8v7BzFr";

// ========================================
// BUSINESS CONTACT INFORMATION
// ========================================
const BUSINESS_EMAIL = "skyscraperimmigration.ind@gmail.com";

const PRIMARY_PHONE = "+90252 82729";
const SECONDARY_PHONE = "+919361100852"; // Replace with your actual number

const WHATSAPP_URL =
  "https://wa.me/919025282729?text=Hello%20Sky%20Scraper%20Immigration!%20I%20would%20like%20to%20know%20more%20about%20your%20visa%20services.";

const INSTAGRAM_URL =
  "https://www.instagram.com/sky.scraper_immigrations?dlrf=dWxveDdtcHdwMjBk";

// ========================================
// CONTACT COMPONENT
// ========================================
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    destination: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Submit consultation enquiry
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (!EMAILJS_PUBLIC_KEY.trim()) {
      setStatusType("error");
      setStatusMessage(
        "Email service is not configured yet. Please try again later."
      );
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          destination: formData.destination || "Not specified",
          message: formData.message.trim() || "No additional message",
          to_email: BUSINESS_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatusType("success");
      setStatusMessage(
        "Thank you! Your enquiry has been sent successfully. We will contact you soon."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission error:", error);

      setStatusType("error");
      setStatusMessage(
        "Sorry, we could not send your enquiry. Please check your details and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE - CONTACT INFORMATION */}
        <div className="contact-content">
          <span className="contact-eyebrow">
            LET'S PLAN YOUR JOURNEY
          </span>

          <h2 className="contact-title">
            Your Next Chapter
            <br />
            <span>Starts Here.</span>
          </h2>

          <p className="contact-description">
            Have questions about your immigration journey? Tell us
            about your plans. Our team will help you explore the next
            steps toward your international future.
          </p>

          <div className="contact-details">

            {/* EMAIL */}
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="contact-detail"
            >
              <span className="contact-icon">
                <Mail size={20} />
              </span>

              <span className="contact-detail-text">
                <small>Email Us</small>
                <strong>{BUSINESS_EMAIL}</strong>
              </span>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={18}
              />
            </a>

            {/* PRIMARY AND SECONDARY PHONE - SAME LINE */}
            <div className="contact-phone-row">

              {/* PRIMARY PHONE */}
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="contact-detail contact-phone-item"
              >
                <span className="contact-icon">
                  <Phone size={20} />
                </span>

                <span className="contact-detail-text">
                  <small>Primary Contact</small>
                  <strong>+91 93611 00852</strong>
                </span>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={18}
                />
              </a>

              {/* SECONDARY PHONE */}
              <a
                href={`tel:${SECONDARY_PHONE}`}
                className="contact-detail contact-phone-item"
              >
                <span className="contact-icon">
                  <Phone size={20} />
                </span>

                <span className="contact-detail-text">
                  <small>Secondary Contact</small>
                  <strong>{SECONDARY_PHONE}</strong>
                </span>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={18}
                />
              </a>

            </div>

            {/* WHATSAPP */}
            <a
              href={WHATSAPP_URL}
              className="contact-detail contact-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <FaWhatsapp size={22} />
              </span>

              <span className="contact-detail-text">
                <small>WhatsApp Us</small>
                <strong>Chat with our team</strong>
              </span>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={18}
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href={INSTAGRAM_URL}
              className="contact-detail contact-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <FaInstagram size={22} />
              </span>

              <span className="contact-detail-text">
                <small>Follow Us</small>
                <strong>Instagram</strong>
              </span>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={18}
              />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - CONSULTATION FORM */}
        <div className="contact-form-wrapper">

          <div className="contact-form-heading">
            <h3>Book a Consultation</h3>

            <p>
              Fill in your details and let us help you get started.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            {/* NAME AND EMAIL */}
            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="contact-name">
                  Full Name *
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email Address *
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>

            </div>

            {/* PHONE AND VISA SERVICE */}
            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="contact-phone">
                  Phone Number *
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  maxLength={20}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-service">
                  Visa Service *
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Work Permit">Work Permit</option>
                  <option value="Visit Visa">Visit Visa</option>
                  <option value="Business Visa">Business Visa</option>
                  <option value="Student Visa">Student Visa</option>
                  <option value="Permanent Residency">
                    Permanent Residency
                  </option>
                </select>
              </div>

            </div>

            {/* DESTINATION */}
            <div className="contact-field">
              <label htmlFor="contact-destination">
                Preferred Destination
              </label>

              <select
                id="contact-destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">Choose your destination</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Norway">Norway</option>
                <option value="Ireland">Ireland</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Austria">Austria</option>
                <option value="Belgium">Belgium</option>
                <option value="Denmark">Denmark</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Iceland">Iceland</option>
                <option value="Italy">Italy</option>
                <option value="Malta">Malta</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Switzerland">Switzerland</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="contact-field">
              <label htmlFor="contact-message">
                Tell Us About Your Plans
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Share your questions or immigration plans..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
              />
            </div>

            {/* STATUS MESSAGE */}
            {statusMessage && (
              <div
                className={`contact-status contact-status-${statusType}`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="contact-submit-btn"
              disabled={isSubmitting}
            >
              <span>
                {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
              </span>

              <Send size={18} />
            </button>

            <p className="contact-privacy-note">
              By submitting this form, you agree to be contacted
              regarding your enquiry.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}