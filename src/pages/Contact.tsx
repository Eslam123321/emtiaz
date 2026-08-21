import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEO from '../components/SEO';
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  MaintenanceIcon,
  FacebookIcon
} from '../components/Icons';
import '../page.css';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `السلام عليكم، أنا ${formData.name}.\nرقم الهاتف: ${formData.phone}.\nأود الاستفسار عن: ${formData.message}`
    );
    window.open(`https://wa.me/201070833313?text=${text}`, "_blank");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="layout">
      <SEO
        title="اتصل بنا ومقر المصنع | شركة إمتياز لمحطات الخرسانة"
        description="تواصل مع إدارة مبيعات شركة إمتياز أو قسم الصيانة الفورية لطلب عروض الأسعار واستشارات محطات الخرسانة الجاهزة والسيلوهات في مصر."
      />

      <Navbar />

      <main>
        {/* Main Banner Header */}
        <section className="section" style={{ paddingTop: "140px", paddingBottom: "50px", background: "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)" }}>
          <div className="container">
            <div className="sectionHeader" style={{ marginBottom: "20px" }}>
              <span className="sectionSub">تواصل معنا</span>
              <h1 className="sectionTitle" style={{ fontSize: "2.6rem" }}>يسعدنا تواصلكم في أي وقت</h1>
              <p className="sectionDesc" style={{ maxWidth: "800px", margin: "0 auto" }}>
                يمكنكم التواصل مباشرة مع إدارة المبيعات، قسم الصيانة الفورية، أو تفضلوا بزيارة مقر مصنعنا. نحن متواجدون لخدمتكم على مدار 24 ساعة.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section Content */}
        <section className="section" style={{ paddingBottom: "80px", backgroundColor: "var(--bg-base)" }}>
          <div className="container">
            <div className="contactGrid">

              {/* Contact Form */}
              <div className="contactForm">
                <h2 className="formTitle" style={{ fontSize: "1.6rem", color: "white", fontWeight: "800" }}>أرسل استفسارك الآن</h2>
                <form onSubmit={handleContactSubmit}>
                  <div className="formGroup">
                    <label className="formLabel" htmlFor="contact-client-name">اسم المؤسسة أو العميل</label>
                    <input
                      id="contact-client-name"
                      type="text"
                      required
                      className="formInput"
                      placeholder="مثال: شركة الإعمار للمقاولات"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel" htmlFor="contact-client-phone">رقم الهاتف (الواتساب)</label>
                    <input
                      id="contact-client-phone"
                      type="tel"
                      required
                      className="formInput"
                      placeholder="مثال: 010XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel" htmlFor="contact-client-msg">تفاصيل الاستفسار أو المنتج المطلوب</label>
                    <textarea
                      id="contact-client-msg"
                      required
                      className="formTextarea"
                      placeholder="اكتب هنا مواصفات محطة الخرسانة أو المعدات المطلوبة..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="whatsapp-btn formBtn">
                    <WhatsAppIcon size={20} />
                    <span>إرسال الطلب عبر واتساب</span>
                  </button>
                </form>
                {formSubmitted && (
                  <div style={{ marginTop: "15px", color: "var(--whatsapp-color)", fontSize: "0.85rem", textAlign: "center", fontWeight: "bold" }}>
                    سيتم فتح تطبيق الواتساب لإرسال رسالتك مباشرة للإدارة. شكراً لتواصلك!
                  </div>
                )}
              </div>

              {/* Contact Details stack */}
              <div className="contactInfo">
                <div className="infoItem">
                  <div className="infoIcon">
                    <MapPinIcon size={20} />
                  </div>
                  <div className="infoContent">
                    <h3 style={{ fontSize: "1.1rem", color: "white", marginBottom: "4px" }}>مقر المصنع والعنوان</h3>
                    <p>الطريق الزراعي السريع - مزلقان زكي - اجهور الكبرى، القليوبية، جمهورية مصر العربية.</p>
                    <a
                      href="https://maps.app.goo.gl/GUzZnmVUvwQv2tkr6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="infoLink"
                      style={{ color: "var(--primary)", fontSize: "0.85rem" }}
                    >
                      عرض على خرائط جوجل ←
                    </a>
                  </div>
                </div>

                <div className="infoItem">
                  <div className="infoIcon" style={{ color: "var(--whatsapp-color)", borderColor: "rgba(37,211,102,0.2)" }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div className="infoContent">
                    <h3 style={{ fontSize: "1.1rem", color: "white", marginBottom: "4px" }}>إدارة المبيعات والتعاقدات</h3>
                    <p>لطلبات الشراء والتعاقدات والاستفسارات الفنية والتجارية:</p>
                    <a href="tel:01070833313" className="infoLink" dir="ltr">01070833313</a>
                    <a href="https://wa.me/201070833313" target="_blank" rel="noopener noreferrer" style={{ color: "var(--whatsapp-color)", fontWeight: "bold" }}>
                      تحدث معنا عبر واتساب مباشرة
                    </a>
                  </div>
                </div>

                <div className="infoItem">
                  <div className="infoIcon">
                    <MaintenanceIcon size={20} />
                  </div>
                  <div className="infoContent">
                    <h3 style={{ fontSize: "1.1rem", color: "white", marginBottom: "4px" }}>قسم الصيانة والأعطال (24 ساعة)</h3>
                    <p>لطلبات الصيانة الفورية، الفك والتركيب، وحالات الطوارئ الميكانيكية:</p>
                    <a href="tel:01070833312" className="infoLink" dir="ltr">01070833312</a>
                  </div>
                </div>

                <div className="infoItem">
                  <div className="infoIcon" style={{ color: "#3b5998" }}>
                    <FacebookIcon size={20} />
                  </div>
                  <div className="infoContent">
                    <h3 style={{ fontSize: "1.1rem", color: "white", marginBottom: "4px" }}>الصفحة الرسمية على فيسبوك</h3>
                    <p>تابعوا أحدث تسليمات محطاتنا وصور من مواقع العمل والإنتاج:</p>
                    <a
                      href="https://www.facebook.com/profile.php?id=100064085473050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="infoLink"
                    >
                      صفحة شركة إمتياز على فيسبوك
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Google Map */}
            <div style={{ marginTop: "60px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-subtle)", height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6983756260176!2d31.203142376288607!3d30.307585474797087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587334f58d70cf%3A0xbf639a512a7c76ff!2z2YXYstmE2YLYp9mGINsp2YPZiiAtINin2KzZh9mI2LEg2KfZhNmD2KjYsdmJ!5e0!3m2!1sar!2seg!4v1721400000000!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع شركة إمتياز على خرائط جوجل"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
