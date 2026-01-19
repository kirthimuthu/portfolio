import { Settings } from 'lucide-react';

export default function Tools() {
const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "GitHub", icon: "🔗" },
    { name: "Windows", icon: "🪟" },
    { name: "Postman", icon: "📮" },
    { name: "MySQL Workbench", icon: "🛠️" },
    { name: "WordPress", icon: "📝" }
  ];

    
  return(
         <section className="section">
            <div className="section-header">
              <Settings className="section-icon" size={32} />
              <h2 className="section-title">Tools & Technologies</h2>
            </div>
            
            <div className="skills-grid">
              {tools.map((tool, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{tool.icon}</div>
                  <div className="skill-name">{tool.name}</div>
                </div>
              ))}
            </div>
          </section>
          );

}