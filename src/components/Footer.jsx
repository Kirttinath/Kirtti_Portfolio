
export default function Footer() {
  const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem 0',
    borderTop: '1px solid #dee2e6',
    position: 'relative',
    overflow: 'hidden'
  };
  
  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    opacity: 0.2,
    background: 'linear-gradient(to right, rgba(155, 135, 245, 0.1), transparent)'
  };
  
  const iconStyle = {
    width: '1rem',
    height: '1rem'
  };
  
  return (
    <footer style={footerStyle}>
      <div style={overlayStyle}></div>
      <div className="container position-relative" style={{zIndex: 1}}>
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="small text-secondary m-0">
              © {new Date().getFullYear()} Kirttinath Ojha. All rights reserved.
            </p>
          </div>

          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <a 
              href="#home"
              className="btn btn-light rounded-circle p-2 d-flex justify-content-center align-items-center me-3"
              aria-label="Back to top"
              style={{width: '2.5rem', height: '2.5rem'}}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
