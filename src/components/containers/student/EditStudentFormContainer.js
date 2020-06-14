import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchStudentThunk, editStudentThunk } from '../../../thunks';
import { connect } from 'react-redux';
import { EditStudentFormView } from '../../views';

class EditStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: 0.0,
      errors: {
        uniqueEmail: true,
        validEmailFormat: true
      }
    };
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
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
    const id = this.props.match.params.id;
    if (this.state.errors.validEmailFormat) {
      console.log('EMAIL FORMAT IS VALID');
      await this.props.editStudent(id, this.state);
    }
    if (this.state.errors.uniqueEmail === false) {
      // this.forceUpdate();
    }

    // this.props.editStudent(id, this.state);
    // this.props.history.push(`/students/${id}`);
  };

  render() {
    return (
      <>
        {this.state.errors.uniqueEmail ? '' : 'Email already being used'}
        {this.state.errors.validEmailFormat ? '' : 'Invalid email format'}
        <EditStudentFormView
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
  return { student: state.student };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchStudent: id => dispatch(fetchStudentThunk(id)),
    editStudent: (id, student) =>
      dispatch(editStudentThunk(id, student, ownProps))
  };
};

EditStudentFormContainer.propTypes = {
  fetchStudent: PropTypes.func.isRequired,
  editStudent: PropTypes.func.isRequired
};

export default connect(mapState, mapDispatch)(EditStudentFormContainer);
