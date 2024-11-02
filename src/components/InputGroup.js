// src/components/InputGroup.js

import React from 'react';
import './InputGroup.css';

export default function InputGroup({ label, id, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
}
