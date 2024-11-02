// src/components/Button.js
import React from 'react';
import './Button.css';

function Button({ text, onClick, className = '' }) {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {text}
    </button>
  );
}

export default Button;
