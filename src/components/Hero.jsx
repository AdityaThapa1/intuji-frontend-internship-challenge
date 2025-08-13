import heroImage from '../assets/image-686.png';
import checkmarkIcon from '../assets/checkmark-circle.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero_layout-container">
        <div className="hero_content">
          <h1 className="hero_title">Managing freelance payments has never been easier</h1>
          <p className="hero_subtitle">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
          <div className="hero_buttons">
            <a href="#" className="btn btn-primary">Get Started</a>
            <a href="#" className="btn btn-play">
              <span className="play-icon"></span>See How It Works
            </a>
          </div>
          <div className="hero_footer">
            <span><img src={checkmarkIcon} alt="Checkmark"/>Free Register</span>
            <span><img src={checkmarkIcon} alt="Checkmark"/>Great Service</span>
          </div>
        </div>
        <div className="hero_image-wrapper">
          <img src={heroImage} alt="Hands holding premium credit cards" />
        </div>
      </div>
    </section>
  );
};

export default Hero;