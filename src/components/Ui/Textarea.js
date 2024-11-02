import React from 'react';
import './Textarea.css';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`textarea ${className}`} // 'textarea' 클래스를 추가
      {...props}
    ></textarea>
  );
}
