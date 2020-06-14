import React from 'react';

const StudentView = props => {
  let campusDisplay;
  if (props.student.campus) {
    campusDisplay = (
      <div>
        <p>Student at {props.student.campus.name}</p>
      </div>
    );
  } else {
    campusDisplay = <p>This student is not enrolled in any campus</p>;
  }

  return (
    <>
      <img src={props.student.imageUrl} alt={props.student.email} />
      <h1>
        {props.student.firstName} {props.student.lastName}
      </h1>
      <p>{props.student.email}</p>
      <p>{props.student.gpa}</p>

      {campusDisplay}
    </>
  );
};

export default StudentView;
