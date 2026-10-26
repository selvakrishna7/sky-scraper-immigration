
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const services = [
    { label: "Work Permit", id: "work-permit" },
    { label: "Visit Visa", id: "visit-visa" },
    { label: "Business Visa", id: "business-visa" },
    { label: "Student Visa", id: "student-visa" },
    { label: "Permanent Residency", id: "permanent-residency" },
  ];

  return (
    <header className="site-header">
      <div className="navbar-container">
      <a href="#home" className="brand-logo" onClick={closeMenu}>
                <img
                    src="https://res.cloudinary.com/jxdw7zfo/image/upload/v1792920760/WhatsApp_Image_2026-10-25_at_2.45.05_PM.jpg"
                    alt="Sky Scraper Immigration Logo"
                    className="brand-image"
                />

                <span className="brand-copy">
                    <strong>SKY SCRAPER</strong>
                    <small>IMMIGRATION</small>
                </span>
                </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" className="nav-link" onClick={closeMenu}>
            About Us
          </a>

          <div
            className={`nav-dropdown ${dropdownOpen ? "dropdown-open" : ""}`}
          >
            <button
              type="button"
              className="services-toggle"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((previous) => !previous)}
            >
              Our Services
              <span className="dropdown-arrow">⌄</span>
            </button>

            <div className="dropdown-menu">
              {services.map((service) => (
                <a
                  href={`#${service.id}`}
                  key={service.id}
                  onClick={closeMenu}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#destinations"
            className="nav-link"
            onClick={closeMenu}
          >
            Destinations
          </a>

          <a href="#faq" className="nav-link" onClick={closeMenu}>
            FAQs
          </a>

          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Get Consultation
            <ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;