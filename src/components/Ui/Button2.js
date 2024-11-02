import React from 'react';
import './Button.css'; // CSS 파일 import

function Button({ children, onClick, variant = 'outline', className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`button ${variant && `button-${variant}`} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
