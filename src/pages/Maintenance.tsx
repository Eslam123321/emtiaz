import { useState } from "react";
import { Link } from "react-router-dom";
import "../page.css";

// SVG Icons as React components for high-performance and dependency-free rendering
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 2.8 1.4 4.8 1.4 5.4 0 9.8-4.4 9.8-9.8 0-5.4-4.4-9.8-9.8-9.8-5.4 0-9.8 4.4-9.8 9.8 0 2 .5 3.5 1.4 5.1l-.9 3.4 3.5-.9zM17.5 14.9c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.3 7.3 9 6.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.3 3.3.1.2 2.3 3.6 5.7 5 1 .4 1.7.6 2.3.8.8.2 1.6.2 2.2.1.7-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 11l2 2 4-4"/>
  </svg>
);

const MaintenanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const TimeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function MaintenancePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plantType: "محطة خرسانة ثابتة",
    serviceType: "أعطال طارئة / إصلاح عاجل",
    details: ""
  });

  const handleWhatsAppRedirect = (subject: string) => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن تفاصيل: (${subject}) من قسم الصيانة لشركة الإمتياز.`
    );
    window.open(`https://wa.me/201070833312?text=${text}`, "_blank");
  };

  const handleMaintenanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*طلب صيانة ودعم فني - شركة الإمتياز*\n\n` +
      `• *الشركة / العميل:* ${formData.name}\n` +
      `• *الهاتف والواتساب:* ${formData.phone}\n` +
      `• *نوع المعدة:* ${formData.plantType}\n` +
      `• *نوع الخدمة:* ${formData.serviceType}\n` +
      `• *تفاصيل الطلب / العطل:* ${formData.details}`
    );
    
    window.open(`https://wa.me/201070833312?text=${text}`, "_blank");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="layout">
      {/* Sticky Header */}
      <header className="header">
        <div className="container headerContainer">
          <div className="logo">
            <img 
              src="/images/logo.jpg" 
              alt="لوجو شركة الإمتياز" 
              width={55} 
              height={55} 
              className="logoImage"
            />
            <div className="logoText">
              <h1>شركة الإمتياز</h1>
              <span>لتصنيع محطات الخرسانة</span>
            </div>
          </div>

          <nav className={`nav ${mobileMenuOpen ? "navActive" : ""}`}>
            <Link to="/" className="navLink" onClick={() => setMobileMenuOpen(false)}>الرئيسية</Link>
            <Link to="/about" className="navLink" onClick={() => setMobileMenuOpen(false)}>عن الشركة</Link>
            <Link to="/products" className="navLink" onClick={() => setMobileMenuOpen(false)}>منتجاتنا</Link>
            <Link to="/maintenance" className="navLink navLinkActive" onClick={() => setMobileMenuOpen(false)}>الصيانة والدعم</Link>
            <Link to="/contact" className="navLink" onClick={() => setMobileMenuOpen(false)}>اتصل بنا</Link>
          </nav>

          <div className="headerCta">
            <a href="tel:01070833312" className="phoneLink">
              <PhoneIcon />
              <span>الصيانة: 01070833312</span>
            </a>
            <button 
              className="whatsapp-btn"
              onClick={() => handleWhatsAppRedirect("طلب دعم فني سريع")}
              style={{ padding: "8px 16px", fontSize: "0.9rem" }}
            >
              <WhatsAppIcon />
              <span>دعم عاجل</span>
            </button>
          </div>

          <button className="menuToggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="section" style={{ paddingTop: "140px", paddingBottom: "60px", background: "radial-gradient(circle at 50% 20%, rgba(var(--primary-rgb), 0.05) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="sectionHeader" style={{ marginBottom: "20px" }}>
            <span className="sectionSub" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span className="badgeDot"></span>
              خدمة الدعم الفني والأعطال 24 ساعة تحت الطلب
            </span>
            <h2 className="sectionTitle" style={{ fontSize: "2.8rem", marginTop: "15px" }}>الصيانة والدعم الفني</h2>
            <p className="sectionDesc" style={{ maxWidth: "800px", margin: "0 auto" }}>
              نحن في شركة الإمتياز ننفرد بوجود فريق صيانة وأعطال فوري مجهز على أعلى مستوى فني، مستعد للتحرك على مدار 24 ساعة لجميع محافظات مصر وليبيا لضمان استمرارية مصنعكم دون أي توقف.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Request Form */}
      <section className="section" style={{ paddingBottom: "100px", backgroundColor: "var(--bg-base)" }}>
        <div className="container">
          <div className="contactGrid">
            
            {/* Maintenance Info */}
            <div className="contactInfo" style={{ justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.8rem", color: "white", marginBottom: "15px" }}>الخدمات المتاحة بقسم الدعم والصيانة</h3>
              <p style={{ marginBottom: "25px" }}>
                نوفر استجابة سريعة لجميع مشاكل محطات الخرسانة لتقديم أفضل أداء تشغيلي للمصنع.
              </p>

              <div className="infoItem" style={{ marginBottom: "20px" }}>
                <div className="infoIcon"><MaintenanceIcon /></div>
                <div className="infoContent">
                  <h4 style={{ color: "white" }}>إصلاح الأعطال الطارئة</h4>
                  <p>حل المشاكل الميكانيكية والهوائية والكهربائية للمحطات على الفور في موقع العمل.</p>
                </div>
              </div>

              <div className="infoItem" style={{ marginBottom: "20px" }}>
                <div className="infoIcon"><ShieldCheckIcon /></div>
                <div className="infoContent">
                  <h4 style={{ color: "white" }}>رفع الكفاءة وتحديث السعة الإنتاجية</h4>
                  <p>تعديل المحطات القائمة لرفع كفاءتها وإنتاجيتها، وتطوير خلاطات الخرسانة والسيور.</p>
                </div>
              </div>

              <div className="infoItem" style={{ marginBottom: "20px" }}>
                <div className="infoIcon"><PhoneIcon /></div>
                <div className="infoContent">
                  <h4 style={{ color: "white" }}>فك وتركيب ونقل المحطات</h4>
                  <p>فك ونقل وإعادة تركيب محطات الخرسانة بالكامل بمختلف أنواعها وأوزانها وتحت إشراف هندسي متكامل.</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon" style={{ color: "var(--whatsapp-color)", borderColor: "rgba(37,211,102,0.2)" }}><WhatsAppIcon /></div>
                <div className="infoContent">
                  <h4 style={{ color: "white" }}>توفير قطع الغيار الفورية</h4>
                  <p>توريد وتركيب جميع قطع الغيار الأصلية المطلوبة بضمان فني من فريق العمل.</p>
                </div>
              </div>
            </div>

            {/* Maintenance Request Form */}
            <div className="contactForm">
              <h3 className="formTitle" style={{ fontSize: "1.6rem", color: "white", fontWeight: "800" }}>نموذج طلب صيانة / دعم فني</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "24px" }}>
                يرجى إدخال تفاصيل العطل أو الخدمة المطلوبة، وسيتم توجيهك فوراً لتطبيق الواتساب للتواصل مع مسؤول الصيانة الفورية.
              </p>
              
              <form onSubmit={handleMaintenanceSubmit}>
                <div className="formGroup">
                  <label className="formLabel">اسم الشركة أو المؤسسة</label>
                  <input 
                    type="text" 
                    required 
                    className="formInput" 
                    placeholder="مثال: شركة الإمتياز للخرسانة"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="formGroup">
                  <label className="formLabel">رقم الهاتف للتواصل (واتساب)</label>
                  <input 
                    type="tel" 
                    required 
                    className="formInput" 
                    placeholder="مثال: 010XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="formGroup">
                  <label className="formLabel">نوع المحطة أو المعدة</label>
                  <select 
                    className="formInput"
                    style={{ backgroundColor: "var(--bg-base)", color: "white", cursor: "pointer" }}
                    value={formData.plantType}
                    onChange={(e) => setFormData({ ...formData, plantType: e.target.value })}
                  >
                    <option value="محطة خرسانة ثابتة 120 متر">محطة خرسانة ثابتة 120 متر</option>
                    <option value="محطة خرسانة متحركة 80-120 متر">محطة خرسانة متحركة 80-120 متر</option>
                    <option value="سيلوهات إسمنت">سيلوهات إسمنت</option>
                    <option value="مهزات سن ورمل">مهزات سن ورمل</option>
                    <option value="سيور نقل وتغذية">سيور نقل وتغذية</option>
                    <option value="تنكات خزانات مياه وسولار">تنكات خزانات مياه وسولار</option>
                    <option value="مجرشة ثلج أو معدات أخرى">مجرشة ثلج أو معدات أخرى</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label className="formLabel">نوع الخدمة المطلوبة</label>
                  <select 
                    className="formInput"
                    style={{ backgroundColor: "var(--bg-base)", color: "white", cursor: "pointer" }}
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="أعطال طارئة / إصلاح عاجل">أعطال طارئة / إصلاح عاجل</option>
                    <option value="عمرة صيانة دورية">عمرة صيانة دورية</option>
                    <option value="فك وتركيب ونقل المحطة">فك وتركيب ونقل المحطة</option>
                    <option value="تطوير ورفع كفاءة وزيادة سعة">تطوير ورفع كفاءة وزيادة سعة</option>
                    <option value="شراء وتوفير قطع غيار">شراء وتوفير قطع غيار</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label className="formLabel">تفاصيل المشكلة / العطل أو الطلب بالتفصيل</label>
                  <textarea 
                    required 
                    className="formTextarea" 
                    placeholder="اكتب هنا تفاصيل المشكلة الهوائية أو الميكانيكية أو نوع التطوير المطلوب..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="whatsapp-btn formBtn">
                  <WhatsAppIcon />
                  <span>إرسال الطلب عبر واتساب للصيانة</span>
                </button>
              </form>

              {formSubmitted && (
                <div style={{ marginTop: "15px", color: "var(--whatsapp-color)", fontSize: "0.85rem", textAlign: "center", fontWeight: "bold" }}>
                  سيتم فتح تطبيق الواتساب لمراسلة قسم الصيانة والأعطال مباشرة. شكراً لك!
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footerGrid">
            {/* Column 1 (Right): Brand Info */}
            <div className="footerCol">
              <div className="footerLogo" style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <img 
                  src="/images/logo.jpg" 
                  alt="لوجو شركة الإمتياز" 
                  width={55} 
                  height={55} 
                  className="logoImage"
                />
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "white" }}>شركة الإمتياز</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>لتصنيع محطات الخرسانة</p>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "24px" }}>
                الاسم الموثوق في مصر وليبيا لتصنيع محطات الخرسانة الجاهزة وسيلوهات الإسمنت وغربلة الركام. نتحرك بثقة نحو ريادة الصناعات الثقيلة.
              </p>
              <div className="footerSocials" style={{ display: "flex", gap: "12px" }}>
                <a 
                  href="https://wa.me/201070833314" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="socialBtn"
                  style={{ color: "var(--whatsapp-color)" }}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100064085473050" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="socialBtn"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>

            {/* Column 2 (Middle Right): Quick Links */}
            <div className="footerCol">
              <h4 className="footerTitle">وصول سريع</h4>
              <ul className="footerLinks">
                <li><Link to="/">الرئيسية</Link></li>
                <li><Link to="/about">من نحن</Link></li>
                <li><Link to="/products">المنتجات</Link></li>
                <li><Link to="/maintenance">الصيانة والدعم</Link></li>
                <li><Link to="/contact">اتصل بنا</Link></li>
              </ul>
            </div>

            {/* Column 3 (Middle Left): Main Address */}
            <div className="footerCol">
              <h4 className="footerTitle">العنوان الرئيسي</h4>
              <div className="footerContactItem">
                <strong style={{ color: "white", display: "block", marginBottom: "8px" }}>المقر الرئيسي والمصنع:</strong>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                  الطريق الزراعي السريع - مزلقان زكي - اجهور الكبرى، محافظة القليوبية، جمهورية مصر العربية.
                </p>
              </div>
            </div>

            {/* Column 4 (Left): Contact Info */}
            <div className="footerCol">
              <h4 className="footerTitle">اتصل بنا</h4>
              <div className="footerContactStack">
                <a href="tel:01070833314" className="footerContactLink">
                  <PhoneIcon />
                  <div>
                    <span>قسم المبيعات:</span>
                    <strong>01070833314</strong>
                  </div>
                </a>
                <a href="tel:01070833312" className="footerContactLink">
                  <MaintenanceIcon />
                  <div>
                    <span>الدعم الفني والصيانة:</span>
                    <strong>01070833312</strong>
                  </div>
                </a>
                <a href="mailto:info@emtiazbatching.com" className="footerContactLink">
                  <MailIcon />
                  <div>
                    <span>البريد الإلكتروني:</span>
                    <strong style={{ fontSize: "0.85rem", wordBreak: "break-all" }}>info@emtiazbatching.com</strong>
                  </div>
                </a>
                <div className="footerContactLink" style={{ cursor: "default" }}>
                  <TimeIcon />
                  <div>
                    <span>أوقات العمل:</span>
                    <strong>على مدار 24 ساعة طوال الأسبوع</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footerBottom" style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.03)", paddingTop: "30px", marginTop: "40px" }}>
            <p className="copyright" style={{ margin: 0 }}>
              جميع الحقوق محفوظة لشركة الإمتياز لتصنيع محطات الخرسانة © {new Date().getFullYear()}
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "var(--text-dark)", margin: 0 }}>
              Designed & Developed by{" "}
              <a 
                href="https://www.facebook.com/profile.php?id=61579454496946" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "#10b981", fontWeight: "700", textDecoration: "none" }}
              >
                SpeedUp
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
