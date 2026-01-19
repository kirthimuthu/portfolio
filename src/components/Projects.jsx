import { useState } from 'react';
import { Code } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const projects = [
    {
      id: 1,
      name: "Study Management system ",
      description: " The Study Management System is a web-based application developed using Python and Django framework to manage academic data efficiently. It allows administrators and authorized users to add, edit, view, and delete study-related information such as studies, fields, and subjects in a structured way. The system is designed to reduce manual work and provide an easy-to-use interface for managing educational content.The application organizes academic data in a Study → Field → Subject structure and follows a phase-wise implementation approach for better clarity and scalability.  MySQL Workbench is used only for database modeling and visualization, not for direct integration with the Django application.",
      tech: ["Python", "Django", "MySQL", "Frontend"],
      link: "#"
    },
    {
      id: 2,
      name: "Movie Ticket Booking System",
      description: "The Movie Ticket Booking System is a database-oriented project implemented using MySQL Workbench, focusing on SQL query design and relational database concepts. The project involves creating normalized tables for movies, theaters, shows, users, seats, and bookings using primary keys, foreign keys, unique constraints, and check constraints.The system uses SQL JOIN operations (INNER JOIN, LEFT JOIN) to retrieve meaningful information such as movie-wise show details, theater-wise seat availability, and user booking history. Complex queries are written using subqueries, aggregate functions, GROUP BY, HAVING, and constraints to ensure data integrity and efficient data retrieval.",
      tech: ["Mysql", "Mysql workbench", ],
      link: "#"
    },
    {
      id: 3,
      name: "Sushi Delight Restaurant Webpage",
      description: "The Sushi Delight Restaurant Webpage is a responsive front-end web application developed using HTML, CSS, and JavaScript. The project displays a list of sushi dishes with images and descriptions, allowing users to log in, select dishes, choose quantity and quality, and view price calculations in real time.The application dynamically calculates the total price based on selected quantity and dish price, providing an interactive and user-friendly ordering experience. JavaScript is used to handle user authentication (basic login), input validation, and total amount calculation, while HTML and CSS are used to design a visually appealing interface.",
      tech: ["React", "Chart.js", "Weather API"],
      link: "#"
    },
    
  ];
   return(
  <section className="section">
            <div className="section-header">
              <Code className="section-icon" size={32} />
              <h2 className="section-title">Projects</h2>
            </div>
            
            <div className="projects-grid">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="project-card"
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                >
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="tech-tags">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                </div>
                    </div>
                    ))}
          </div>
        </section>
   );
                }
