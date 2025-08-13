const Metrics = () => {
  return (
    <section className="metrics-section">
      <div className="container metrics-section_grid">
        <div className="metrics-section_intro">
          <p>We speak with our powerful statistics</p>
        </div>
        <div className="metrics-section_item">
          <span className="metrics_number">1M+</span>
          <span className="metrics_label"><span className="icon icon-user"></span>Active Users</span>
        </div>
        <div className="metrics-section_item">
          <span className="metrics_number">30K+</span>
          <span className="metrics_label"><span className="icon icon-star"></span>5-Stars Reviews</span>
        </div>
        <div className="metrics-section_item">
          <span className="metrics_number">$252M</span>
          <span className="metrics_label"><span className="icon icon-transaction"></span>Transactions</span>
        </div>
      </div>
    </section>
  );
};

export default Metrics;