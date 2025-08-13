import balanceChartImage from '../assets/balance-chart.png';

const SaveMoney = () => {
  return (
    <section className="save-money two-column-layout container">
      <div className="two-column_content">
        <div className="sticker">WHY CHOOSE US</div>
        <h2 className="section_title">Save money with proper transaction</h2>
        <p className="section_subtitle">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
        <div className="testimonial-box">
          <blockquote>"Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows."</blockquote>
          <cite>- Mike Taylor, Web Designer</cite>
        </div>
      </div>
      <div className="two-column_image">
        <img src={balanceChartImage} alt="A chart showing total balance increasing" />
      </div>
    </section>
  );
};

export default SaveMoney;