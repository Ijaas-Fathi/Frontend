import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();

  const courseData = {
    "react-for-beginners": {
      title: "React for Beginners",
      description: "Detailed explanation of React basics.",
    },
    "mastering-photoshop": {
      title: "Mastering Photoshop",
      description: "Comprehensive guide to Photoshop for designers.",
    },
  };

  const course = courseData[courseId];

  return (
    <div>
      {course ? (
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
};

export default CourseDetails;
