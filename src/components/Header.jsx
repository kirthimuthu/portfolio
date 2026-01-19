import { Mail, Linkedin, Github  } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
            <div className="container">
              <h1 className="main-title">Kiruthika</h1>
              <p className="subtitle">Full Stack Developer</p>
              <div className="social-links">
                <a href="mailto:kirthimuthu99@gmail.com" className="social-icon">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kiruthika-muthu/" className="social-icon">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/kirthimuthu" className="social-icon">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </header>
  );
}