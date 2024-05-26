import React from 'react';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
// import { MainProjects } from './components/MainProjects';
import { MainSkills } from './components/MainSkills';

function App() {
  return (
    <>
      <Header />
      <MainSkills />
      {/* <MainProjects /> */}
      <Contact />
    </>
  );
}

export default App;
