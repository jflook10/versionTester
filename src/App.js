import React from 'react';
import './App.css';
import FormPanel from "./components/FormPanel"
import InfoPanel from "./components/InfoPanel";

function App() {
  return (
    <div className="App">
        <div className="panels">
            <InfoPanel/>
            <FormPanel/>
        </div>
    </div>
  );
}

export default App;
