import React, { useState } from 'react';
import './App.css';
import Switch from "./components/Switch"

function App() {
  const [isToggled, setIsToggled] = useState(true)
  return (
    <div className="App">
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
    </div>
  );
}

export default App;
