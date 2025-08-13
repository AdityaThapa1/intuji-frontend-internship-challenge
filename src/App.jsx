import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import PortfolioTracking from './components/PortfolioTracking';
import HowItWorks from './components/HowItWorks';
import TrackPayments from './components/TrackPayments';
import SaveMoney from './components/SaveMoney';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Metrics from './components/Metrics';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <PortfolioTracking />
        <HowItWorks />
        <TrackPayments />
        <SaveMoney />
        <Features />
        <Testimonials />
        <Metrics />
        <Blog />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default App;