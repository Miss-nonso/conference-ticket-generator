import Barcode from "../components/Barcode";
import Heading from "../components/Heading";
import ProgressBar from "../components/ProgressBar";
import TicketDetails from "../components/TicketDetails";
import Button from "../components/Button";
import { handleDownload } from "../utils/downloadTicket";

// eslint-disable-next-line react/prop-types
const Ticket = ({ data, setMoveToStep, ticketRef }) => {
  return (
    <div className="ticket-body">
      {" "}
      <div className="ticket">
        <Heading text="Ready" stepNum={3} />
        <ProgressBar step={3} />
        <h5>Your Ticket is Booked</h5>
        <p>You can download or Check your email for a copy</p>

        <div className="ticket-container">
          <div className="ticket-main-content-wrapper" ref={ticketRef}>
            <TicketDetails data={data} />
            <Barcode />
          </div>
        </div>
      </div>
      <div className="btns">
        <Button
          btnText="Book Another Ticket"
          type="transparent"
          action={() => {
            setMoveToStep(1);
          }}
        />

        <Button
          btnText="Download Ticket"
          action={() => handleDownload(ticketRef)}
        />
      </div>
    </div>
  );
};

export default Ticket;
