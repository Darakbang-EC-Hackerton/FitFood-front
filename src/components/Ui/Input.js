// src/components/ui/input.js
import React from 'react';
import './Input.css'; // CSS 파일 import

export function Input({ className, ...props }) {
  return (
    <input
      type="text"
      className={`input ${className}`} // 'input' 클래스를 추가
      {...props}
    />
  );
}
