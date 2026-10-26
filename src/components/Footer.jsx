
import { ArrowUpRight, Globe2 } from "lucide-react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">
                <Globe2 size={26} />
              </span>

              <span>
                <strong>SKY SCRAPER</strong>
                <small>IMMIGRATION</small>
              </span>
            </a>

            <p>
              Helping you explore international opportunities through
              personalized visa and immigration guidance.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#destinations">Destinations</a>
          </div>

          <div className="footer-column">
            <h4>Our Services</h4>
            <a href="#work-permit">Work Permit</a>
            <a href="#visit-visa">Visit Visa</a>
            <a href="#business-visa">Business Visa</a>
            <a href="#student-visa">Student Visa</a>
            <a href="#permanent-residency">Permanent Residency</a>
          </div>

          <div className="footer-column">
            <h4>Get Started</h4>
            <p>Have questions about your international plans?</p>

            <a href="#contact" className="footer-contact-link">
              Request Consultation <ArrowUpRight size={17} />
            </a>

            <a href="#faq">Frequently Asked Questions</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} SKY SCRAPER IMMIGRATION. All rights reserved.
          </p>

          <a href="#home">Back to top ↑</a>
        </div>

        <p className="footer-disclaimer">
          Immigration information and guidance are subject to applicable
          laws and government requirements. Visa decisions are made by the
          relevant authorities. No approval or immigration outcome is
          guaranteed.
        </p>
      </div>
    </footer>
  );
}

export default Footer;