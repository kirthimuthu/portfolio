import { GraduationCap } from 'lucide-react';

export default function EducationModal({ show, onClose }) {
    const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Alagappa University",
      year: "2020-2022",
      type: "Post Graduation"
    },
    {
      degree: "BSc Mathematics",
      institution: "Dr.Umayal Ramanathan college for women, Karaikudi",
      year: "2017-2020",
      type: "Under Graduation"
    },
    {
      degree: "12th Standard",
      institution: "Alagappa Matriculation Higher Secondary School",
      year: "2016-2017",
      type: "Higher Secondary"
    },
    {
      degree: "10th Standard",
      institution: "Alagappa Matriculation Higher Secondary School",
      year: "2014-2015",
      type: "Secondary"
    }
  ];
     if (!show) return null;

  return (
    <div className="education-modal" onClick={() => setShowEducation(false)}>
                <div className="education-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-button" onClick={() => setShowEducation(false)}>×</button>
                  <div className="section-header">
                    <GraduationCap className="section-icon" size={32} />
                    <h2 className="section-title">Educational Background</h2>
                  </div>
                  <div className="education-list">
                    {education.map((edu, index) => (
                      <div key={index} className="education-card-detail">
                        <span className="education-type">{edu.type}</span>
                        <h3 className="education-degree">{edu.degree}</h3>
                        <p className="education-institution">{edu.institution}</p>
                        <p className="education-year">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
