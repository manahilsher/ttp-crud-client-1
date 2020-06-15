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
      <img
        src={props.student.imageUrl}
        alt={props.student.email}
      ></img>
      <div className="card-body">
        <h1 className="card-title">
          {props.student.firstName} {props.student.lastName}
        </h1>
        <p className="card-text">Email: {props.student.email}</p>
        <p className="card-text">GPA: {props.student.gpa}</p>
        {campusDisplay}
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
    </>
  );
};

export default StudentView;
