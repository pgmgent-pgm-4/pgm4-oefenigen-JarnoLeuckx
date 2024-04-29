import React from 'react';

const Course = ({ name, instructors }) => {
  return (
    <div className="course">
      <h3>{name}</h3>
      <p>Docenten:</p>
      <ul>
        {instructors.map((instructor, index) => (
          <li key={index}>{instructor}</li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
