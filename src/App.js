import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Policy from './pages/Policy';
import LegalNotice from './pages/LegalNotice';
import ProjectRequest from './pages/ProjectRequest';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/project-request" element={<ProjectRequest />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project4" element={<Project4 />} />
            <Route path="/project5" element={<Project5 />} />
            <Route path="/project6" element={<Project6 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;