import { Wrench } from 'lucide-react';

export default function Skills() {
    const skills = [
    { name: "Python", icon: "🐍" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Django", icon: "🎯" },
    { name: "MySQL", icon: "🗄️" }
  ];
{/* Skills Section */}
return(
        <section className="section">
          <div className="section-header">
            <Wrench className="section-icon" size={32} />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>
);

}
