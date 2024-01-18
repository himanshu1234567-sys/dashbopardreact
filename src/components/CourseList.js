// CourseList.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../redux/actions';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  // Add a conditional check before using map
  if (!Array.isArray(courses)) {
    return <p>No courses available.</p>;
  }

  return (
    <div>
      <h1>Course Listing Page</h1>
      <ul>
<Link to="/dashboard">Go to Dashboard</Link>


        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              {course.name} - {course.instructor} - {course.prerequisites} - {course.schedule}
            </Link>
            {/* Other course details can be displayed here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
