import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Download } from 'lucide-react';
import { profileInfo } from '../data';

// Inline SVG matching Lucide Linkedin icon styling
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
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

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields before sending.");
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;

    // Compose WhatsApp message from form fields
    const whatsappMessage = encodeURIComponent(
      `Hi Bharath! My name is ${formData.name}.\n\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    const whatsappUrl = `https://wa.me/916379639596?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleEmailSubmit = () => {
    if (!validateForm()) return;

    // Compose Email message from form fields
    const emailSubject = encodeURIComponent(`${formData.subject} - from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hi Bharath,\n\n` +
      `${formData.message}\n\n` +
      `---\n` +
      `Sender: ${formData.name}\n` +
      `Email: ${formData.email}`
    );
    const mailtoUrl = `mailto:${profileInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    window.open(mailtoUrl, '_self');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="position-relative">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Get In Touch</h2>
          </div>
        </div>

        <div className="row g-5">
          {/* Left Column - Contact Details */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="d-flex flex-column gap-4"
            >
              <div>
                <h3 className="h4 mb-3" style={{ color: 'var(--text-primary)' }}>
                  Let's Connect
                </h3>
                <p style={{ fontSize: '1rem', textAlign: 'justify', color: 'var(--text-secondary)' }}>
                  Whether you're looking to build an intelligent conversational agent, set up an 
                  ML pipeline, or just want to chat about AI applications in tech, feel free to reach out.
                </p>
              </div>

              {/* Actionable List */}
              <div className="d-flex flex-column gap-3">
                <a
                  href={profileInfo.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-custom p-3 d-flex align-items-center gap-3 text-decoration-none"
                >
                  <div className="p-2 bg-success bg-opacity-25 rounded text-success">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div className="subtitle-shadow small fw-semibold">WhatsApp & Phone</div>
                    <div className="fw-bold" style={{ color: 'var(--text-primary)' }}>{profileInfo.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${profileInfo.email}`}
                  className="card-custom p-3 d-flex align-items-center gap-3 text-decoration-none"
                >
                  <div className="p-2 bg-info bg-opacity-25 rounded text-info">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="subtitle-shadow small fw-semibold">Email Address</div>
                    <div className="fw-bold" style={{ color: 'var(--text-primary)' }}>{profileInfo.email}</div>
                  </div>
                </a>

                <a
                  href={profileInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-custom p-3 d-flex align-items-center gap-3 text-decoration-none"
                >
                  <div className="p-2 bg-primary bg-opacity-25 rounded text-primary">
                    <LinkedinIcon size={22} />
                  </div>
                  <div>
                    <div className="subtitle-shadow small fw-semibold">LinkedIn Profile</div>
                    <div className="fw-bold" style={{ color: 'var(--text-primary)' }}>{profileInfo.linkedIn}</div>
                  </div>
                </a>
              </div>

              {/* Extra Download Resume Button */}
              <div className="mt-2">
                <a
                  href={profileInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-accent d-inline-flex align-items-center gap-2"
                >
                  <Download size={18} />
                  <span>Download My Resume</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form (sends to WhatsApp) */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="card-custom p-4 gradient-border"
            >
              <h3 className="h5 mb-2 fw-bold" style={{ color: 'var(--accent-light)' }}>
                Send A Message
              </h3>
              <p className="small mb-4" style={{ color: 'var(--text-secondary)' }}>
                Your message will be sent directly to my WhatsApp or Email.
              </p>

              <form className="d-flex flex-column gap-3">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label small fw-semibold" style={{ color: 'var(--text-secondary)' }}>Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label small fw-semibold" style={{ color: 'var(--text-secondary)' }}>Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label small fw-semibold" style={{ color: 'var(--text-secondary)' }}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Project inquiry"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label small fw-semibold" style={{ color: 'var(--text-secondary)' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-control"
                    placeholder="Write your message here..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      resize: 'none'
                    }}
                  />
                </div>

                <div className="d-flex flex-wrap gap-3 mt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn btn-accent flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2 py-2"
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="btn btn-outline-accent flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2 py-2"
                  >
                    <Mail size={16} />
                    <span>Send via Email</span>
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
