import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEO from '../components/SEO';
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  AwardIcon,
  ShieldCheckIcon,
  MaintenanceIcon,
  TimeIcon,
  FacebookIcon,
  EyeIcon,
  TargetIcon,
  TrophyIcon
} from '../components/Icons';
import { getImageUrl } from '../utils/image';
import '../page.css';

interface MainCategory {
  title: string;
  description: string;
  image: string;
  link: string;
}

const MAIN_CATEGORIES: MainCategory[] = [
  {
    title: "محطات الخرسانة الجاهزة",
    description: "تصنيع وتجهيز محطات الخرسانة الثابتة والمتحركة ومصانع الإنترلوك بمختلف السعات والقدرات التشغيلية من 80 إلى 120م³.",
    image: "/images/mixer_2m_tower.webp",
    link: "/products?category=batching"
  },
  {
    title: "المهزات والسيور الناقلة",
    description: "تصنيع مهزات الركام وغربال السن بمختلف المقاسات، وسيور التغذية وسيور نقل المواد المحورية الشاقة.",
    image: "/images/سيور2.webp",
    link: "/products?category=screening"
  },
  {
    title: "السيلوهات والخزانات الصناعية",
    description: "تصنيع سيلوهات تخزين الإسمنت الفولاذية بسعة 120 و 150 طن وتوريد خزانات الوقود والمياه والمعالجات الكيميائية.",
    image: "/images/هيدر0.webp",
    link: "/products?category=silos"
  },
  {
    title: "خدمات الصيانة والتركيب",
    description: "فك ونقل المحطات، وزيادة السعات والقدرات التشغيلية، وتوفير قطع الغيار الفورية، مع دعم فني طارئ 24 ساعة.",
    image: "/images/هيدر3.webp",
    link: "/products?category=spare"
  }
];

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/هيرو.jpeg",
    title: "شركة إمتياز لتصنيع محطات الخرسانة ومعدات البناء",
    subtitle: "شريكك الأول في صناعة الجودة وتجهيز المحطات والمصانع"
  },
  {
    image: "/images/هيدر1.webp",
    title: "محطات خرسانة جاهزة متطورة",
    subtitle: "قدرات تشغيلية وإنتاجية من 80 إلى 120م³ / ساعة"
  },
  {
    image: "/images/هيدر2.webp",
    title: "خلاطات وسيلوهات تخزين وتغذية",
    subtitle: "تصنيع دقيق متوافق مع أعلى المواصفات القياسية"
  },
  {
    image: "/images/هيدر3.webp",
    title: "محطات مركزية ومصانع إنترلوك",
    subtitle: "جاهزية تشغيل كاملة لمشروعات التشييد والبنية التحتية"
  },
  {
    image: "/images/هيدر0.webp",
    title: "سيلوهات إسمنت فولاذية ومعدات مناولة",
    subtitle: "سعات تخزين 120 و 150 طن ومعدات تصنيع متطورة"
  }
];

interface PartnerItem {
  name: string;
  shortCode: string;
  category: string;
  color: string;
  logo?: string;
}

const PARTNERS: PartnerItem[] = [
  { name: "اوجي مكس", shortCode: "OG", category: "خرسانة جاهزة", color: "#f59e0b", logo: "/images/شركات/اوجي مكس.webp" },
  { name: "الاتحاد", shortCode: "IT", category: "مقاولات وخرسانة", color: "#3b82f6" },
  { name: "شركة النور جراند", shortCode: "NG", category: "تطوير واستثمار", color: "#10b981" },
  { name: "شركة ام اتش", shortCode: "MH", category: "صناعات هندسية", color: "#ef4444", logo: "/images/شركات/ام اتش .webp" },
  { name: "شركة تلال", shortCode: "TL", category: "خرسانة ومقاولات", color: "#8b5cf6" },
  { name: "الفا ميكس", shortCode: "AM", category: "خلطات خرسانية", color: "#06b6d4", logo: "/images/شركات/الفا ميكس.webp" },
  { name: "بتر مكس", shortCode: "BM", category: "خرسانة متطورة", color: "#f97316", logo: "/images/شركات/شركة بترمكس.webp" },
  { name: "يوني بيلد", shortCode: "UB", category: "حلول البناء الحديث", color: "#14b8a6", logo: "/images/شركات/يوني بيلد .webp" },
  { name: "شركة اعمار ميكس", shortCode: "EM", category: "خرسانة ومقاولات", color: "#ec4899", logo: "/images/شركات/عمار ميكس .webp" },
  { name: "شركة دلتا للمشروعات الهندسية", shortCode: "DL", category: "مشروعات هندسية", color: "#6366f1" },
  { name: "ميناء ايكوبات", shortCode: "ME", category: "أعمال بحرية وخرسانة", color: "#22c55e", logo: "/images/شركات/ايكوبات .webp" },
  { name: "شركة صن كريت", shortCode: "SC", category: "خرسانة جاهزة", color: "#eab308", logo: "/images/شركات/صن كريت .webp" },
  { name: "يوني مكس", shortCode: "UM", category: "خرسانة جاهزة", color: "#0ea5e9", logo: "/images/شركات/يوني مكس.webp" },
  { name: "ميجا بارست", shortCode: "MP", category: "خرسانة ومعدات", color: "#a855f7" }
];

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  duration?: number;
}

function StatCard({ value, prefix = "", suffix = "", label, icon: Icon, duration = 2000 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, value, duration]);

  return (
    <div className="statItem" ref={ref}>
      <div className="statIconWrap">
        <Icon size={24} />
      </div>
      <div className="statNumWrap">
        {prefix && <span className="statPrefix">{prefix}</span>}
        <span className="statNum">{count}</span>
        {suffix && <span className="statSuffix">{suffix}</span>}
      </div>
      <span className="statLabel">{label}</span>
    </div>
  );
}

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
        title="شركة إمتياز لتصنيع محطات الخرسانة الجاهزة والسيلوهات ومشتملاتها"
        description="شركة إمتياز الرائدة في تصنيع محطات الخرسانة الجاهزة الثابتة والمتحركة وسيلوهات الإسمنت والمهزات والسيور في مصر والشرق الأوسط مع صيانة 24 ساعة."
      />

      <Navbar />

      <main>
        {/* Hero Section with Full Background Slider */}
        <section id="home" className="hero" aria-label="الواجهة الرئيسية ومحطات الخرسانة">
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
                      src={getImageUrl(slide.image)}
                      alt={slide.title}
                      className="sliderImage"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  )}
                </div>
              );
            })}
            <div className="heroOverlay"></div>
          </div>

          <div className="container heroContainer">
            <div className="heroContent">
              <div className="heroText">
                <div className="badge">
                  <span className="badgeDot"></span>
                  <span>رواد تصنيع محطات الخرسانة منذ 2016</span>
                </div>
                <h1 className="heroTitle">
                  نصنع القوة لتشييد المستقبل بـ <span className="gradient-text">أعلى كفاءة</span>
                </h1>
                <p className="heroDesc">
                  شركة إمتياز رائدة تصنيع وتوريد محطات الخرسانة الجاهزة بجميع مشتملاتها، المهزات، وسيور النقل، والصوامع وتجهيزات مصانع الإنترلوك. نوفر حلولًا هندسية متكاملة لشركائنا في مصر وليبيا مع خدمة صيانة وأعطال على مدار 24 ساعة تحت الطلب.
                </p>
                <div className="heroButtons">
                  <Link to="/products" className="glow-btn">
                    <span>تصفح المنتجات والمعدات</span>
                  </Link>
                  <a
                    href="https://wa.me/201070833313?text=مرحباً،%20أود%20الاستفسار%20عن%20محطات%20الخرسانة"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    <WhatsAppIcon size={20} />
                    <span>طلب اتصال واتساب فوري</span>
                  </a>
                </div>
                <div className="heroBadgesList">
                  <div className="heroBadgeItem">
                    <ShieldCheckIcon size={20} />
                    <span>ضمان وجودة قياسية</span>
                  </div>
                  <div className="heroBadgeItem">
                    <MaintenanceIcon size={20} />
                    <span>صيانة فورية 24/7</span>
                  </div>
                  <div className="heroBadgeItem">
                    <AwardIcon size={20} />
                    <span>تصنيع مصري 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Slider Navigation */}
          <div className="heroSliderControls">
            <div className="heroSlideInfo">
              <span className="heroSlideTag">المعدة المعروضة</span>
              <span className="heroSlideTitle">{HERO_SLIDES[currentSlide].title}</span>
            </div>
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
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="stats" aria-label="أرقام وإحصائيات شركة إمتياز">
          <div className="container statsGrid">
            <StatCard
              value={2016}
              label="عام التأسيس والبداية"
              icon={AwardIcon}
              duration={2200}
            />
            <StatCard
              value={120}
              prefix="+"
              suffix="م³"
              label="القدرة الإنتاجية للمحطات في الساعة"
              icon={TargetIcon}
              duration={2000}
            />
            <StatCard
              value={24}
              suffix="/7"
              label="صيانة ودعم على مدار الساعة"
              icon={TimeIcon}
              duration={1800}
            />
            <StatCard
              value={100}
              suffix="%"
              label="فريق عمل وخبرات وطنية متمرسة"
              icon={ShieldCheckIcon}
              duration={2000}
            />
          </div>
        </section>

        {/* About Us Preview */}
        <section id="about" className="section" style={{ background: "linear-gradient(180deg, var(--bg-base) 0%, rgba(18,20,24,0.4) 100%)" }}>
          <div className="container">
            <div className="contactGrid" style={{ alignItems: "center" }}>
              <div>
                <div className="imageFrame" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={getImageUrl("/images/mixer_2m_tower.webp")}
                    alt="معدات ومصانع خرسانة شركة إمتياز"
                    className="cardImage"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glowOverlay"></div>
                </div>
              </div>
              <div>
                <span className="sectionSub">من نحن</span>
                <h2 className="sectionTitle">شركة إمتياز لتصنيع محطات الخرسانة</h2>
                <p style={{ marginBottom: "20px", fontSize: "1.05rem" }}>
                  انطلقت مسيرتنا في عام 2016 كشركة مصرية متخصصة في التصنيع الهندسي والميكانيكي لمعدات مصانع الخرسانة ومستلزماتها. على مدار السنوات، نجحنا في كسب ثقة كبرى شركات المقاولات والخرسانة الجاهزة في مصر والدول المجاورة مثل ليبيا.
                </p>
                <p style={{ marginBottom: "30px" }}>
                  نتميز بالانفراد بوجود فريق عمل وهندسي متمرس ذي خبرة واسعة في عمليات التصميم والتصنيع، إلى جانب فريق صيانة وأعطال فوري، مجهز للتحرك على مدار 24 ساعة لضمان استمرارية عمل المحطات دون توقف.
                </p>
                <div className="contactInfo" style={{ gap: "20px" }}>
                  <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                    <div className="infoIcon" style={{ width: "40px", height: "40px" }}><ShieldCheckIcon size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: "1rem", color: "white" }}>التصنيع بجميع المشتملات</h4>
                      <p style={{ fontSize: "0.85rem" }}>من السيلوهات وخزانات الوقود وحتى مجرشات الثلج وسيور النقل المحورية.</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                    <div className="infoIcon" style={{ width: "40px", height: "40px" }}><MaintenanceIcon size={20} /></div>
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
              <h2 className="sectionTitle" style={{ fontSize: "2.3rem", fontWeight: "900" }}>ركائزنا الإستراتيجية</h2>
              <p className="sectionDesc" style={{ margin: "0 auto", maxWidth: "600px" }}>الأسس والقيم التي نوجه بها أعمالنا نحو التميز والتصدر</p>
            </div>

            <div className="pillarsGrid">
              <div className="pillarCard">
                <div className="pillarIconWrapper">
                  <EyeIcon size={32} />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "white", fontWeight: "800", marginBottom: "15px" }}>رؤيتنا</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
                  أن نصبح الاسم الأول والشركة الرائدة في تصميم وتصنيع محطات الخرسانة الجاهزة والصوامع في مصر والشرق الأوسط، مدعومة بجودة فائقة تنافس المنتجات العالمية.
                </p>
              </div>

              <div className="pillarCard">
                <div className="pillarIconWrapper">
                  <TargetIcon size={32} />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "white", fontWeight: "800", marginBottom: "15px" }}>رسالتنا</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
                  تحقيق التميز التشغيلي لعملائنا من خلال تقديم خلاطات ومحطات ذات كفاءة واعتمادية شاقة، مدعومة بخدمات صيانة ودعم هندسي على مدار الساعة بأفضل تكلفة استثمارية.
                </p>
              </div>

              <div className="pillarCard">
                <div className="pillarIconWrapper">
                  <TrophyIcon size={32} />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "white", fontWeight: "800", marginBottom: "15px" }}>أهدافنا</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
                  توطين الصناعات الثقيلة محلياً، وبناء علاقات شراكة طويلة الأمد مبنية على الثقة المتبادلة وتوفير خدمات الصيانة الوقائية السريعة دون تسبب في توقف أعمال عملائنا.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Work Categories Showcase */}
        <section id="products" className="section" style={{ backgroundColor: "var(--bg-base)" }}>
          <div className="container">
            <div className="sectionHeader">
              <span className="sectionSub">مجالات عملنا الرئيسية</span>
              <h2 className="sectionTitle">خدمات وحلول مصممة لتلبية متطلبات بيئات العمل القاسية</h2>
              <p className="sectionDesc">
                استكشف مجالات تصنيعنا وخدماتنا الرئيسية. انقر على أي مجال لعرض تفاصيل المنتجات الفردية والمواصفات الكاملة.
              </p>
            </div>

            <div className="categoryGrid">
              {MAIN_CATEGORIES.map((item, index) => (
                <article key={index} className="categoryCard">
                  <div className="cardImageContainer" style={{ aspectRatio: "16/11" }}>
                    <img
                      src={getImageUrl(item.image)}
                      alt={item.title}
                      className="cardImage"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="cardBody" style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 className="cardTitle" style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "12px", color: "white" }}>{item.title}</h3>
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
              <h2 className="sectionTitle" style={{ fontSize: "2.3rem", fontWeight: "900" }}>محطاتنا في مواقع العمل الميداني</h2>
              <p className="sectionDesc" style={{ margin: "0 auto", maxWidth: "600px" }}>شاهد عروضًا مرئية لتشغيل وإنتاج محطات الخرسانة ومعدات شركة إمتياز في الميدان</p>
            </div>

            <div className="videosGrid">
              <div className="videoCard">
                <div className="videoWrapper">
                  <video controls preload="metadata" playsInline>
                    <source src={getImageUrl("/فيديو1.mp4")} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو.
                  </video>
                </div>
                <div className="videoInfo">
                  <h3 className="videoTitle">تشغيل محطة خرسانة ثابتة سعة 120م³</h3>
                  <p className="videoDesc">تغطية مرئية توضح عملية الخلط الآلي وتفريغ الخرسانة الجاهزة بأعلى دقة وسرعة إنتاجية في الموقع.</p>
                </div>
              </div>

              <div className="videoCard">
                <div className="videoWrapper">
                  <video controls preload="metadata" playsInline>
                    <source src={getImageUrl("/فيديو2.mp4")} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو.
                  </video>
                </div>
                <div className="videoInfo">
                  <h3 className="videoTitle">تصنيع وتوريد سيلوهات الإسمنت 150 طن</h3>
                  <p className="videoDesc">شرح عملي لخطوات تركيب الصوامع الفولاذية في الموقع مع أنظمة الفلترة والأمان.</p>
                </div>
              </div>

              <div className="videoCard">
                <div className="videoWrapper">
                  <video controls preload="metadata" playsInline>
                    <source src={getImageUrl("/فيديو3.mp4")} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو.
                  </video>
                </div>
                <div className="videoInfo">
                  <h3 className="videoTitle">أعمال الصيانة والدعم الفني للمحطات</h3>
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
              <h2 className="sectionTitle">شركاء النجاح</h2>
              <p className="sectionDesc">نفخر بخدمة ودعم كبرى الشركات والمشاريع الهندسية في السوق المصري والليبي منذ عام 2016.</p>
            </div>

            <div className="marqueeContainer">
              <div className="marqueeTrack">
                {PARTNERS.concat(PARTNERS).map((partner, index) => (
                  <div key={index} className="marqueeItem">
                    <div className="partnerLogoBadge" style={{ borderColor: partner.color, background: `${partner.color}18` }}>
                      {partner.logo ? (
                        <img src={getImageUrl(partner.logo)} alt={partner.name} className="partnerLogoImg" loading="lazy" />
                      ) : (
                        <span className="partnerLogoText" style={{ color: partner.color }}>{partner.shortCode}</span>
                      )}
                    </div>
                    <div className="partnerInfo">
                      <span className="partnerName">{partner.name}</span>
                      <span className="partnerCategory">{partner.category}</span>
                    </div>
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
              <h2 className="sectionTitle">نحن في خدمتكم دائمًا</h2>
              <p className="sectionDesc">يرجى الاتصال بنا عبر الهواتف المخصصة أو زيارة مقر مصنعنا، كما يمكنكم إرسال استفساركم مباشرة عبر النموذج وسوف نتصل بكم فورًا.</p>
            </div>

            <div className="contactGrid">
              {/* Form */}
              <div className="contactForm">
                <h3 className="formTitle">أرسل استفسارك الآن</h3>
                <form onSubmit={handleContactSubmit}>
                  <div className="formGroup">
                    <label className="formLabel" htmlFor="company-name">اسم المؤسسة أو العميل</label>
                    <input
                      id="company-name"
                      type="text"
                      required
                      className="formInput"
                      placeholder="مثال: شركة الإعمار للمقاولات"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel" htmlFor="phone-number">رقم الهاتف (الواتساب)</label>
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      className="formInput"
                      placeholder="مثال: 010XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel" htmlFor="inquiry-message">تفاصيل الاستفسار أو المنتج المطلوب</label>
                    <textarea
                      id="inquiry-message"
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

              {/* Contact Information */}
              <div className="contactInfo">
                <div className="infoItem">
                  <div className="infoIcon">
                    <MapPinIcon size={20} />
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
                    <WhatsAppIcon size={20} />
                  </div>
                  <div className="infoContent">
                    <h4>إدارة المبيعات والتعاقدات</h4>
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
                    <h4>قسم الصيانة والأعطال (24 ساعة)</h4>
                    <p>لطلبات الصيانة الفورية، الفك والتركيب، وحالات الطوارئ الميكانيكية:</p>
                    <a href="tel:01070833312" className="infoLink" dir="ltr">01070833312</a>
                  </div>
                </div>

                <div className="infoItem">
                  <div className="infoIcon" style={{ color: "#3b5998" }}>
                    <FacebookIcon size={20} />
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
                      صفحة شركة إمتياز على فيسبوك
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div style={{ marginTop: "40px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-subtle)", height: "450px" }}>
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
