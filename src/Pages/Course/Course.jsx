import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {

    const data = useLoaderData();
    console.log(data);


    return (
        <div>
            <h1>CourseCourseCourse</h1>
            <h1>CourseCourseCourse</h1>
            <h1>CourseCourseCourse</h1>
        </div>
    );
};

export default Course;