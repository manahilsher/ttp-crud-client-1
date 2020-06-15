import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentView.css';

const StudentView = props => {
  let campusDisplay;
  if (props.student.campus) {
    campusDisplay = (
      <div>
        <h6>
          Student at{' '}
          <Link to={`/campuses/${props.student.campus.id}`}>
            {props.student.campus.name}
          </Link>
        </h6>
      </div>
    );
  } else {
    campusDisplay = <p>This student is not enrolled in any campus</p>;
  }

  return (
    <>
      <div className="buttons">
        <Link
          className="btn btn-info edit-button"
          to={`/students/${props.student.id}/edit`}
        >
          Edit
        </Link>
        <button
          onClick={() => props.handleDelete(props.student.id)}
          className="btn text-warning delete-button"
        >
          Remove
        </button>
      </div>
      <div>
        <img
          src={props.student.imageUrl}
          alt={props.student.email}
          className="student-image"
        ></img>
        <h1 className="card-title">
          {props.student.firstName} {props.student.lastName}
        </h1>
        <h6>Email: {props.student.email}</h6>
        <h6>GPA: {props.student.gpa}</h6>
        {campusDisplay}
      </div>
    </>
  );
};

export default StudentView;
