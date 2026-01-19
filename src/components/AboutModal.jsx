import { User } from 'lucide-react';

export default function AboutModal({ show, onClose }) {
  if (!show) return null;

  return (
    
              <div className="education-modal" onClick={() => setShowAbout(false)}>
                <div className="education-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-button" onClick={() => setShowAbout(false)}>×</button>
                  <div className="section-header">
                    <User className="section-icon" size={32} />
                    <h2 className="section-title">About Me</h2>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <p className="about-text">
                      Hi! I'm Kiruthika, a passionate Full Stack Developer with a strong foundation in web technologies. 
                      I completed my internship at Besant Technologies where I gained hands-on experience in building 
                      modern web applications.
                    </p>
                    <p className="about-text">
                      With a background in BSc Mathematics and pursuing MCA, I bring analytical thinking and problem-solving 
                      skills to every project. I'm proficient in Python, JavaScript, React, Django, and various other 
                      technologies that help me create efficient and user-friendly applications.
                    </p>
                    <p className="about-text">
                      I'm enthusiastic about learning new technologies, contributing to innovative projects, and growing 
                      as a developer. When I'm not coding, I enjoy writing blogs on WordPress and exploring new web 
                      development trends.
                    </p>
                  </div>
                </div>
              </div>
            )}
        
