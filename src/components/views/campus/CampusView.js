import React from 'react';
import '../styles/CampusView.css';
import { Link } from 'react-router-dom';
import {
  StudentNameListContainer,
  AddStudentToCampusContainer
} from '../../containers';

const CampusView = props => {
  return (
    <>
      <div className="buttons">
        <Link
          className="btn btn-info edit-button"
          to={`/campuses/${props.campus.id}/edit`}
        >
          Edit
        </Link>

        <button
          onClick={() => props.handleDelete(props.campus.id)}
          className="btn text-warning delete-button"
        >
          Remove
        </button>
      </div>

      <div>
        <img
          src={props.campus.imageUrl}
          alt={props.campus.name}
          className="campus-image"
        />

        <h1 className="card-title">{props.campus.name}</h1>

        <h6>Address: {props.campus.address}</h6>

        <p>{props.campus.description}</p>

        <AddStudentToCampusContainer
          campusId={props.campus.id}
          handleEnrollStudent={props.handleEnrollStudent}
        />

        <StudentNameListContainer students={props.campus.students} />
      </div>
    </>
  );
};

export default CampusView;
