import "./App.css";
import {useState} from "react"
import History from "./Components/History.js";
import Math from "./Components/Math.js";
import Science from "./Components/Science.js";
import Footer from "./Components/Footer.js";
import React from "react";

function App() {
  //setting quiz subjects
  const [history, setHistory] = useState(true);
  const [math, setMath] = useState(false);
  const [science, setScience] = useState(false);

    //function shows the history component and disbales the other subject components
    function showHistory() {
        setHistory(true);
        setMath(false);
        setScience(false);
    }
    //function shows the math component and disbales the other subject components
    function showMath() {
        setHistory(false);
        setMath(true);
        setScience(false);
    }
  //function shows the science component and disbales the other subject components
    function showScience() {
        setHistory(false);
        setMath(false);
        setScience(true);
    }
  

  
  return (
    <div className="App">
      {/* is history set to true? if so display the history component */}
      {history ? <History /> : null }
      {math ? <Math /> : null }
      {science ? <Science /> : null }
      {/* bottom navigation component */}
      {<Footer showHistory={showHistory} showMath={showMath} showScience={showScience} />}
    </div>
  );
}

export default App;
