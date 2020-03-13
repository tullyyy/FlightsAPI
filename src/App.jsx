import React, { useEffect, useState } from "react";
import "./App.css";

import Results from "./components/Results";
import searchFlights from "./searchFlights";

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlights();
  }, []);

  const getFlights = async () => {
    const flightData = await searchFlights();
    // this updates the state/information each time the getFlights is called
    setFlights(flightData);
  };

  return (
    <div className="App" style={{ border: "2px solid #344" }}>
      <Results flights={flights} />
    </div>
  );
}

export default App;
