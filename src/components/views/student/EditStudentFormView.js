import React from 'react';
import PropTypes from 'prop-types';

const EditStudentFormView = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          First Name:{' '}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Last Name:{' '}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Email:{' '}
          <input
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          GPA:{' '}
          <input
            type="number"
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
            required
            min={0}
            max={4}
          ></input>
        </div>
        <div>
          Image Url:{' '}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <button>Edit Student</button>
      </form>
    </div>
  );
};

EditStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default EditStudentFormView;
