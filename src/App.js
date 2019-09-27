import React from 'react';
import { Provider } from 'react-redux';

import CourseList from './components/CourseList';
import UsersList from './components/UsersList';

import store from './store';

function App() {
  return (
    <div >
      <Provider store={store}>
        <CourseList />
        <UsersList />
      </Provider>
    </div>
  );
}

export default App;
