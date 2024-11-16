import React from 'react';
import '../styles/Heading.css'; 

interface propsType {
  title: string;
  className?: string; 
}

const Heading: React.FC<propsType> = ({ title, className }) => {
  return (
    <div className={`heading-container ${className}`}>
      <p className="heading-title">{title}</p>
    </div>
  );
}

export default Heading;
