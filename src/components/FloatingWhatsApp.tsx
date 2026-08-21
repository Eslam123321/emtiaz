import React from 'react';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/201070833313?text=مرحباً،%20أرغب%20في%20الاستفسار%20عن%20منتجات%20وخدمات%20شركة%20إمتياز%20لتصنيع%20محطات%20الخرسانة"
      target="_blank"
      rel="noopener noreferrer"
      className="floatingWhatsApp"
      aria-label="تواصل فوري عبر الواتساب"
      title="تواصل عبر واتساب 24/7"
    >
      <WhatsAppIcon size={28} />
      <span className="whatsappTooltip">تواصل معنا واتساب</span>
    </a>
  );
}
