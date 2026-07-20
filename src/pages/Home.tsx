import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../page.css";

// SVG Icons as React components for high-performance and dependency-free rendering
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

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const AwardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" />
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

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const EyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 1 6 6v5H6V8a6 6 0 0 1 6-6z" />
  </svg>
);

// Main business areas definition
interface MainCategory {
  title: string;
  description: string;
  image: string;
  link: string;
}

const MAIN_CATEGORIES_SHOWCASE: MainCategory[] = [
  {
    title: "محطات الخرسانة الجاهزة",
    description: "تصنيع وتجهيز محطات الخرسانة الثابتة والمتحركة ومصانع الإنترلوك بمختلف السعات والقدرات التشغيلية من 80 إلى 120م³.",
    image: "/images/486471563_1069345438544962_872698005021278874_n.jpg",
    link: "/products?category=batching"
  },
  {
    title: "الغربلة وأنظمة السيور",
    description: "تصنيع مهزات الركام وغربال السن بمختلف المقاسات، وسيور التغذية وسيور نقل المواد المحورية الشاقة.",
    image: "/images/486641740_1069345401878299_2779942071246690946_n.jpg",
    link: "/products?category=screening"
  },
  {
    title: "السيلوهات والخزانات الصناعية",
    description: "تصنيع سيلوهات تخزين الإسمنت الفولاذية بسعة 120 و 150 طن وتوريد خزانات الوقود والمياه والمعالجات الكيميائية.",
    image: "/images/485107178_1065877335558439_1431773722307996633_n.jpg",
    link: "/products?category=silos"
  },
  {
    title: "خدمات الصيانة والتركيب",
    description: "فك ونقل المحطات، وزيادة السعات والقدرات التشغيلية، وتوفير قطع الغيار الفورية، مع دعم فني طارئ 24 ساعة.",
    image: "/images/584445806_1264421859037318_3017940199291918115_n.jpg",
    link: "/products?category=spare"
  }
];

const HERO_SLIDES = [
  "/images/486471563_1069345438544962_872698005021278874_n.jpg",
  "/images/489447717_1081447364001436_7369565754761327534_n.jpg",
  "/images/485107178_1065877335558439_1431773722307996633_n.jpg",
  "/images/486315488_1069345365211636_5164400317900976198_n.jpg",
  "/images/583619745_1264421849037319_7611249301773617131_n.jpg",
  "/images/584755566_1264421955703975_6663156461601610510_n.jpg"
];

// Success Partners list definition
const PARTNERS = [
  "صن كريت", "يوني مكس", "تلال MH", "أوجي مكس",
  "الاتحاد جي مكس", "مينا ايكوبات", "بركة جنه مني بيلد",
  "شركة النور جراند (م. أحمد طارق)", "اعمار مكس",
  "شركة دلتا للمشروعات الهندسية", "شركة ميجا بارست", "وشركات أخرى في ليبيا الشقيقة"
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppRedirect = (subject: string) => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن تفاصيل: (${subject}) من شركة الإمتياز لتصنيع محطات الخرسانة.`
    );
    window.open(`https://wa.me/201070833314?text=${text}`, "_blank");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill WhatsApp message with form details
    const text = encodeURIComponent(
      `السلام عليكم، أنا ${formData.name}.\nرقم الهاتف: ${formData.phone}.\nأود الاستفسار عن: ${formData.message}`
    );
    window.open(`https://wa.me/201070833314?text=${text}`, "_blank");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="layout">
      {/* Dynamic Sticky Header */}
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
            <a href="#home" className="navLink navLinkActive" onClick={() => setMobileMenuOpen(false)}>الرئيسية</a>
            <Link to="/about" className="navLink" onClick={() => setMobileMenuOpen(false)}>عن الشركة</Link>
            <Link to="/products" className="navLink" onClick={() => setMobileMenuOpen(false)}>منتجاتنا</Link>
            <Link to="/maintenance" className="navLink" onClick={() => setMobileMenuOpen(false)}>الصيانة والدعم</Link>
            <Link to="/contact" className="navLink" onClick={() => setMobileMenuOpen(false)}>اتصل بنا</Link>
          </nav>

          <div className="headerCta">
            <a href="tel:01070833312" className="phoneLink">
              <PhoneIcon />
              <span>الصيانة: 01070833312</span>
            </a>
            <button
              className="whatsapp-btn"
              onClick={() => handleWhatsAppRedirect("طلب عام / استفسار")}
              style={{ padding: "8px 16px", fontSize: "0.9rem" }}
            >
              <WhatsAppIcon />
              <span>راسلنا الآن</span>
            </button>
          </div>

          <button className="menuToggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Background Image Slider */}
        <div className="heroSlider">
          {HERO_SLIDES.map((slide, index) => {
            const isNear =
              index === currentSlide ||
              index === (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length ||
              index === (currentSlide + 1) % HERO_SLIDES.length;
            return (
              <div
                key={index}
                className={`slideItem ${index === currentSlide ? "slideActive" : ""}`}
              >
                {isNear && (
                  <img
                    src={slide}
                    alt={`معدات ومحطات شركة الإمتياز ${index + 1}`}
                    className="sliderImage"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                )}
              </div>
            );
          })}
          <div className="heroOverlay"></div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 4 }}>
          <div className="heroContent">
            <div className="heroText">
              <div className="badge">
                <span className="badgeDot"></span>
                <span>رواد الصناعات الثقيلة منذ 2016</span>
              </div>
              <h2 className="heroTitle">
                نصنع القوة لتشييد المستقبل بـ <span className="gradient-text">أعلى كفاءة</span>
              </h2>
              <p className="heroDesc">
                شركة الإمتياز رائدة تصنيع محطات الخرسانة الجاهزة بجميع مشتملاتها، الغرابيل، وسيور النقل، والصوامع وتجهيزات مصانع الإنترلوك. نوفر حلولًا هندسية متكاملة لشركائنا في مصر وليبيا مع خدمة صيانة وأعطال على مدار 24 ساعة تحت الطلب.
              </p>
              <div className="heroButtons">
                <a href="#products" className="glow-btn">
                  <span>تصفح المنتجات</span>
                </a>
                <a href="https://wa.me/201070833314" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                  <WhatsAppIcon />
                  <span>طلب اتصال واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Dots Indicator placed at the bottom center of the hero section */}
        <div className="sliderDots">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              className={`sliderDot ${index === currentSlide ? "sliderDotActive" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`الذهاب للشريحة ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats">
        <div className="container statsGrid">
          <div className="statItem">
            <span className="statNum">2016</span>
            <span className="statLabel">عام التأسيس والبداية</span>
          </div>
          <div className="statItem">
            <span className="statNum">+120م³</span>
            <span className="statLabel">القدرة الإنتاجية للمحطات</span>
          </div>
          <div className="statItem">
            <span className="statNum">24/7</span>
            <span className="statLabel">صيانة ودعم على مدار الساعة</span>
          </div>
          <div className="statItem">
            <span className="statNum">100%</span>
            <span className="statLabel">فريق عمل وخبرات وطنية متمرسة</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section" style={{ background: "linear-gradient(180deg, var(--bg-base) 0%, rgba(18,20,24,0.4) 100%)" }}>
        <div className="container">
          <div className="contactGrid" style={{ alignItems: "center" }}>
            <div>
              <div className="imageFrame" style={{ aspectRatio: "4/3" }}>
                <img
                  src="/images/486444843_1069345568544949_7618368949671730782_n.jpg"
                  alt="معدات ومصانع خرسانة شركة الإمتياز"
                  className="cardImage"
                />
                <div className="glowOverlay"></div>
              </div>
            </div>
            <div>
              <span className="sectionSub">من نحن</span>
              <h3 className="sectionTitle">شركة الإمتياز لتصنيع محطات الخرسانة</h3>
              <p style={{ marginBottom: "20px", fontSize: "1.05rem" }}>
                انطلقت مسيرتنا في عام 2016 كشركة مصرية متخصصة في التصنيع الهندسي والميكانيكي لمعدات مصانع الخرسانة ومستلزماتها. على مدار السنوات، نجحنا في كسب ثقة كبرى شركات المقاولات والخرسانة الجاهزة في مصر والدول المجاورة مثل ليبيا.
              </p>
              <p style={{ marginBottom: "30px" }}>
                نتميز بالانفراد بوجود فريق عمل وهندسي متمرس ذي خبرة واسعة في عمليات التصميم والتصنيع، إلى جانب فريق صيانة وأعطال فوري، مجهز للتحرك على مدار 24 ساعة لضمان استمرارية عمل المحطات دون توقف.
              </p>
              <div className="contactInfo" style={{ gap: "20px" }}>
                <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                  <div className="infoIcon" style={{ width: "40px", height: "40px", fontSize: "1rem" }}><ShieldCheckIcon /></div>
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "white" }}>التصنيع بجميع المشتملات</h4>
                    <p style={{ fontSize: "0.85rem" }}>من السيلوهات وخزانات الوقود وحتى مجرشات الثلج وسيور النقل المحورية.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                  <div className="infoIcon" style={{ width: "40px", height: "40px", fontSize: "1rem" }}><MaintenanceIcon /></div>
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "white" }}>فريق الصيانة السريع 24 ساعة</h4>
                    <p style={{ fontSize: "0.85rem" }}>نحن جاهزون وتحت الطلب لمواجهة أي أعطال طارئة فورًا.</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "30px" }}>
                <Link to="/about" className="infoLink" style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "1.05rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  اقرأ تفاصيل قصة نجاح الشركة وقدراتنا الصناعية ←
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="section" style={{ paddingTop: "60px", paddingBottom: "100px", borderTop: "1px solid var(--border-subtle)", background: "var(--bg-base)" }}>
        <div className="container">
          <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "45px" }}>
            <h3 className="sectionTitle" style={{ fontSize: "2.3rem", fontWeight: "900" }}>ركائزنا الإستراتيجية</h3>
            <p className="sectionDesc" style={{ margin: "0 auto", maxWidth: "600px" }}>الأسس والقيم التي نوجه بها أعمالنا نحو المستقبل</p>
          </div>

          <div className="pillarsGrid">
            <div className="pillarCard">
              <div className="pillarIconWrapper">
                <EyeIcon />
              </div>
              <h4 style={{ fontSize: "1.4rem", color: "white", fontWeight: "800", marginBottom: "15px" }}>رؤيتنا</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
                أن نصبح الاسم الأول والشركة الرائدة في تصميم وتصنيع محطات الخرسانة الجاهزة والصوامع في مصر والشرق الأوسط، مدعومة بجودة فائقة تنافس المنتجات العالمية.
              </p>
            </div>

            <div className="pillarCard">
              <div className="pillarIconWrapper">
                <TargetIcon />
              </div>
              <h4 style={{ fontSize: "1.4rem", color: "white", fontWeight: "800", marginBottom: "15px" }}>رسالتنا</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
                تحقيق التميز التشغيلي لعملائنا من خلال تقديم خلاطات ومحطات ذات كفاءة واعتمادية شاقة، مدعومة بخدمات صيانة ودعم هندسي على مدار الساعة بأفضل تكلفة استثمارية.
              </p>
            </div>

            <div className="pillarCard">
              <div className="pillarIconWrapper">
                <TrophyIcon />
              </div>
              <h4 style={{ fontSize: "1.4rem", color: "white", fontWeight: "800", marginBottom: "15px" }}>أهدافنا</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
                توطين الصناعات الثقيلة محلياً، وبناء علاقات شراكة طويلة الأمد مبنية على الثقة المتبادلة وتوفير خدمات الصيانة الوقائية السريعة دون تسبب في توقف أعمال عملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Fields of Work (Showcase) Section */}
      <section id="products" className="section" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="container">
          <div className="sectionHeader">
            <span className="sectionSub">مجالات عملنا الرئيسية</span>
            <h3 className="sectionTitle">خدمات وحلول مصممة لتلبية متطلبات بيئات العمل القاسية</h3>
            <p className="sectionDesc">
              استكشف مجالات تصنيعنا وخدماتنا الرئيسية. انقر على أي مجال لعرض تفاصيل المنتجات الفردية والمواصفات الكاملة.
            </p>
          </div>

          <div className="categoryGrid">
            {MAIN_CATEGORIES_SHOWCASE.map((item, index) => (
              <article key={index} className="categoryCard">
                <div className="cardImageContainer" style={{ aspectRatio: "16/11" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cardImage"
                    loading="lazy"
                  />
                </div>
                <div className="cardBody" style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h4 className="cardTitle" style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "12px", color: "white" }}>{item.title}</h4>
                  <p className="cardDesc" style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>{item.description}</p>
                  <Link to={item.link} className="categoryCardBtn">
                    عرض التفاصيل
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library Section */}
      <section className="videoSection">
        <div className="container">
          <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "45px" }}>
            <span className="sectionSub">الفيديوهات الميدانية</span>
            <h3 className="sectionTitle" style={{ fontSize: "2.3rem", fontWeight: "900" }}>محطاتنا في مواقع العمل</h3>
            <p className="sectionDesc" style={{ margin: "0 auto", maxWidth: "600px" }}>شاهد عروضًا مرئية لتشغيل وإنتاج محطات الخرسانة ومعدات شركة الإمتياز في الميدان</p>
          </div>

          <div className="videosGrid">
            <div className="videoCard">
              <div className="videoWrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="تشغيل محطة خرسانة ثابتة سعة 120م³"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="videoInfo">
                <h4 className="videoTitle">تشغيل محطة خرسانة ثابتة سعة 120م³</h4>
                <p className="videoDesc">تغطية مرئية توضح عملية الخلط الآلي وتفريغ الخرسانة الجاهزة بأعلى دقة وسرعة إنتاجية في الموقع.</p>
              </div>
            </div>

            <div className="videoCard">
              <div className="videoWrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="تصنيع وتوريد سيلوهات الإسمنت"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="videoInfo">
                <h4 className="videoTitle">تصنيع وتوريد سيلوهات الإسمنت 150 طن</h4>
                <p className="videoDesc">شرح عملي لخطوات تركيب الصوامع الفولاذية في الموقع مع أنظمة الفلترة والأمان.</p>
              </div>
            </div>

            <div className="videoCard">
              <div className="videoWrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="أعمال الصيانة والدعم الفني"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="videoInfo">
                <h4 className="videoTitle">أعمال الصيانة والدعم الفني للمحطات</h4>
                <p className="videoDesc">لقطات ميدانية لفريق الصيانة الطارئ أثناء نقل وتحديث لوحات التحكم والتشغيل.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Partners Section */}
      <section id="partners" className="partners">
        <div className="container">
          <div className="sectionHeader" style={{ marginBottom: "40px" }}>
            <span className="sectionSub">بنينا ثقتهم</span>
            <h3 className="sectionTitle">شركاء النجاح</h3>
            <p className="sectionDesc">نفخر بخدمة ودعم كبرى الشركات والمشاريع الهندسية في السوق المصري والليبي منذ عام 2016.</p>
          </div>

          <div className="marqueeContainer">
            <div className="marqueeTrack">
              {PARTNERS.map((partner, index) => (
                <div key={`p1-${index}`} className="marqueeItem">
                  <span className="partnerName">{partner}</span>
                </div>
              ))}
              {/* Duplicate track to make it infinite and seamless */}
              {PARTNERS.map((partner, index) => (
                <div key={`p2-${index}`} className="marqueeItem">
                  <span className="partnerName">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="sectionHeader">
            <span className="sectionSub">تواصل معنا</span>
            <h3 className="sectionTitle">نحن في خدمتكم دائمًا</h3>
            <p className="sectionDesc">يرجى الاتصال بنا عبر الهواتف المخصصة أو زيارة مقر مصنعنا، كما يمكنكم إرسال استفساركم مباشرة عبر النموذج وسوف نتصل بكم فورًا.</p>
          </div>

          <div className="contactGrid">
            {/* Column 1 (Right): The Form */}
            <div className="contactForm">
              <h4 className="formTitle">أرسل استفسارك الآن</h4>
              <form onSubmit={handleContactSubmit}>
                <div className="formGroup">
                  <label className="formLabel">اسم المؤسسة أو العميل</label>
                  <input
                    type="text"
                    required
                    className="formInput"
                    placeholder="مثال: شركة الإعمار للمقاولات"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="formGroup">
                  <label className="formLabel">رقم الهاتف (الواتساب)</label>
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
                  <label className="formLabel">تفاصيل الاستفسار أو المنتج المطلوب</label>
                  <textarea
                    required
                    className="formTextarea"
                    placeholder="اكتب هنا مواصفات محطة الخرسانة أو المعدات المطلوبة..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="whatsapp-btn formBtn">
                  <WhatsAppIcon />
                  <span>إرسال الطلب عبر واتساب</span>
                </button>
              </form>
              {formSubmitted && (
                <div style={{ marginTop: "15px", color: "var(--whatsapp-color)", fontSize: "0.85rem", textAlign: "center", fontWeight: "bold" }}>
                  سيتم فتح تطبيق الواتساب لإرسال رسالتك مباشرة للإدارة. شكراً لتواصلك!
                </div>
              )}
            </div>

            {/* Column 2 (Left): Contact Information */}
            <div className="contactInfo">
              <div className="infoItem">
                <div className="infoIcon">
                  <MapPinIcon />
                </div>
                <div className="infoContent">
                  <h4>مقر المصنع والعنوان</h4>
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
                  <WhatsAppIcon />
                </div>
                <div className="infoContent">
                  <h4>إدارة المبيعات والتعاقدات</h4>
                  <p>لطلبات الشراء والتعاقدات والاستفسارات الفنية والتجارية:</p>
                  <a href="tel:01070833314" className="infoLink">01070833314</a>
                  <a href="https://wa.me/201070833314" target="_blank" rel="noopener noreferrer" style={{ color: "var(--whatsapp-color)", fontWeight: "bold" }}>
                    تحدث معنا عبر واتساب مباشرة
                  </a>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon">
                  <MaintenanceIcon />
                </div>
                <div className="infoContent">
                  <h4>قسم الصيانة والأعطال (24 ساعة)</h4>
                  <p>لطلبات الصيانة الفورية، الفك والتركيب، وحالات الطوارئ الميكانيكية:</p>
                  <a href="tel:01070833312" className="infoLink">01070833312</a>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon" style={{ color: "#3b5998" }}>
                  <FacebookIcon />
                </div>
                <div className="infoContent">
                  <h4>الصفحة الرسمية على فيسبوك</h4>
                  <p>تابعوا أحدث تسليمات محطاتنا وصور من مواقع العمل والإنتاج:</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100064085473050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="infoLink"
                  >
                    صفحة شركة الإمتياز على فيسبوك
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Underneath: Real Interactive Google Map */}
          <div style={{ marginTop: "40px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-subtle)", height: "450px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6983756260176!2d31.203142376288607!3d30.307585474797087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587334f58d70cf%3A0xbf639a512a7c76ff!2z2YXYstmE2YLYp9mGINsp2YPZiiAtINin2KzZh9mI2LEg2KfZhNmD2KjYsdmJ!5e0!3m2!1sar!2seg!4v1721400000000!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة الإمتياز على خرائط جوجل"
            ></iframe>
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
