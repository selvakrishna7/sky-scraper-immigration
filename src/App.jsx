import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";

import { useEffect } from "react";

import "./App.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToSection = () => {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      requestAnimationFrame(scrollToSection);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}

function MainWebsite() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Destinations />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainWebsite />} />

        <Route
          path="/services/:serviceId"
          element={
            <>
              <Navbar />
              <ServiceDetail />
              <Footer />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Navbar />
              <main className="not-found-page">
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/">Back to Home</a>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;