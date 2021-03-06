import React from 'react';
import PropTypes from 'prop-types';

const AddStudentFormView = props => {
  return (
    <div>
      {console.log(props.errors)}
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
            step="0.1"
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
            required
            min={0.0}
            max={4.0}
          ></input>
        </div>
        <div>
          Image Url:{' '}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <button>Create Student</button>
      </form>
    </div>
  );
};

AddStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  errors: PropTypes.object
};

export default AddStudentFormView;
