import React from 'react';
import './Card.css'; // CSS 파일 import

// 기본 Card 컴포넌트
export function Card({ children, className = '', ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}

// CardHeader 컴포넌트
export function CardHeader({ children, className = '' }) {
  return <div className={`card-header ${className}`}>{children}</div>;
}

// CardTitle 컴포넌트
export function CardTitle({ children, className = '' }) {
  return <h2 className={`card-title ${className}`}>{children}</h2>;
}

// CardContent 컴포넌트
export function CardContent({ children, className = '' }) {
  return <div className={`card-content ${className}`}>{children}</div>;
}

// CardFooter 컴포넌트
export function CardFooter({ children, className = '' }) {
  return <div className={`card-footer ${className}`}>{children}</div>;
}
