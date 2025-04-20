
import { useEffect, useState, useRef } from "react";

const experienceData = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Lead a team of 5 developers in building a modern SaaS platform using React, TypeScript, and GraphQL.",
      "Implemented CI/CD pipelines that reduced deployment time by 40% and improved code quality.",
      "Designed and developed reusable component library that increased development speed by 30%."
    ],
    skills: ["React", "TypeScript", "GraphQL", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Full Stack Developer",
    company: "DataViz Solutions",
    location: "Boston, MA",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: [
      "Developed and maintained multiple client projects using the MERN stack.",
      "Created data visualization dashboards with D3.js that processed over 1M data points.",
      "Optimized database queries resulting in 60% faster page load times."
    ],
    skills: ["MongoDB", "Express.js", "React", "Node.js", "D3.js"]
  },
  {
    title: "UX/UI Developer",
    company: "Creative Digital Agency",
    location: "New York, NY",
    startDate: "Jul 2018",
    endDate: "May 2020",
    description: [
      "Collaborated with designers to implement pixel-perfect UIs for high-profile clients.",
      "Built responsive web applications with focus on accessibility and performance.",
      "Conducted user testing sessions to improve UI/UX based on real user feedback."
    ],
    skills: ["JavaScript", "HTML/CSS", "Sass", "Figma", "User Testing"]
  }
];

export default function Experience() {
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

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(155, 135, 245, 0.1)'
  };

  const badgeStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    borderRadius: '2rem',
    padding: '0.35rem 0.75rem',
    fontSize: '0.85rem',
    fontWeight: '500'
  };

  const skillBadgeStyle = {
    backgroundColor: '#e9ecef',
    color: '#495057',
    borderRadius: '2rem',
    padding: '0.35rem 0.75rem',
    fontSize: '0.75rem',
    margin: '0.25rem',
    display: 'inline-block'
  };

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">Experience</h2>
            <p className="lead text-secondary mb-0 mx-auto" style={{maxWidth: '600px'}}>
              My professional journey and the impactful roles I've held.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            {experienceData.map((item, index) => (
              <div 
                key={index}
                style={{
                  transition: 'all 0.7s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${index * 0.2}s`
                }}
                className="mb-5"
              >
                <div className="row">
                  <div className="col-md-1 mb-3 mb-md-0">
                    <div style={iconContainerStyle}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-11">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                      <div>
                        <h3 className="h5 mb-1">{item.title}</h3>
                        <p className="text-secondary mb-1">{item.company}, {item.location}</p>
                      </div>
                      <span style={badgeStyle} className="align-self-start align-self-md-center mt-2 mt-md-0">
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                    <ul className="ps-3 my-3">
                      {item.description.map((point, i) => (
                        <li key={i} className="text-secondary mb-2">{point}</li>
                      ))}
                    </ul>
                    <div>
                      {item.skills.map((skill, i) => (
                        <span key={i} style={skillBadgeStyle}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    {index < experienceData.length - 1 && (
                      <hr className="my-4" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
