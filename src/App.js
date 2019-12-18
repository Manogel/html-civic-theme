import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experiences from './components/Experiences';
import Education from './components/Education';

function App() {
  return (
    <>
      <div className="profile-info">
        <Header />
        <Profile />
      </div>
      <Experiences />
      <div className="education-info">
        <Education />
      </div>
    </>
  );
}

export default App;
