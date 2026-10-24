import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="lightbox-modal active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="lightbox-close" 
          onClick={onClose} 
          aria-label="Close image viewer"
        >
          <X size={24} />
        </button>
        <img src={item.img} alt={item.title} className="lightbox-img" />
        <div className="lightbox-caption">
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
