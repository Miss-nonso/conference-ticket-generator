const TicketDetails = ({ data }) => {
  return (
    <div className="ticket-details-wrapper">
      <h1>Techember Fest ”25</h1>
      <div className="event-location-wrapper">
        <span className="event-location">04 Rumens road, Ikoyi, Lagos</span>{" "}
        <br />
        {/* <span className="strokes">| |</span> <br /> */}
        <span className="event-date">March 15, 2025 | 7:00 PM</span>
      </div>

      <div className="ticket-img-wrapper">
        {" "}
        <img src={data.img} alt="Ticket user" />
      </div>

      <div className="ticket-details-container">
        <div className="ticket-details-part">
          <div className="ticket-detail-item">
            <p>Enter your name</p>
            <h6>{data.fullName}</h6>
          </div>
          <div className="ticket-detail-item">
            <p>Enter your email *</p>
            <h6>{data.email}</h6>
          </div>
        </div>
        <div className="ticket-details-part">
          <div className="ticket-detail-item">
            <p>Ticket Type:</p>
            <h6>{data.type.split(" ")[0]}</h6>
          </div>
          <div className="ticket-detail-item">
            <p>Ticket for:</p>
            <h6>{data.amount}</h6>
          </div>
        </div>

        <div className="ticket-details-part">
          <p>Special request?</p>
          <h6>{data.specialRequest}</h6>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
