// Import all your client logos here
import logoOpenZeppelin from '../assets/zepplin-logo.png';
import logoOracle from '../assets/logo-oracle.svg';
import logoMorpheus from '../assets/logo-morpheus.svg';
import logoSamsung from '../assets/logo-samsung.svg';
import logoMonday from '../assets/logo-monday.svg';
import logoSegment from '../assets/logo-segment.svg';
import logoProtonet from '../assets/logo-protonet.svg';

const Clients = () => {
  return (
    <section className="clients container">
      <p>Over 32k+ software businesses growing with AR Shakir.</p>
      <div className="clients_logos">
        <img src={logoOpenZeppelin} alt="OpenZeppelin" />
        <img src={logoOracle} alt="Oracle" />
        <img src={logoMorpheus} alt="Morpheus" />
        <img src={logoSamsung} alt="Samsung" />
        <img src={logoMonday} alt="monday.com" />
        <img src={logoSegment} alt="Segment" />
        <img src={logoProtonet} alt="Protonet" />
      </div>
    </section>
  );
};

export default Clients;