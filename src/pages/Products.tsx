import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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

interface Category {
  id: string;
  name: string;
}

const CATEGORIES: Category[] = [
  { id: "all", name: "الكل" },
  { id: "batching", name: "محطات الخرسانة" },
  { id: "screening", name: "الغربلة والسيور" },
  { id: "silos", name: "السيلوهات والخزانات" },
  { id: "spare", name: "قطع الغيار والخدمات" }
];

interface Product {
  id: number;
  title: string;
  category: string;
  categoryName: string;
  description: string;
  image: string;
}

const SPARE_PART_NAMES = [
  "كاوتشة ماية بكل المقاسات",
  "كرسي عمدان مكسر",
  "وصل سريعة وتهات معدن",
  "كراسي سكروهات بكل المقاسات",
  "فرش عالي بدن المكسر",
  "سكروهات بكل المقاسات",
  "اقماع تفريغ وفرش داخلي بكل المقاسات",
  "اطقم اصلاح لجميع المقاسات",
  "كرسي عمدان مكسر",
  "كبلن بلي مشرشر",
  "بلي cfk بضمان توكيل سنة",
  "فايز للسيلوهات",
  "شبك مهزات بكل المقاسات",
  "درعات تقليب",
  "طنابير نقل حركة",
  "كراسي مكسر cm",
  "سكروهات بكل المقاسات",
  "كراسي مكسر CM",
  "كراسي سكروهات بكل المقاسات",
  "كراسي مكسر cm",
  "لوحة كنترول",
  "بوابات بجميع المقاسات",
  "كراسي سكروهات بكل المقاسات",
  "مواتير ودربكسات ايطالي بكل المقاسات",
  "فرش عالي بدل المكسر",
  "دربكسات سكروهات",
  "كرسي عمدان مكسر",
  "دربكسات سكروهات",
  "كراسي مكسر cm",
  "حساسات اشارة",
  "كفف تقليب ومساحات مستوردة"
];

const BASE_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "محطات خرسانة ثابتة سعة 120م³",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع وتوريد محطات الخرسانة الثابتة بسعة إنتاجية قدرها 120 مترًا مكعبًا في الساعة. صُممت محطاتنا للخدمة الشاقة ومزودة بأحدث خلاطات خرسانة وأنظمة تحكم آلية دقيقة تضمن جودة وإنتاجية متواصلة.",
    image: "/emtiaz/images/486471563_1069345438544962_872698005021278874_n.jpg"
  },
  {
    id: 2,
    title: "محطات خرسانة متحركة (80م³ - 120م³)",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع محطات خرسانة متحركة على شاسيهات مقطورة متكاملة لسهولة النقل من موقع لآخر وسرعة التركيب والتشغيل. السعة الإنتاجية تتراوح من 80 مترًا إلى 120 مترًا مكعبًا في الساعة.",
    image: "/emtiaz/images/489447717_1081447364001436_7369565754761327534_n.jpg"
  },
  {
    id: 14,
    title: "مكسر 2 متر بالبرج",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع خلاط ومكسر خرسانة سعة 2 متر مكعب مثبت على برج هيكلي متين ومزود بسلم صعود ومنصة صيانة واسعة، صُمم بأعلى المعايير الهندسية لضمان الخلط المتجانس والسريع للخرسانة الجاهزة.",
    image: "/emtiaz/images/mixer_2m_tower.jpg"
  },
  {
    id: 15,
    title: "فيدر بوكس",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع وتوريد قواديس وخزانات التغذية (فيدر بوكس) بمختلف المقاسات، مصنعة من الهياكل الصلبة القوية ومزودة ببوابات تفريغ هيدروليكية ونظام تغذية دقيق للركام والمواد.",
    image: "/emtiaz/images/feeder_box.jpg"
  },
  {
    id: 3,
    title: "سيلوهات إسمنت (150 طن و120 طن)",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "تصنيع سيلوهات إسمنت عمودية بسعة 150 طنًا و120 طنًا. مبنية من أجود أنواع الصلب السميك المقاوم للتآكل ومجهة بفلاتر هواء، وصمامات أمان لتخزين الإسمنت بكفاءة وسلامة تامة.",
    image: "/emtiaz/images/double_cement_silos.jpg"
  },
  {
    id: 12,
    title: "سيلو اسمنت سعة تخزين 150 طن",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "سيلو إسمنت عالي الجودة بسعة تخزينية 150 طن، مجهز بسلم حماية جانبي وقواعد تثبيت قوية، مصنع من الصلب المقاوم للتآكل والعوامل الجوية لضمان تخزين وتفريغ الإسمنت بأعلى كفاءة وأمان.",
    image: "/emtiaz/images/silo_150_ton.jpg"
  },
  {
    id: 13,
    title: "تانك مياه 57 ألف لتر عزل صوف حراري وكسوة ألمونيوم",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "تصنيع وتجهيز خزان مياه ضخم بسعة 57,000 لتر، مزود بعزل حراري عالي الكفاءة من الصوف الحراري وكسوة خارجية حامية من ألواح الألمونيوم المقاومة للظروف الجوية الصعبة وللحفاظ على حرارة المياه.",
    image: "/emtiaz/images/water_tank_57k.jpg"
  },
  {
    id: 4,
    title: "مهزات رمل وسن بمقاسات مختلفة",
    category: "screening",
    categoryName: "غربلة وسيور",
    description: "تصنيع مهزات سن ورمل (غربال ركام) بجميع المقاسات المتفاوتة والمختلفة، وبأنظمة اهتزاز ميكانيكية متطورة لتصنيف وفصل الركام لضمان خلطة خرسانية مطابقة للمواصفات الهندسية.",
    image: "/emtiaz/images/486641740_1069345401878299_2779942071246690946_n.jpg"
  },
  {
    id: 16,
    title: "سير محوري",
    category: "screening",
    categoryName: "غربلة وسيور",
    description: "تصنيع وتوريد السيور المحورية والدوارة المخصصة لنقل وتوزيع الركام والحصى بكفاءة عالية في محطات الخرسانة ومواقع الغربلة، تتميز بهيكل جمالوني فولاذي شديد التحمل ونظام حركة مرن.",
    image: "/emtiaz/images/pivot_conveyor.jpg"
  },
  {
    id: 6,
    title: "خزانات مياه وسولار ومواد إضافية",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "تصنيع خزانات مياه وخزانات وقود (سولار) وخزانات المواد الإضافية الكيميائية بجميع الأحجام والسعات اللترية المطلوبة، معالجة داخليًا وخارجيًا ضد الصدأ والتسريب.",
    image: "/emtiaz/images/486603129_1069345668544939_3168069876910589249_n.jpg"
  },
  {
    id: 7,
    title: "كسارات وجاروشة الثلج الصناعية",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "تصنيع وتوريد مجرشات وجوارش ثلج صناعية قوية، مخصصة لكسر الثلج المضاف للخلطة الخرسانية لخفض درجة حرارتها أثناء الصب في الأجواء الحارة.",
    image: "/emtiaz/images/584132553_1264421732370664_6616535584646022451_n.jpg"
  },
  {
    id: 8,
    title: "محطات الإنترلوك المتكاملة",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع وتركيب محطات وخطوط إنتاج الإنترلوك والبردورات والبلوك الإسمنتي بجميع مشتملاتها من خلاطات وسيور ومكابس آلية ونصف آلية.",
    image: "/emtiaz/images/583248397_1264421912370646_5653268569184743852_n.jpg"
  },
  {
    id: 9,
    title: "جميع قطع غيار المحطات الأصلية",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "نوفر تشكيلة واسعة من قطع الغيار الأصلية لجميع أنواع المحطات (سكاكين خلاطات، جلود سيور، حساسات وزن، بساتم هواء، صمامات وبوابات تفريغ) بجودة عالية وأسعار تنافسية.",
    image: "/emtiaz/images/583288682_1264421902370647_8690585275868236668_n.jpg"
  },
  {
    id: 10,
    title: "خدمات فك وتركيب ورفع كفاءة المحطات",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "متخصصون في أعمال فك وتركيب ونقل محطات الخرسانة من موقع لآخر، ورفع كفاءتها الفنية والتشغيلية، بالإضافة إلى زيادة السعة الإنتاجية وتحديث أنظمة التحكم والتشغيل.",
    image: "/emtiaz/images/584445806_1264421859037318_3017940199291918115_n.jpg"
  },
  {
    id: 11,
    title: "مكونات كنترول",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "توفير جميع مكونات الكنترول واللوحات الكهربائية الأصلية من قواطع وكونتاكتورات وحشوات حماية لأعلى درجات الأمان للمحطات.",
    image: "/emtiaz/images/spare%20parts/control_components.jpg"
  }
];

const DYNAMIC_SPARE_PARTS: Product[] = SPARE_PART_NAMES.map((name, index) => {
  const imageNum = 14 + index;
  return {
    id: 100 + index,
    title: name,
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "قطع غيار أصلية عالية الجودة متوفرة للتوريد الفوري لجميع محطات الخرسانة الجاهزة.",
    image: `/emtiaz/images/spare%20parts/IMG-20260721-WA00${imageNum}.jpg`
  };
});

const PRODUCTS: Product[] = [
  ...BASE_PRODUCTS,
  ...DYNAMIC_SPARE_PARTS
];

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<Product | null>(null);
  const [quoteFormData, setQuoteFormData] = useState({ name: "", phone: "", message: "" });

  // Sync category param with tab state
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleWhatsAppRedirect = (subject: string) => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن: (${subject}) من شركة إمتياز.`
    );
    window.open(`https://wa.me/201070833313?text=${text}`, "_blank");
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuoteProduct) return;

    const text = encodeURIComponent(
      `*طلب عرض سعر ومواصفات - شركة إمتياز*\n\n` +
      `• *المنتج:* ${selectedQuoteProduct.title}\n` +
      `• *الاسم الكامل:* ${quoteFormData.name}\n` +
      `• *رقم الهاتف / الواتساب:* ${quoteFormData.phone}\n` +
      `• *تفاصيل الاستفسار:* ${quoteFormData.message || "لا توجد تفاصيل إضافية"}`
    );

    window.open(`https://wa.me/201070833313?text=${text}`, "_blank");
    setQuoteModalOpen(false);
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
            <Link to="/about" className="navLink" onClick={() => setMobileMenuOpen(false)}>عن الشركة</Link>
            <Link to="/products" className="navLink navLinkActive" onClick={() => setMobileMenuOpen(false)}>منتجاتنا</Link>
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

      {/* Main Banner Header */}
      <section className="section" style={{ paddingTop: "140px", paddingBottom: "50px", background: "radial-gradient(circle at 50% 20%, rgba(var(--primary-rgb), 0.05) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="sectionHeader" style={{ marginBottom: "20px" }}>
            <span className="sectionSub">كتالوج المنتجات الكامل</span>
            <h2 className="sectionTitle" style={{ fontSize: "2.6rem" }}>منتجاتنا وخدماتنا</h2>
            <p className="sectionDesc" style={{ maxWidth: "800px", margin: "0 auto" }}>
              نصنع ونورد محطات الخرسانة بكافة مشتملاتها وأنظمة الغربلة والسيور الناقلة والصوامع بجودة فائقة مطابقة للمواصفات الدولية.
            </p>
          </div>
        </div>
      </section>

      {/* Products Catalog Grid */}
      <section className="section" style={{ paddingBottom: "100px", backgroundColor: "var(--bg-base)" }}>
        <div className="container">

          {/* Category Tabs */}
          <div className="filters">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                className={`filterBtn ${activeCategory === category.id ? "filterBtnActive" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="productsGrid">
            {filteredProducts.map(product => (
              <article key={product.id} className="productCard">
                <div className="cardImageContainer">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="cardImage"
                    loading="lazy"
                  />
                  <span className="cardCategory">{product.categoryName}</span>
                </div>
                <div className="cardBody">
                  <h4 className="cardTitle">{product.title}</h4>
                  <p className="cardDesc">{product.description}</p>
                  <div className="cardFooter">
                    <button
                      className="cardBtnOrder"
                      onClick={() => {
                        setSelectedQuoteProduct(product);
                        setQuoteFormData({ name: "", phone: "", message: "" });
                        setQuoteModalOpen(true);
                      }}
                    >
                      <WhatsAppIcon />
                      <span>طلب عرض سعر</span>
                    </button>
                    <button
                      className="cardBtnDetails"
                      onClick={() => handleWhatsAppRedirect(`استفسار فني عن ${product.title}`)}
                    >
                      استفسار فني
                    </button>
                  </div>
                </div>
              </article>
            ))}
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
                href="https://speed-up.tech/"
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

      {/* Product Quote Modal Popup */}
      {quoteModalOpen && selectedQuoteProduct && (
        <div className="modalOverlay" onClick={() => setQuoteModalOpen(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setQuoteModalOpen(false)} aria-label="إغلاق">
              <CloseIcon />
            </button>

            <h3 className="modalTitle">طلب عرض سعر ومواصفات</h3>

            <div className="modalProductBadge">
              <span className="modalProductLabel">المنتج المحدد:</span>
              <h4 className="modalProductName">{selectedQuoteProduct.title}</h4>
            </div>

            <form onSubmit={handleQuoteSubmit}>
              <div className="formGroup">
                <label className="formLabel">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  className="formInput"
                  placeholder="اكتب اسمك الكامل هنا..."
                  value={quoteFormData.name}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                />
              </div>

              <div className="formGroup">
                <label className="formLabel">رقم الهاتف / الواتساب</label>
                <input
                  type="tel"
                  required
                  className="formInput"
                  placeholder="مثال: 010XXXXXXXX"
                  value={quoteFormData.phone}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                />
              </div>

              <div className="formGroup">
                <label className="formLabel">نص الرسالة أو الاستفسار بالتفصيل</label>
                <textarea
                  className="formTextarea"
                  placeholder="اكتب أي مواصفات خاصة أو استفسارات إضافية تود إرسالها للإدارة..."
                  value={quoteFormData.message}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="whatsapp-btn formBtn">
                <span>إرسال الطلب</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
