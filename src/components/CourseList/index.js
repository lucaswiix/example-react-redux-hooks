import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';


import { addCourseAction } from '../../actions/courseActions';
import uuid from 'uuid/v4';

const coursesSelector = createSelector(
  state => state.course.data,
  data => data
)

export default function CourseList() {
  
  const courses = useSelector(coursesSelector);
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState('');

  function addCourseDispatch(){
    try {
      dispatch(addCourseAction({
        id: uuid(),
        name: courseName
      }))
      setCourseName('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h1>Cursos</h1>
      <ul>
        {courses && courses.map(course => <li key={course.id}>{course.name}</li>)  }       
      </ul>
      <input type="text" value={courseName} onChange={e=> setCourseName(e.target.value)} placeholder="Course name" />
      <button type="button" onClick={addCourseDispatch}>Add course</button>
    </>
  );
}
