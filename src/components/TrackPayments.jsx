import paymentUiImage from '../assets/payment-tracking-ui.png';

const TrackPayments = () => {
  return (
    <section className="track-payments two-column-layout container">
      <div className="two-column_image">
        <img src={paymentUiImage} alt="Payment notifications on a phone UI" />
      </div>
      <div className="two-column_content">
        <div className="sticker">WHY CHOOSE US</div>
        <h2 className="section_title">Track your payments on the go with the best way possible</h2>
        <p className="section_subtitle">Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <ul className="checkmark-list">
          <li>Get Overview at a glance</li>
          <li>Deposit funds easily, securely</li>
          <li>Get Live Support</li>
        </ul>
      </div>
    </section>
  );
};

export default TrackPayments;