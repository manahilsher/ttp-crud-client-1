import React from 'react';
import '../styles/AllStudentsView.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllStudentsView = props => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <div className="ui container">
      <Link to="/students/new" className="btn btn-success add-student">
        New Student
      </Link>
      <div className="page-title">
        <h1>STUDENTS</h1>
      </div>
      <div className="all-students row">
        {props.allStudents.map(student => (
          <div key={student.id} className="card">
            <img
              className="card-img-top"
              src={student.imageUrl}
              alt={student.email}
            ></img>
            <div className="card-body">
              <Link to={`/students/${student.id}`} className="card-title">
                <h3>
                  {student.firstName} {student.lastName}
                </h3>
              </Link>
              <p className="card-text">Email: {student.email}</p>
              <p className="card-text">GPA: {student.gpa}</p>
              <button
                onClick={() => props.handleDelete(student.id)}
                className="btn text-warning delete-button"
              >
                Remove
              </button>
              <Link to={`/students/${student.id}`} className="btn btn-info">
                View Student
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default AllStudentsView;
