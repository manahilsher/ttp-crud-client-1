import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStudentsThunk } from '../../../thunks';

class AddStudentToCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { studentId: '' };
  }
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  // when the enroll student button is clicked
  // send a put request for the student
  // change the campus id to the id of the campus we are on

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    // e.preventDefault();
    this.props.handleEnrollStudent(this.props.campusId, this.state.studentId);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            name="studentId"
            onChange={this.handleChange}
            style={{ marginTop: '1rem' }}
          >
            <option value="">Enroll a Student </option>
            {this.props.allStudents
              .filter(s => s.campusId !== this.props.campusId)
              .map(student => {
                return (
                  <option value={student.id} key={student.id}>
                    {student.firstName}
                  </option>
                );
              })}
          </select>
          <button
            type="submit"
            className="btn"
            style={{
              border: 'solid black',
              marginLeft: '1rem',
              lineHeight: '12px'
            }}
          >
            Enroll
          </button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return { allStudents: state.allStudents };
};

const mapDispatch = dispatch => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  };
};

export default connect(mapState, mapDispatch)(AddStudentToCampusContainer);
