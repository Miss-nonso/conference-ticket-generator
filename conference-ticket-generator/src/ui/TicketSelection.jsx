// import { useEffect, useState } from "react";

import numbers from "../assets/options";
import Button from "../components/Button";
import Heading from "../components/Heading";
import ProgressBar from "../components/ProgressBar";
import { saveToStorage } from "../utils/storage";
import { ToastContainer, toast } from "react-toastify";

const ticketTypes = [
  { type: "REGULAR ACCESS", noOfTicketsLeft: 20, price: "Free" },
  { type: "VIP ACCESS", noOfTicketsLeft: 20, price: "$50" },
  { type: "VVIP ACCESS", noOfTicketsLeft: 20, price: "$150" }
];

/* eslint-disable react/prop-types */
const TicketSelection = ({
  ticketSelection,
  setTicketSelection,
  setMoveToStep
}) => {
  const storeTicketSelection = () => {
    if (!ticketSelection.type) {
      toast.warning("Select ticket type ");
    }

    if (!ticketSelection.amount) {
      toast.warning("Select number of tickets");
    }
    if (ticketSelection.type && ticketSelection.amount) {
      saveToStorage("ticketData", ticketSelection);
      setMoveToStep(2);
    }
  };

  return (
    <div className="main-content">
      <ToastContainer />
      <Heading text="Ticket Selection" stepNum={1} />
      <ProgressBar step={1} />
      <div className="selection-wrapper">
        <div className="selection-content">
          <div className="fest-details-wrapper">
            <h1>Techember Fest ”25</h1>
            <p className="fest-desc">
              Join us for an unforgettable experience at <br /> [Event Name]!
              Secure your spot now.
            </p>

            <div className="event-location-wrapper">
              <span className="event-location">📍[Event Location]</span>
              <span className="strokes">| |</span>
              <span className="event-date">March 15, 2025 | 7:00 PM</span>
            </div>
          </div>

          <hr />

          <div className="tickets-wrapper">
            <p>Select Ticket Type:</p>

            <div className="tickets-list">
              {ticketTypes.map(({ type, noOfTicketsLeft, price }) => (
                <button
                  key={type}
                  className="ticket-item"
                  onClick={() =>
                    setTicketSelection({ ...ticketSelection, type })
                  }
                >
                  <h6 className="ticket-price">{price}</h6>
                  <p>{type}</p>
                  <small>{noOfTicketsLeft}/52</small>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p>Number of Tickets</p>

            <select
              name="number-of-tickets"
              id="number-of-tickets"
              className="number-of-tickets"
              value={ticketSelection.amount}
              onChange={(e) => {
                setTicketSelection({
                  ...ticketSelection,
                  amount: e.target.value
                });
              }}
            >
              <option value="" style={{ color: "lightgrey" }}>
                Select number of tickets
              </option>
              {numbers.map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="btns">
            <Button btnText="Cancel" type="transparent" />

            <Button btnText="Next" action={storeTicketSelection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
