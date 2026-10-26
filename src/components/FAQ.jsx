
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import "./FAQ.css";

const questions = [
  {
    question: "What services does SKY SCRAPER IMMIGRATION offer?",
    answer:
      "We provide guidance related to work permits, visitor visas, business visas, student visas, and permanent residency pathways. The services available depend on your destination and circumstances.",
  },
  {
    question: "How do I know which visa is suitable for me?",
    answer:
      "The appropriate visa depends on your purpose of travel, destination, eligibility, and individual circumstances. Contact us to discuss your plans and understand the relevant options.",
  },
  {
    question: "Which documents will I need?",
    answer:
      "Document requirements vary by country and visa category. Common requirements may include a valid passport, application forms, photographs, financial evidence, and supporting documents relevant to your application.",
  },
  {
    question: "How long does a visa application take?",
    answer:
      "Processing times vary according to the country, visa category, application details, and the relevant immigration authority. Always check the latest official processing information for your application.",
  },
  {
    question: "Can you guarantee visa approval?",
    answer:
      "No. Visa decisions are made by the relevant immigration authorities. We can help you understand requirements and prepare your application, but approval cannot be guaranteed.",
  },
  {
    question: "How can I start a consultation?",
    answer:
      "Use the consultation form below to share your contact details, intended destination, and the type of guidance you need. Our team can then follow up about the next steps.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="section-label">NEED CLARITY?</span>

          <h2>
            Questions Today.
            <span> Confidence Tomorrow.</span>
          </h2>

          <p>
            Find answers to common questions about visa guidance and the
            next steps in your international journey.
          </p>

          <a href="#contact" className="faq-contact-link">
            Ask us a question <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <article
              className={`faq-item ${openIndex === index ? "faq-open" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                className="faq-question"
                aria-expanded={openIndex === index}
                onClick={() =>
                  setOpenIndex((previous) =>
                    previous === index ? -1 : index
                  )
                }
              >
                <span>{item.question}</span>
                <ChevronDown size={21} />
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;