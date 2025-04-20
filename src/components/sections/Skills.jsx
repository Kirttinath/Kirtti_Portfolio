
import { useEffect, useState, useRef } from "react";

const skillsData = [
  {
    name: "Frontend",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <line x1="3" x2="21" y1="9" y2="9"></line>
        <line x1="9" x2="9" y1="21" y2="9"></line>
      </svg>
    ),
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Bootstrap", "Material UI", "Redux"]
  },
  {
    name: "Database",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    skills: ["Firebase", "MySQL", "SQL"]
  },
  {
    name: "Design",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5"></circle>
        <circle cx="17.5" cy="10.5" r="2.5"></circle>
        <circle cx="8.5" cy="7.5" r="2.5"></circle>
        <circle cx="6.5" cy="12.5" r="2.5"></circle>
        <path d="M12 22v-5"></path>
        <path d="M9 9v8"></path>
        <path d="M15 13v4"></path>
      </svg>
    ),
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Wireframing", "Prototyping"]
  },
  {
    name: "DevOps",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    skills: ["Git", "GitHub", "CI/CD", "Vercel", "Netlify"]
  },
  {
    name: "Languages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: ["JavaScript", "TypeScript", "Java"]
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const sectionStyle = {
    backgroundColor: '#f8f9fa'
  };

  const cardStyle = {
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%'
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(155, 135, 245, 0.1)'
  };

  const skillBadgeStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    borderRadius: '2rem',
    padding: '0.35rem 0.75rem',
    fontSize: '0.85rem',
    display: 'inline-block',
    margin: '0.25rem'
  };

  return (
    <section id="skills" style={sectionStyle} ref={sectionRef}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">Skills</h2>
            <p className="lead text-secondary mb-0 mx-auto" style={{maxWidth: '600px'}}>
              My technical skills and areas of expertise.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {skillsData.map((category, index) => (
            <div 
              key={category.name}
              className="col-md-6 col-lg-4"
              style={{
                transition: 'all 0.7s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <div className="card" style={cardStyle}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={iconContainerStyle} className="me-3">
                      {category.icon}
                    </div>
                    <h3 className="h5 mb-0">{category.name}</h3>
                  </div>
                  <div>
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        style={skillBadgeStyle}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
