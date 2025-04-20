
import { useEffect, useState, useRef } from "react";

const educationData = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    startDate: "Aug 2018",
    endDate: "May 2020",
    description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Thesis on adaptive user interfaces for mobile applications."
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Engineering",
    institution: "University of Michigan",
    location: "Ann Arbor, MI",
    startDate: "Aug 2014",
    endDate: "May 2018",
    description: "Focus on software engineering and computer architecture. Graduated with honors."
  },
  {
    degree: "Certificate",
    field: "UX Design",
    institution: "Interaction Design Foundation",
    location: "Online",
    startDate: "Jan 2017",
    endDate: "Jun 2017",
    description: "Completed comprehensive UX design certification with focus on user research and interaction design."
  }
];

export default function Education() {
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
    transition: 'all 0.3s ease'
  };

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

  return (
    <section id="education" style={sectionStyle} ref={sectionRef}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">Education</h2>
            <p className="lead text-secondary mb-0 mx-auto" style={{maxWidth: '600px'}}>
              My academic background and continuous learning journey.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            {educationData.map((item, index) => (
              <div 
                key={index}
                className="card mb-4"
                style={{
                  ...cardStyle,
                  transition: 'all 0.7s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-md-1 mb-3 mb-md-0">
                      <div style={iconContainerStyle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-11">
                      <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                        <div>
                          <h3 className="h5 mb-1">{item.degree} in {item.field}</h3>
                          <p className="text-secondary mb-1">{item.institution}, {item.location}</p>
                        </div>
                        <span style={badgeStyle} className="align-self-start align-self-md-center mt-2 mt-md-0">
                          {item.startDate} - {item.endDate}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-secondary mb-0">{item.description}</p>
                      )}
                    </div>
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
