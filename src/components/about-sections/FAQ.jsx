import Accordion from "../Accordion.jsx";
import { faqs } from "../../assets/data.js";

export default function FAQ() {
  return (
    <section className="faq-section" data-aos="fade-up">
      <h2>FAQs</h2>
      {faqs.map((faq, idx) => (
        <Accordion key={idx} title={faq.question} content={faq.answer} />
      ))}
    </section>
  );
}
