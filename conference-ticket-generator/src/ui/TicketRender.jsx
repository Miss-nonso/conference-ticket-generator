import { useRef, useState } from "react";
import { getFromStorage } from "../utils/storage";

import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";
import Ticket from "./Ticket";

const TicketRender = () => {
  const [ticketSelection, setTicketSelection] = useState({
    type: "",
    amount: 0
  });

  const ticketRef = useRef();

  const savedData = getFromStorage("ticketData");

  const [moveToStep, setMoveToStep] = useState(1);
  console.log({ moveToStep });
  return (
    <div className="render-container">
      {moveToStep === 1 && (
        <TicketSelection
          ticketSelection={ticketSelection}
          setTicketSelection={setTicketSelection}
          setMoveToStep={setMoveToStep}
        />
      )}

      {moveToStep === 2 && (
        <AttendeeDetails
          setMoveToStep={setMoveToStep}
          moveToStep={moveToStep}
        />
      )}

      {moveToStep === 3 && (
        <Ticket
          data={savedData}
          setMoveToStep={setMoveToStep}
          ticketRef={ticketRef}
        />
      )}
    </div>
  );
};

export default TicketRender;
