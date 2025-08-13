// Import all your client logos here
import logoOpenZeppelin from '../assets/zepplin-logo.png';
import logoOracle from '../assets/oracle-logo.png';
import logoMorpheus from '../assets/morpheus-logo.png';
import logoSamsung from '../assets/samsung-logo.png';
import logoMonday from '../assets/monday-logo.png';
import logoSegment from '../assets/segment-logo.jpeg';
import logoProtonet from '../assets/protonet-logo.png';

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