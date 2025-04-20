
import { useState, useRef } from "react";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This is where you would add your actual email service integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert("Message sent! Thanks for reaching out. I'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      formRef.current.reset();
    } catch (error) {
      alert("Something went wrong. Your message couldn't be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
        </svg>
      ),
      label: "Email",
      value: "kirttinathojha000@gmail.com",
      href: "mailto:kirttinathojha000@gmail.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      label: "Location",
      value: "Bhubaneswar, Odisha",
      href: null,
    },
  ];

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '5rem 0'
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
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(155, 135, 245, 0.1)'
  };

  const socialIconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid #dee2e6',
    transition: 'background-color 0.3s ease'
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">Contact Me</h2>
            <p className="lead text-secondary mb-0 mx-auto" style={{maxWidth: '600px'}}>
              Have a question or want to work together? Reach out to me.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card h-100" style={cardStyle}>
              <div className="card-header bg-white">
                <h3 className="card-title h5 mb-1">Send a Message</h3>
                <p className="card-subtitle text-secondary small">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4" ref={formRef}>
                  <div>
                    <label htmlFor="name" className="form-label small fw-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label small fw-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label small fw-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m22 2-7 20-4-9-9-4Z"></path>
                          <path d="M22 2 11 13"></path>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card mb-4" style={cardStyle}>
              <div className="card-header bg-white">
                <h3 className="card-title h5 mb-1">Contact Information</h3>
                <p className="card-subtitle text-secondary small">
                  You can reach me through the following channels.
                </p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-column gap-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="d-flex gap-3 align-items-center">
                      <div style={iconContainerStyle}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-secondary small mb-0">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-decoration-none fw-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="fw-medium mb-0">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card" style={cardStyle}>
              <div className="card-header bg-white">
                <h3 className="card-title h5 mb-1">Connect with Me</h3>
                <p className="card-subtitle text-secondary small">
                  Find me on professional networks.
                </p>
              </div>
              <div className="card-body">
                <div className="d-flex gap-3">
                  <a 
                    href="https://github.com/kirttinathojha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={socialIconStyle}
                    className="text-dark"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/kirttinathojha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={socialIconStyle}
                    className="text-dark"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
