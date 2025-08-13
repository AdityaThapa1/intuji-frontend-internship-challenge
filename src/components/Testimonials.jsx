import wavyDoodle from '../assets/wavvy-doodle.png';
import testimonialFemale from '../assets/testimonial-1.png';
import testimonialMale from '../assets/testimonial-2.png';

const Testimonials = () => {
  return (
    <section className="testimonials-section container">
      <div className="testimonials-section_header">
        <div className="testimonials-section_header-text">
          <h2 className="section_title">Testimonials</h2>
          <p className="section_subtitle">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
        </div>
        <div className="testimonials-section_header-doodle">
          <img src={wavyDoodle} alt="Decorative doodle" />
        </div>
      </div>
      <div className="testimonials-section_grid">
        <div className="testimonial-card">
          <div className="testimonial-card_content">
            <blockquote>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows. Blessing welcomed ladyship.</blockquote>
            <cite>- Mike Taylor, Web Designer</cite>
          </div>
          <div className="testimonial-card_image">
            <img src={testimonialFemale} alt="Happy customer" />
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card_content">
            <blockquote>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows. Blessing welcomed ladyship.</blockquote>
            <cite>- Mike Taylor, Web Designer</cite>
          </div>
          <div className="testimonial-card_image">
            <img src={testimonialMale} alt="Another happy customer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;