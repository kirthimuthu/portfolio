import React, { useState } from 'react';
import Header from './components/Header';
import { Briefcase, Code, Mail, Linkedin, Github, Wrench, Settings, GraduationCap, User, FileText } from 'lucide-react';
import './App.css'
import profileImage from './profile/dp.jpeg';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import EducationModal from './components/EducationModal';
import ResumeModal from './components/ResumeModal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';



export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [showEducation, setShowEducation] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showResume, setShowResume] = useState(false);

  

  return (
    <>
    

    <div className="app">
      {/* Header */}
     <Header/>

      

      <main className="main-content">

        
  {/* Profile Picture */}
  <ProfileSection/>

        {/* Action Buttons */}
        <div className="button-container">
          <button className="education-button" onClick={() => setShowAbout(true)}>
            <User size={20} />
            About Me
          </button>
          <button className="education-button" onClick={() => setShowEducation(true)}>
            <GraduationCap size={20} />
            Education
          </button>
          <button className="education-button" onClick={() => setShowResume(true)}>
            <FileText size={20} />
            Resume
          </button>
        </div>

        {/* About Me Modal */}
       
       <AboutModal show={showAbout} onClose={() => setShowAbout(false)} />
          <EducationModal show={showEducation} onClose={() => setShowEducation(false)} />
          <ResumeModal show={showResume} onClose={() => setShowResume(false)} />




        {/* Experience Section */}
         <Experience />
          <Skills />
          <Tools />
          <Projects />
        </main>


      {/* Footer */}
     
    <Footer/>
       </div>
       </>
  );
}