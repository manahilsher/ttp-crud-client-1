import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentView.css';

const StudentView = props => {
  let campusDisplay;
  if (props.student.campus) {
    campusDisplay = (
      <div>
        <p>
          Student at{' '}
          <Link to={`/campuses/${props.student.campus.id}`}>
            {props.student.campus.name}
          </Link>
        </p>
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
      <p>Email: {props.student.email}</p>
      <p>GPA: {props.student.gpa}</p>

      {campusDisplay}

      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};

export default StudentView;
