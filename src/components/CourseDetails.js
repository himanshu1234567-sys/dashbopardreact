// CourseDetails.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


const CourseDetails = () => {
  const { courseId } = useParams();
  const course = useSelector(state =>
    state.courses.find(course => course.id === parseInt(courseId))
  );

  const [expandedWeek, setExpandedWeek] = useState(null);

  const handleToggleWeek = (week) => {
    setExpandedWeek((prevWeek) => (prevWeek === week ? null : week));
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Course Details Page</h1>
      <h2>{course.name}</h2>
      <h2>{course.instructor}</h2>
      <h2>{course.description}</h2>
      <h2>{course.enrollmentStatus}</h2>
      <h2>{course.duration}</h2>
      <h2>{course.location}</h2>
      <h2>{course.prerequisites.join(', ')}</h2>

      <h2>Syllabus</h2>
      <ul>
        {course.syllabus.map((week) => (
          <li key={week.week}>
            <button onClick={() => handleToggleWeek(week.week)}>
              Week {week.week}: {week.topic}
            </button>
            {expandedWeek === week.week && (
              <div>
                <p>{week.content}</p>
              </div>
              
            )}
          </li>
          
        ))}
      
      </ul>
<Link to="/dashboard">Go to Dashboard</Link>

    </div>
  );
};

export default CourseDetails;
