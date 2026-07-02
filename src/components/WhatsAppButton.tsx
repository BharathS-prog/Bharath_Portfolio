import React from 'react';
import { motion } from 'framer-motion';
import { profileInfo } from '../data';

export const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={profileInfo.whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="position-fixed d-flex align-items-center justify-content-center shadow-lg"
      style={{
        bottom: '24px',
        right: '24px',
        width: '56px',
        height: '56px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        zIndex: 9999,
        color: '#ffffff',
        border: 'none',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
      }}
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Effect */}
      <span
        className="position-absolute translate-middle top-50 start-50 rounded-circle"
        style={{
          width: '100%',
          height: '100%',
          border: '2px solid #25D366',
          animation: 'pulse-ring 2s infinite',
          zIndex: -1,
          opacity: 0.7
        }}
      />

      {/* Inline styles for pulse-ring animation keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0;
          }
        }
      `}} />

      {/* WhatsApp SVG Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="28" 
        height="28" 
        fill="currentColor"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.928 9.928 0 0 0 4.805 1.232h.005c5.505 0 9.99-4.478 9.99-9.985C22.007 6.478 17.518 2 12.012 2zm5.542 14.195c-.244.688-1.21 1.282-1.66 1.365-.452.083-.902.138-2.84-.627-2.484-.979-4.072-3.485-4.196-3.65-.125-.164-1.012-1.343-1.012-2.56 0-1.218.638-1.818.863-2.065.226-.247.493-.309.658-.309.164 0 .329.002.472.008.149.006.349-.057.546.417.201.488.688 1.674.75 1.798.062.124.103.268.02.433-.082.165-.124.268-.247.412-.124.144-.262.324-.375.433-.125.123-.257.257-.11.512.148.252.658 1.08 1.412 1.748.97.861 1.787 1.127 2.035 1.25.247.124.391.103.535-.062.144-.165.618-.722.783-.969.165-.247.33-.206.556-.123.226.082 1.442.68 1.69.804.247.124.412.186.473.289.062.103.062.597-.181 1.285z" />
      </svg>
    </motion.a>
  );
};
export default WhatsAppButton;
