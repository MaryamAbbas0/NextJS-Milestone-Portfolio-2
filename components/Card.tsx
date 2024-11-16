import React from 'react';
import Image from 'next/image';
import '../styles/Card.css'; 

interface proposType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<proposType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card-container">
      <div>
        <Image
          className="card-image"
          src={img}
          width={400}
          height={250}
          alt={title}
        />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-desc">{desc}</div>
        <div className="card-tags">
          {tags.map((el) => (
            <div className="card-tag" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
