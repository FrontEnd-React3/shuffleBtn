import React, { useState } from 'react';
import './App.css';
import Switch from "./components/Switch"

function App() {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="App">
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <div className="Fft__titleright">hallo</div>

    </div>
  );
}
export default App;
