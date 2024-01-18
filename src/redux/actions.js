// actions.js
export const fetchCourses = () => async dispatch => {
    // Implement the course fetching logic from the backend (dummy API, Firebase, etc.)
    const course = {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Does',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
       
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.',
          },
          {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.',
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
          },
          {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
          },
          // Additional enrolled students...
        ],
      };
  
    dispatch({
      type: 'FETCH_COURSES',
      // eslint-disable-next-line no-undef
      payload: [course],
    });
  };
  
  export const markCourseAsCompleted = courseId => ({
    type: 'MARK_COURSE_COMPLETED',
    payload: courseId,
  });
  