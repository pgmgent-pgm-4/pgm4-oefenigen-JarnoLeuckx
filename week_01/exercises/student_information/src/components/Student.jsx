import React from 'react';
import Course from './Course';

const Student = ({ lastName, firstName, genderCode, birthDate, courses }) => {
  return (
    <div className="student">
      <h2>{firstName} {lastName}</h2>
      <p>Geslacht: {genderCode === 1 ? 'Man' : 'Vrouw'}</p>
      <p>Geboortedatum: {new Date(birthDate).toLocaleDateString()}</p>
      <p>Cursussen:</p>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <Course name={course.name} instructors={course.instructors} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;

