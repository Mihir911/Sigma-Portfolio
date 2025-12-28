import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'How do I get started with Sigma Code?',
    answer: 'You can reach us directly via Instagram, phone, or email. Once you connect, we’ll discuss your project, share an estimate, and get started after a quick confirmation.',
  },
  {
    question: 'What\'s the typical timeline for projects?',
    answer: 'Timelines depend on scope. Small projects can take a few days, while larger ones may need several weeks. Once we know your needs, we’ll share a clear timeline and stick to it.',
  },
  {
    question: 'How is pricing determined for projects?',
    answer: 'Pricing depends on your requirements. After reviewing your project, we’ll share a transparent quote with no hidden costs. Everything is discussed upfront.',
  },
  {
    question: 'Can you improve my existing website or application?',
    answer: 'Yes. We can redesign, fix, or enhance your current product. From fresh visuals to performance upgrades, we make sure your site or app works and looks better.',
  },
  {
    question: 'What if I need changes after project completion?',
    answer: 'We offer support even after completion. Small tweaks are often free, while major updates or new features may cost extra. We always share details first so there are no surprises.',
  },
];

const FAQItem = ({ faq, index, toggleFAQ, active }) => {
  return (
    <div className={`faq-item ${active ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
      <div className="faq-question">
        <span>{faq.question}</span>
        <div className="faq-icon">+</div>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked<br />Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            toggleFAQ={toggleFAQ}
            active={activeIndex === index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
