// Import your social icons
import linkedinIcon from '../assets/linkedin-logo.png';
import messengerIcon from '../assets/messenger-logo.jpeg';
import twitterIcon from '../assets/twitter-logo.png';
import infinityIcon from '../assets/infinity-logo.png';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer_grid">
                    <div className="footer_col">
                        <h3 className="footer_heading">AR Shakir</h3>
                        <p>Finance helps companies manage payments easily.</p>
                        <div className="footer_socials">
                            <a href="#" aria-label="LinkedIn"><img src={linkedinIcon} alt="LinkedIn"/></a>
                            <a href="#" aria-label="Messenger"><img src={messengerIcon} alt="Messenger"/></a>
                            <a href="#" aria-label="Twitter"><img src={twitterIcon} alt="Twitter"/></a>
                            <a href="#" aria-label="Infinity"><img src={infinityIcon} alt="Infinity"/></a>
                        </div>
                    </div>
                    <div className="footer_col">
                        <h3 className="footer_heading">Company</h3>
                        <ul className="footer_links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="footer_col">
                        <h3 className="footer_heading">Resources</h3>
                        <ul className="footer_links">
                            <li><a href="#">Proposal Template</a></li>
                            <li><a href="#">Invoice Template</a></li>
                            <li><a href="#">Tutorial</a></li>
                            <li><a href="#">How to write a contract</a></li>
                        </ul>
                    </div>
                    <div className="footer_col">
                        <h3 className="footer_heading">Join Our Newsletter</h3>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email address" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                        <p className="newsletter-form_note">* Will send you weekly updates for your better finance management.</p>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;