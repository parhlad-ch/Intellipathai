import Image from "next/image";

const tutorFeatures = [
  {
    id: 1,
    title: "AI Resume Builder",
    description: "Create professional, ATS-optimized resumes tailored to specific job descriptions",
    color: "blue",
    icon: "/assets/img/icon/tutor/resume-icon.svg",
    features: [
      "Smart keyword optimization",
      "Industry-specific templates",
      "Real-time improvement suggestions",
      "Export in multiple formats"
    ]
  },
  {
    id: 2,
    title: "AI Email Crafter",
    description: "Write clear, professional, and human-like emails for any business scenario",
    color: "green",
    icon: "/assets/img/icon/tutor/email-icon.svg",
    features: [
      "Context-aware suggestions",
      "Tone customization",
      "Grammar & clarity checks",
      "Template library"
    ]
  },
  {
    id: 3,
    title: "Interview Prep Assistant",
    description: "Practice with AI-powered mock interviews and get personalized feedback",
    color: "purple",
    icon: "/assets/img/icon/tutor/briefcase-icon.svg",
    features: [
      "Industry-specific questions",
      "Answer analysis & scoring",
      "Body language tips",
      "Confidence building exercises"
    ]
  },
];

export default function TutoringFeatures() {
  return (
    <section className="tutor-area grey-bg pb-60 pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="tp-tutor-section text-center mb-100">
              <h3 className="tp-tutor-section-title">
                Career <span> Tools </span>
              </h3>
              <p>Boost your professional journey with AI-powered tools designed to help you stand out in the competitive job market</p>
            </div>
          </div>
        </div>
        <div className="row">
          {tutorFeatures.map((feature) => (
            <div className="col-lg-4 col-md-6" key={feature.id}>
              <div className="tp-tutor-item mb-30" style={{ textAlign: 'left' }}>
                <div className="tp-tutor-icon">
                  <span>
                    <i className={`fa-solid fa-${feature.id === 1 ? 'file-lines' : feature.id === 2 ? 'envelope' : 'briefcase'}`} 
                       style={{ fontSize: '42px', color: 'var(--tp-theme-secondary)' }}></i>
                  </span>
                </div>
                <div className="tp-tutor-content">
                  <h4 className="tp-tutor-title">
                    <a href="#" >{feature.title}</a>
                  </h4>
                  <p>{feature.description}</p>
                  {feature.features && (
                    <ul className="tp-tutor-features-list mt-3 mb-4" style={{ listStyle: 'none', padding: 0 }}>
                      {feature.features.map((item, index) => (
                        <li key={index} className="mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                          <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', marginRight: '8px' }}></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="tp-live-join"><a href="/university-application-form" className="tp-btn-border">Try for Free →</a></div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
