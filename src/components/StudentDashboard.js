// StudentDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseAsCompleted } from '../redux/actions';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.enrolledCourses);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            {/* <p>Thumbnail: {course.thumbnail}</p> */}
            <p>Due Date: {course.dueDate}</p>
            <p>Progress: {course.progress}%</p>
            <button onClick={() => dispatch(markCourseAsCompleted(course.id))}>
              Mark as Completed
            </button>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default StudentDashboard;
