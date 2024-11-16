import React from 'react';
import Heading from './Heading';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-heading">
        <Heading title="My Skills" />
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="technology-heading text-4xl md:text-5xl">Technology I work with</h2>
          <br />
          <p className="skills-description">
            Maryam&apos;s skill set includes a solid foundation in HTML5, CSS,
            and Tailwind CSS for web development, along with a proficient
            understanding of TypeScript and JavaScript to build dynamic,
            interactive websites and applications. She is also knowledgeable
            in digital marketing, which enhances her ability to create user-focused,
            marketable products. With a strong background in artificial intelligence
            and information technology, Maryam brings a unique combination of
            technical expertise and strategic insight to her projects, making
            her well-equipped to tackle various challenges in modern tech and
            digital spaces.
          </p>
        </div>
        <div>
          <div className="skills-grid">
            <div className="skills-group">
              <h2>CSS</h2>
              <h2>React</h2>
              <h2>HTML 5</h2>
            </div>
            <div className="skills-group">
              <h2>Next-JS</h2>
              <h2>Digital Marketing</h2>
            </div>
            <div className="skills-group">
              <h2>Typescript</h2>
              <h2>Javascript</h2>
              <h2>Tailwind CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
