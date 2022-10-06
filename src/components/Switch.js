import React from 'react'
import "./Switch.css"

const Switch = ({ isToggled, onToggle }) => {
  return (
    <label className="Switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider">
        GRATIS      </span>
    </label>
  )
}

export default Switch