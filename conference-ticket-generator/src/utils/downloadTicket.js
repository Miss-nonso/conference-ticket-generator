import html2canvas from "html2canvas";

export const handleDownload = async (ticketRef) => {
  // e.preventDefault();

  if (!ticketRef.current) return;

  // Capture the ticket div as an image
  const canvas = await html2canvas(ticketRef.current, { useCORS: true });
  const image = canvas.toDataURL("image/png"); // Convert to PNG

  // Create a link element for downloading
  const link = document.createElement("a");
  link.href = image;
  link.download = `${"HNG_CONFERENCE".replace(/\s+/g, "_")}_TICKET.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
