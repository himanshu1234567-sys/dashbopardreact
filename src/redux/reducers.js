// reducers.js
const initialState = {
    courses: [
      {
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
      },
      // Additional courses...
    ],
    enrolledCourses: [
      {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        thumbnail: 'your.image.here',
        dueDate: '2024-02-01', // Add a due date or any relevant information
        progress: 50, // Add a progress value (percentage) or any relevant information
      },
      // Additional enrolled courses...
    ],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES':
        return {
          ...state,
          courses: action.payload,
        };
      case 'MARK_COURSE_COMPLETED':
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map(course =>
            course.id === action.payload ? { ...course, completed: true } : course
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  