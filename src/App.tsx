import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './componnents/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/Constacts/Contacts';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Mentors from './pages/Mentors/Mentors';
import Reviews from './pages/Reviews/Reviews';
import StudentsWork from './pages/StudentsWork/StudentsWork';



function App() {
  return <>
    <Header />
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/aboutus'} element={<AboutUs />} />
      <Route path={'/courses'} element={<Courses />} />
      <Route path={'/mentors'} element={<Mentors />} />
      <Route path={'/studentswork'} element={<StudentsWork />} />
      <Route path={'reviews'} element={<Reviews />} />
      <Route path={'contacts'} element={<Contacts />} />
    </Routes>
  </>
}

export default App;
