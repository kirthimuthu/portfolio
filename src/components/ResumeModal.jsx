import { FileText } from 'lucide-react';
import ResumePDF from '../Resume/KiruthikaResume.pdf';

export default function ResumeModal({ show, onClose }) {
  if (!show) return null;
  return(
  <div className="education-modal" onClick={() => onClose()}>
              <div className="education-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => onClose()}>×</button>
                <div className="section-header">
                  <FileText className="section-icon" size={32} />
                  <h2 className="section-title">Resume</h2>
                </div>
                <div className="resume-section">
                  <div className="resume-item">
                    <h3>Professional Summary</h3>
                    <p>Full Stack Developer with expertise in Python, JavaScript, React, and Django. Completed internship at Besant Technologies with hands-on experience in modern web development.</p>
                  </div>
                  
                  <div className="resume-item">
                    <h3>Technical Skills</h3>
                    <ul>
                      <li><strong>Languages:</strong> Python, JavaScript, HTML, CSS</li>
                      <li><strong>Frameworks:</strong> React, Django</li>
                      <li><strong>Database:</strong> MySQL</li>
                      <li><strong>Tools:</strong> VS Code, GitHub, Postman, MySQL Workbench, WordPress</li>
                    </ul>
                  </div>
                  
                  <div className="resume-item">
                    <h3>Education</h3>
                    <p><strong>MCA (Master of Computer Applications)</strong> - Post Graduation</p>
                    <p><strong>BSc Mathematics</strong> - Under Graduation</p>
                  </div>
                  
                  <div className="resume-item">
                    <h3>Experience</h3>
                    <p><strong>Full Stack Development Intern</strong> - Besant Technologies (1 Year)</p>
                    <p>Completed comprehensive training in full stack development, gaining hands-on experience with modern web technologies and frameworks.</p>
                  </div>
                  
                  <button className="download-button" onClick={() => window.open(ResumePDF, '_blank' )} >
                    <FileText size={20} />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          )}
        