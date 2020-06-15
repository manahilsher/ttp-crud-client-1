import React from 'react';
import '../styles/AllCampusesView.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllCampusesView = props => {
  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }

  return (
    <div className="ui container">
      <Link to="/campuses/new" className="btn btn-success add-campus">
        New Campus
      </Link>
      <div className="page-title">
        <h1>CAMPUSES</h1>
      </div>
      <div className="all-campuses row">
        {props.allCampuses.map(campus => (
          <div key={campus.id} className="card">
            <img
              className="card-img-top"
              src={campus.imageUrl}
              alt={campus.name}
            ></img>
            <div className="card-body">
              <Link to={`/campuses/${campus.id}`} className="card-title">
                <h3>{campus.name}</h3>
              </Link>
              <p className="card-text">{campus.students.length} Enrolled</p>
              <button
                onClick={() => props.handleDelete(campus.id)}
                className="btn text-warning delete-button"
              >
                Remove
              </button>
              <Link to={`/campuses/${campus.id}`} className="btn btn-info">
                View Campus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired
};

export default AllCampusesView;
