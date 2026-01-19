import { Briefcase } from 'lucide-react';

export default function Experience() {
  
    
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Besant Technologies",
      period: "1 Year",
      description: "Completed comprehensive training in full stack development, gaining hands-on experience with modern web technologies and frameworks"
    }
  ];

  return(
  <section className="section">
            <div className="section-header">
              <Briefcase className="section-icon" size={32} />
              <h2 className="section-title">Experience</h2>
            </div>
            
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
  );
}