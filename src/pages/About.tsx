import { useState } from "react";
import { Link } from "react-router-dom";
import "../page.css";

// SVG Icons as React components
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 2.8 1.4 4.8 1.4 5.4 0 9.8-4.4 9.8-9.8 0-5.4-4.4-9.8-9.8-9.8-5.4 0-9.8 4.4-9.8 9.8 0 2 .5 3.5 1.4 5.1l-.9 3.4 3.5-.9zM17.5 14.9c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.3 7.3 9 6.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.3 3.3.1.2 2.3 3.6 5.7 5 1 .4 1.7.6 2.3.8.8.2 1.6.2 2.2.1.7-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MenuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MaintenanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const TimeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppRedirect = (subject: string) => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن: (${subject}) من شركة إمتياز.`
    );
    window.open(`https://wa.me/201070833313?text=${text}`, "_blank");
  };

  return (
    <div className="layout">
      {/* Sticky Header */}
      <header className="header">
        <div className="container headerContainer">
          <Link to="/" className="logo">
            <img
              src="/emtiaz/images/logo.jpg"
              alt="لوجو شركة إمتياز"
              width={55}
              height={55}
              className="logoImage"
            />
            <div className="logoText">
              <h1>شركة إمتياز</h1>
              <span>لتصنيع محطات الخرسانة</span>
            </div>
          </Link>

          <nav className={`nav ${mobileMenuOpen ? "navActive" : ""}`}>
            <Link to="/" className="navLink" onClick={() => setMobileMenuOpen(false)}>الرئيسية</Link>
            <Link to="/about" className="navLink navLinkActive" onClick={() => setMobileMenuOpen(false)}>عن الشركة</Link>
            <Link to="/products" className="navLink" onClick={() => setMobileMenuOpen(false)}>منتجاتنا</Link>
            <Link to="/maintenance" className="navLink" onClick={() => setMobileMenuOpen(false)}>الصيانة والدعم</Link>
            <Link to="/contact" className="navLink" onClick={() => setMobileMenuOpen(false)}>اتصل بنا</Link>
          </nav>

          <div className="headerCta">
            <a href="tel:01070833313" className="phoneLink">
              <PhoneIcon />
              <span>الصيانة: 01070833313</span>
            </a>
            <button
              className="whatsapp-btn"
              onClick={() => handleWhatsAppRedirect("استفسار عام")}
              style={{ padding: "8px 16px", fontSize: "0.9rem" }}
            >
              <WhatsAppIcon />
              <span>تواصل معنا</span>
            </button>
          </div>

          <button className="menuToggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Main Banner Header */}
      <section className="section" style={{ paddingTop: "140px", paddingBottom: "50px", background: "radial-gradient(circle at 50% 20%, rgba(var(--primary-rgb), 0.05) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="sectionHeader" style={{ marginBottom: "20px" }}>
            <span className="sectionSub">تعرف علينا عن قرب</span>
            <h2 className="sectionTitle" style={{ fontSize: "2.6rem" }}>من نحن - شركة إمتياز</h2>
            <p className="sectionDesc" style={{ maxWidth: "800px", margin: "0 auto" }}>
              قصة نجاح وتميز وطني ممتدة منذ عام 2016 في تقديم وتجهيز أفضل الحلول والمعدات الثقيلة لقطاع المقاولات والخرسانة الجاهزة.
            </p>
          </div>
        </div>
      </section>

      {/* Rich Corporate Profile Details */}
      <section className="section" style={{ paddingBottom: "80px", backgroundColor: "var(--bg-base)" }}>
        <div className="container">
          <div className="contactGrid" style={{ gap: "50px", alignItems: "flex-start" }}>

            {/* Detailed Content */}
            <div style={{ textRendering: "optimizeLegibility" }}>
              <h3 style={{ fontSize: "1.8rem", color: "white", fontWeight: "800", marginBottom: "20px", borderRight: "4px solid var(--primary)", paddingRight: "15px" }}>
                مسيرة من التميز الهندسي والصناعي
              </h3>

              <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "20px" }}>
                تأسست <strong>شركة إمتياز لتصنيع محطات الخرسانة</strong> في عام 2016 بجمهورية مصر العربية، حاملةً رؤية واضحة لتوطين صناعة معدات ومحطات الخرسانة الثقيلة محلياً وبجودة تضاهي المحطات المستوردة من أوروبا وتركيا.
              </p>

              <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "20px" }}>
                على مر السنوات، تحولنا من مصنع هندسي محلي إلى شريك موثوق لكبرى شركات المقاولات والتشييد والخرسانة الجاهزة في مصر والدول المجاورة مثل ليبيا الشقيقة، مساهمين بفعالية في النهضة العمرانية التي تشهدها المنطقة من خلال توفير وتطوير خلاطات خرسانية وصوامع متينة.
              </p>

              <h4 style={{ fontSize: "1.4rem", color: "white", fontWeight: "700", marginTop: "35px", marginBottom: "15px" }}>
                معايير الجودة والتصنيع الفائقة لدينا:
              </h4>

              <ul style={{ listStyleType: "none", padding: 0, margin: "0 0 30px 0" }}>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "1.2rem" }}>✓</span>
                  <div>
                    <strong style={{ color: "white" }}>التصميم الهندسي المتطور (3D CAD):</strong>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      نقوم بدراسة وتصميم المحطات على برامج التصميم الهندسي ثلاثية الأبعاد لاختبار الأحمال والإجهادات قبل بدء التصنيع الفعلي لضمان صلابة تامة.
                    </p>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "1.2rem" }}>✓</span>
                  <div>
                    <strong style={{ color: "white" }}>اختيار الفولاذ المقاوم للتآكل:</strong>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      نستخدم ألواح الصلب عالي المتانة بسماكات تتناسب مع ظروف التشغيل الشاقة، بالإضافة إلى معالجة الأسطح بمواد مقاومة للصدأ والتآكل المناخي.
                    </p>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "1.2rem" }}>✓</span>
                  <div>
                    <strong style={{ color: "white" }}>أنظمة تحكم ذكية متطورة (PLC):</strong>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      نوفر لوحات تحكم إلكترونية مبرمجة بالكامل تتيح للمشغل إدارة عملية الخلط، والوزن، والتحميل إلكترونياً بنسبة خطأ 0%.
                    </p>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "1.2rem" }}>✓</span>
                  <div>
                    <strong style={{ color: "white" }}>تكامل الخدمة والدعم:</strong>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      لا ينتهي دورنا ببيع المحطة، بل نبدأ بتقديم استشارات تخطيط الموقع مجاناً، مروراً بالنقل والتركيب، وحتى الصيانة الدورية وتوريد قطع الغيار.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visual Frame & Core Statistics */}
            <div style={{ width: "100%" }}>
              <div className="imageFrame" style={{ aspectRatio: "16/10", marginBottom: "30px" }}>
                <img
                  src="/emtiaz/images/about_factory.jpg"
                  alt="مصنع شركة إمتياز لتصنيع المحطات"
                  className="cardImage"
                  loading="lazy"
                />
                <div className="glowOverlay"></div>
              </div>

              {/* Grid Statistics */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-subtle)", padding: "20px", borderRadius: "var(--radius-sm)", textAlign: "center" }}>
                  <div style={{ color: "var(--primary)", display: "flex", justifyContent: "center", marginBottom: "10px" }}><AwardIcon /></div>
                  <h5 style={{ fontSize: "1.8rem", color: "white", fontWeight: "900", margin: "5px 0" }}>+10 سنوات</h5>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>خبرة فنية وتصنيعية متراكمة</p>
                </div>

                <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-subtle)", padding: "20px", borderRadius: "var(--radius-sm)", textAlign: "center" }}>
                  <div style={{ color: "var(--primary)", display: "flex", justifyContent: "center", marginBottom: "10px" }}><UsersIcon /></div>
                  <h5 style={{ fontSize: "1.8rem", color: "white", fontWeight: "900", margin: "5px 0" }}>+200 عميل</h5>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>يثقون in محطاتنا بمصر وليبيا</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us & Principles Section */}
      <section className="section" style={{ backgroundColor: "#0b0d10", borderTop: "1px solid var(--border-subtle)", paddingBottom: "100px" }}>
        <div className="container">
          <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="sectionSub">ما يميزنا عن غيرنا</span>
            <h3 className="sectionTitle">لماذا تختار شركة إمتياز؟</h3>
            <p className="sectionDesc" style={{ margin: "0 auto", maxWidth: "700px" }}>
              نحن لا نبيع معدات فقط، بل نلتزم بتقديم قيمة تشغيلية حقيقية وتأمين مصنعكم ضد الأعطال المفاجئة.
            </p>
          </div>

          <div className="pillarsGrid">
            <div className="pillarCard" style={{ padding: "30px 24px" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "12px" }}>01. الالتزام بالضمان الفعلي</div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                نمنح عملاءنا فترات ضمان حقيقية وشاملة على الهياكل والقطع الميكانيكية، مع مسؤولية فنية كاملة وتوفير الدعم الوقائي لتجنب المشاكل قبل حدوثها.
              </p>
            </div>

            <div className="pillarCard" style={{ padding: "30px 24px" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "12px" }}>02. دعم الصيانة 24 ساعة</div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                ننفرد بفريق صيانة طوارئ مجهز بأحدث المعدات والأدوات للتحرك فوراً لحل أي عطل كهربائي أو ميكانيكي طارئ لعدم التسبب في تأخير صب الخرسانة.
              </p>
            </div>

            <div className="pillarCard" style={{ padding: "30px 24px" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "12px" }}>03. مرونة التطوير وزيادة السعة</div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                ندعم نمو وتوسع عملائنا؛ فجميع محطاتنا مصممة لتكون قابلة للتحديث أو التعديل لرفع سعتها الإنتاجية مستقبلاً دون الحاجة لشراء محطة جديدة بالكامل.
              </p>
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
                  src="/emtiaz/images/logo.jpg"
                  alt="لوجو شركة إمتياز"
                  width={55}
                  height={55}
                  className="logoImage"
                />
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "white" }}>شركة إمتياز</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>لتصنيع محطات الخرسانة</p>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "24px" }}>
                الاسم الموثوق في مصر وليبيا لتصنيع محطات الخرسانة الجاهزة وسيلوهات الإسمنت وغربلة الركام. نتحرك بثقة نحو ريادة الصناعات الثقيلة.
              </p>
              <div className="footerSocials" style={{ display: "flex", gap: "12px" }}>
                <a
                  href="https://wa.me/201070833313"
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
                <a href="tel:01070833313" className="footerContactLink">
                  <PhoneIcon />
                  <div>
                    <span>قسم المبيعات:</span>
                    <strong>01070833313</strong>
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
              جميع الحقوق محفوظة لشركة إمتياز لتصنيع محطات الخرسانة © {new Date().getFullYear()}
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
