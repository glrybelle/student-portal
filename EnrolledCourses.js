import React from 'react';

function EnrolledCourses() {
  const courses = [
    {subject: 'Information Management', code: 'IT221', instructor: 'Instructor 1' },
    {subject: 'Networking 1', code: 'IT222', instructor: 'Instructor 2' },
    {subject: 'Web System and Technologies', code: 'IT223', instructor: 'Instructor 3'},
    {subject: 'System and Architecture', code: 'IT224', instructor: 'Instructor 4'},
    {subject: 'Ethics', code: 'Ethcs', instructor: 'Instructor 5'},
    {subject: 'Life and Works of Rizal', code: 'Rizal', instructor: 'Instructor 6'},
    {subject: 'Pathfit', code: 'PathFit 4', instructor: 'Instructor 7'},
  ];
  
  return ( 
    <div className="enrolled-courses">
      <table className="courses-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Code</th>
            <th>Faculty</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.subject}</td>
              <td>{course.code}</td>
              <td>{course.instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrolledCourses;
