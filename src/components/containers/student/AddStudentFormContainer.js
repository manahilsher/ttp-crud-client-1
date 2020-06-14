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
      errors: {
        uniqueEmail: true,
        validEmailFormat: true
      }
    };
  }

  handleChange = e => {
    if (e.target.name === 'email') {
      this.setState({ email: e.target.value }, this.validateEmail);
    } else if (e.target.name === 'gpa') {
      this.setState({ gpa: parseFloat(e.target.value) });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  validateEmail = () => {
    let isValidEmail = false;
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      isValidEmail = true;
    }
    let errors = this.state.errors;
    errors.validEmailFormat = isValidEmail;
    errors.uniqueEmail = true;
    this.setState({ errors });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.errors.validEmailFormat) {
      await this.props.addStudent(this.state);
    }
    if (this.state.errors.uniqueEmail === false) {
      this.forceUpdate();
    }
  };

  render() {
    return (
      <>
        {this.state.errors.uniqueEmail ? '' : 'Email already being used'}
        {this.state.errors.validEmailFormat ? '' : 'Invalid email format'}
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          imageUrl={this.state.imageUrl}
          gpa={this.state.gpa}
          errors={this.state.errors}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapState = state => {
  return {
    errors: state.errors
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: student => dispatch(addStudentThunk(student, ownProps))
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired
};

export default connect(mapState, mapDispatch)(AddStudentFormContainer);
