import React from "react";
import Data from "./Data";

function Results({ flights }) {
  console.log("flights", flights);

  const resultsData = flights.map(flight => {
    return (
      <li key={flight.id}>
        Departure Time: {flight.dTime}
        Arrival Time: {flight.aTime}
        Departure City: {flight.cityFrom}
        Arrival City: {flight.cityTo}
        Price: {flight.price}
      </li>
    );
  });

  return <div style={{ border: "1px solid #333" }}>{resultsData}</div>;
}

export default Results;
