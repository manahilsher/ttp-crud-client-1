import React from 'react';
import '../styles/StudentNameListView.css';
import { Link } from 'react-router-dom';

const StudentNameListView = props => {
  console.log(props);
  if (!props.students) {
    return <h6>There are no students enrolled</h6>;
  }
  return (
    <>
      <div>
        <p>{props.students.length} Enrolled</p>
        <ul className="list-group">
          {props.students.map(student => (
            <li key={student.id} className="list-group-item">
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentNameListView;
