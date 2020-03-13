import React, { useEffect } from 'react';
import './App.css';

import Results from "./components/Results"
import searchFlights from "./searchFlights"

function App() {
  useEffect(() => {
    searchFlights()
  }, []) 
    return (
      <div className="App" style={{border: "2px solid #344" }} > 
        {/* <Results /> */}
        Start Here

      </div>
    );
  }

export default App;
