import { useState } from 'react';

const faqData = [
  {
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her."
  },
  {
    question: "Six curiosity day assurance bed necessary?",
    answer: "Answer text for the second question goes here."
  },
  {
    question: "Produce say the ten moments parties?",
    answer: "Answer text for the third question goes here."
  }
];

const FAQ = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <section className="faq-section container">
      <div className="faq-section_grid">
        <div className="faq-section_main">
          <h2 className="section_title">Frequently asked questions</h2>
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openItemIndex === index ? 'is-open' : ''}`}
              >
                <button className="faq-item_question" onClick={() => handleToggle(index)}>
                  {item.question}
                  <span className="faq-item_icon"></span>
                </button>
                <div 
                  className="faq-item_answer"
                  style={{ maxHeight: openItemIndex === index ? '200px' : '0px' }} // Simple height toggle
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-section_prompt-card">
            <div className="prompt-card_icon"></div>
            <h4 className="prompt-card_title">Do you have more questions?</h4>
            <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
            <a href="#" className="btn btn-orange">Shoot a Direct Mail</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;