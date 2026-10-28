import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { profileInfo } from '../data';

// Custom LinkedIn Icon
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom GitHub Icon
const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ContactProps {
  initialReason?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialReason }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: initialReason || 'Startup Mentorship',
    problemToSolve: '',
    proposedIdea: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submissionFeedback, setSubmissionFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialReason) {
      setFormData((prev) => ({ ...prev, reason: initialReason }));
    }
  }, [initialReason]);

  const reasonsList = [
    'Startup Mentorship',
    'Startup Idea or Feedback',
    'Collaboration',
    'Internship Opportunity',
    'Job Opportunity',
    'AI Project Discussion',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errors.message = 'Please include a message or inquiry.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isStartupRelated = formData.reason === 'Startup Mentorship' || formData.reason === 'Startup Idea or Feedback' || formData.reason === 'Collaboration';

  const buildPayloadText = () => {
    let payload = `Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${formData.reason}\n`;
    if (formData.problemToSolve.trim()) {
      payload += `Problem to Solve: ${formData.problemToSolve}\n`;
    }
    if (formData.proposedIdea.trim()) {
      payload += `Proposed Idea / Angle: ${formData.proposedIdea}\n`;
    }
    payload += `\nMessage:\n${formData.message}\n`;
    return payload;
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.reason} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Bharath,\n\n` +
      `I am reaching out regarding: ${formData.reason}.\n\n` +
      buildPayloadText() +
      `\n---\nSent via Bharath's Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${profileInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmissionFeedback({
        type: 'success',
        message: 'Opening your default email client with your formatted message. If it did not open automatically, you can email directly at ' + profileInfo.email
      });
    }, 400);
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;

    setIsSubmitting(true);
    const message = encodeURIComponent(
      `*New Portfolio Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Topic:* ${formData.reason}\n` +
      (formData.problemToSolve ? `*Problem Context:* ${formData.problemToSolve}\n` : '') +
      (formData.proposedIdea ? `*Collaboration Angle:* ${formData.proposedIdea}\n` : '') +
      `\n*Message:*\n${formData.message}`
    );

    const waUrl = `https://wa.me/916379639596?text=${message}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setSubmissionFeedback({
        type: 'success',
        message: 'Redirecting to WhatsApp with your pre-filled inquiry. Thank you!'
      });
    }, 400);
  };

  return (
    <section id="contact" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading-wrapper text-center text-md-start">
          <span className="section-label">// 07 &bull; Direct Connection</span>
          <h2 className="section-heading">Let's Connect &amp; Collaborate</h2>
          <p className="section-subheading">
            Whether you want to share mentorship advice, explore early-stage startup ideas, discuss internship opportunities, or build AI projects together.
          </p>
        </div>

        <div className="row g-3">
          {/* Direct Communication Channels */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="d-flex flex-column gap-2"
            >
              <div className="card-futuristic p-3.5">
                <span className="section-label mb-2">// Direct Channels</span>
                <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Verified Contact Information
                </h3>
                <p className="small mb-4" style={{ lineHeight: '1.6' }}>
                  I respond promptly to emails, LinkedIn messages, and WhatsApp conversations. Feel free to reach out directly through any of the channels below.
                </p>

                <div className="d-flex flex-column gap-2">
                  <a
                    href={`mailto:${profileInfo.email}`}
                    className="p-3 rounded-3 d-flex align-items-center gap-3 text-decoration-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: '40px', height: '40px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}
                    >
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-monospace text-muted small" style={{ fontSize: '0.74rem' }}>DIRECT EMAIL</div>
                      <div className="fw-semibold text-truncate" style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {profileInfo.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={profileInfo.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-3 d-flex align-items-center gap-3 text-decoration-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)' }}
                    >
                      <MessageSquare size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-monospace text-muted small" style={{ fontSize: '0.74rem' }}>PHONE / WHATSAPP</div>
                      <div className="fw-semibold text-truncate" style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {profileInfo.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={profileInfo.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-3 d-flex align-items-center gap-3 text-decoration-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: '40px', height: '40px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)' }}
                    >
                      <LinkedinIcon size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-monospace text-muted small" style={{ fontSize: '0.74rem' }}>LINKEDIN PROFILE</div>
                      <div className="fw-semibold text-truncate" style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {profileInfo.linkedIn}
                      </div>
                    </div>
                  </a>

                  <a
                    href={profileInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-3 d-flex align-items-center gap-3 text-decoration-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: '40px', height: '40px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-violet)' }}
                    >
                      <GithubIcon size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-monospace text-muted small" style={{ fontSize: '0.74rem' }}>GITHUB REPOSITORIES</div>
                      <div className="fw-semibold text-truncate" style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {profileInfo.github}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="d-flex align-items-center gap-2 mt-4 pt-3 border-top" style={{ borderColor: 'var(--border-subtle) !important' }}>
                  <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span className="small text-muted">{profileInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Structured Contact / Idea Submission Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="card-futuristic p-3.5 p-md-4"
            >
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="section-label mb-0">// Structured Inquiry</span>
                <span className="small text-muted font-monospace" style={{ fontSize: '0.72rem' }}>Direct Email &amp; WhatsApp Integration</span>
              </div>

              <h3 className="h6 fw-bold mb-1" style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                Send A Message or Pitch an Idea
              </h3>
              <p className="small text-muted mb-3" style={{ fontSize: '0.86rem' }}>
                Submissions automatically format a complete inquiry package that you can send directly via pre-filled email or instant WhatsApp.
              </p>

              <form onSubmit={handleSendViaEmail} noValidate>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="contact-name" className="form-label-futuristic">
                      Your Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className={`form-control form-input-futuristic ${formErrors.name ? 'is-invalid border-danger' : ''}`}
                    />
                    {formErrors.name && (
                      <div className="small text-danger mt-1">{formErrors.name}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="form-label-futuristic">
                      Your Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className={`form-control form-input-futuristic ${formErrors.email ? 'is-invalid border-danger' : ''}`}
                    />
                    {formErrors.email && (
                      <div className="small text-danger mt-1">{formErrors.email}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="contact-reason" className="form-label-futuristic">
                    Reason for Contacting <span className="text-danger">*</span>
                  </label>
                  <select
                    id="contact-reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="form-select form-input-futuristic"
                  >
                    {reasonsList.map((reason) => (
                      <option key={reason} value={reason} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional Startup & Idea Specific Context Fields */}
                <AnimatePresence>
                  {isStartupRelated && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-3 rounded-3 mb-3" style={{ background: 'rgba(6, 182, 212, 0.04)', border: '1px dashed rgba(6, 182, 212, 0.3)' }}>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <Sparkles size={14} style={{ color: 'var(--accent-cyan)' }} />
                          <span className="font-monospace small fw-bold text-uppercase" style={{ color: 'var(--accent-cyan)' }}>
                            Startup &amp; Collaboration Details (Optional)
                          </span>
                        </div>

                        <div className="mb-2">
                          <label htmlFor="problem-to-solve" className="form-label-futuristic" style={{ fontSize: '0.76rem' }}>
                            What problem are you looking to solve?
                          </label>
                          <input
                            type="text"
                            id="problem-to-solve"
                            name="problemToSolve"
                            value={formData.problemToSolve}
                            onChange={handleInputChange}
                            placeholder="e.g., Automating document review, computer vision safety, etc."
                            className="form-control form-input-futuristic"
                            style={{ fontSize: '0.86rem' }}
                          />
                        </div>

                        <div>
                          <label htmlFor="proposed-idea" className="form-label-futuristic" style={{ fontSize: '0.76rem' }}>
                            Proposed Idea, Experience or Collaboration Angle
                          </label>
                          <input
                            type="text"
                            id="proposed-idea"
                            name="proposedIdea"
                            value={formData.proposedIdea}
                            onChange={handleInputChange}
                            placeholder="e.g., Technical co-builder, advisor, providing dataset access"
                            className="form-control form-input-futuristic"
                            style={{ fontSize: '0.86rem' }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mb-4">
                  <label htmlFor="contact-message" className="form-label-futuristic">
                    Your Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share what you have in mind..."
                    className={`form-control form-input-futuristic ${formErrors.message ? 'is-invalid border-danger' : ''}`}
                    style={{ resize: 'vertical', minHeight: '110px' }}
                  />
                  {formErrors.message && (
                    <div className="small text-danger mt-1">{formErrors.message}</div>
                  )}
                </div>

                {/* Feedback Alert */}
                {submissionFeedback && (
                  <div
                    className={`alert ${submissionFeedback.type === 'success' ? 'alert-info' : 'alert-danger'} d-flex align-items-start gap-2 mb-3`}
                    style={{
                      background: submissionFeedback.type === 'success' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      border: `1px solid ${submissionFeedback.type === 'success' ? 'var(--accent-cyan)' : '#ef4444'}`,
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem'
                    }}
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--accent-cyan)' }} />
                    <div>{submissionFeedback.message}</div>
                  </div>
                )}

                {/* Dual Action Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-futuristic btn-futuristic-primary flex-grow-1"
                  >
                    <Mail size={16} />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    disabled={isSubmitting}
                    className="btn-futuristic btn-futuristic-secondary flex-grow-1"
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
