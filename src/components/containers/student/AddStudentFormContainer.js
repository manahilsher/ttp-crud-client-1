import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddStudentFormView } from '../../views';
import { addStudentThunk } from '../../../thunks';

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: 'https://via.placeholder.com/480x240?text=Placeholder',
      gpa: 0.0,
      isValidFirstName: true,
      errors: {}
    };
  }

  handleChange = e => {
    // if (e.target.name === 'firstName') {
    //   this.setState({ firstName: e.target.value });
    if (e.target.name === 'gpa') {
      this.setState({ gpa: parseFloat(e.target.value) });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  // const { name } = this.state;
  //   let errors = { ...this.state.errors };
  //   // set a valid boolean to true
  //   let isValidName = true;
  //   // check if the value is valid
  //   if (name.length < 2) {
  //     // if not, set the value to false and add error message
  //     isValidName = false;
  //     errors.name = 'Invalid campus name';
  //   }
  //   //
  //   // setstate with isValidName
  //   if (isValidName) {
  //     errors.name = 'valid name';
  //   }
  //   this.setState({ isValidName, errors });
  // };

  // validateFirstName = () => {
  //   const { firstName } = this.state;
  //   let errors = { ...this.state.errors };
  //   // set a valid boolean to true
  //   let isValidFirstName = true;
  //   // check if the value is valid
  //   if (firstName.length < 2) {
  //     // if not, set the value to false and add error message
  //     isValidFirstName = false;
  //     errors.name = 'Invalid student firstName';
  //   }
  //   //
  //   // setstate with isValidFirstName
  //   if (isValidFirstName) {
  //     errors.name = 'valid firstName';
  //   }
  //   this.setState({ isValidFirstName, errors });
  // };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidFirstName ? '' : this.state.errors.firstName}
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          imageUrl={this.state.imageUrl}
          gpa={this.state.gpa}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: student => dispatch(addStudentThunk(student, ownProps))
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
