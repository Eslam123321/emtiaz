import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEO from '../components/SEO';
import { WhatsAppIcon, SearchIcon, PhoneIcon, CloseIcon } from '../components/Icons';
import { getImageUrl } from '../utils/image';
import '../page.css';

interface Product {
  id: number;
  title: string;
  category: string;
  categoryName: string;
  description: string;
  image: string;
  specs?: string[];
}

const CATEGORIES = [
  { id: "all", name: "جميع المنتجات والمعدات" },
  { id: "batching", name: "محطات الخرسانة الجاهزة" },
  { id: "silos", name: "السيلوهات والخزانات" },
  { id: "screening", name: "المهزات والسيور الناقلة" },
  { id: "spare", name: "قطع الغيار الأصلية" }
];

const SPARE_PART_NAMES = [
  "دربكسات سكروهات",
  "كرسي عمدان مكسر",
  "دربكسات سكروهات",
  "كراسي مكسر cm",
  "حساسات اشارة",
  "كفف تقليب ومساحات مستوردة",
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
    image: "/images/486471563_1069345438544962_872698005021278874_n.webp",
    specs: ["سعة إنتاجية 120م³/ساعة", "خلاط ثنائي المحور Twin Shaft", "لوحة تحكم PLC أوتوماتيكية", "خزانات وزن ركام وإسمنت دقيقة"]
  },
  {
    id: 2,
    title: "محطات خرسانة متحركة (80م³ - 120م³)",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع محطات خرسانة متحركة على شاسيهات مقطورة متكاملة لسهولة النقل من موقع لآخر وسرعة التركيب والتشغيل. السعة الإنتاجية تتراوح من 80 مترًا إلى 120 مترًا مكعبًا في الساعة.",
    image: "/images/489447717_1081447364001436_7369565754761327534_n.webp",
    specs: ["تصميم مقطور متحرك متكامل", "تركيب وتشغيل قياسي وسريع", "سعة 80 - 120م³/ساعة", "مناسبة للمشاريع المتنقلة"]
  },
  {
    id: 14,
    title: "مكسر 2 متر بالبرج",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع خلاط ومكسر خرسانة سعة 2 متر مكعب مثبت على برج هيكلي متين ومزود بسلم صعود ومنصة صيانة واسعة، صُمم بأعلى المعايير الهندسية لضمان الخلط المتجانس والسريع للخرسانة الجاهزة.",
    image: "/images/mixer_2m_tower.webp",
    specs: ["سعة 2 متر مكعب في الخلطة", "برج فولاذي عالي المتانة", "منصة تفتيش وصيانة آمنة", "كفف خلط فولاذية مقاومة للاحتكاك"]
  },
  {
    id: 15,
    title: "فيدر بوكس وقواديس التغذية",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع وتوريد قواديس وخزانات التغذية (فيدر بوكس) بمختلف المقاسات، مصنعة من الهياكل الصلبة القوية ومزودة ببوابات تفريغ هيدروليكية ونظام تغذية دقيق للركام والمواد.",
    image: "/images/feeder_box.webp",
    specs: ["سعات تخزين ركام متعددة", "بوابات تفريغ سريعة هوائية", "هيكل فولاذي شديد التحمل", "حساسات وموازين وزن إلكترونية"]
  },
  {
    id: 3,
    title: "سيلوهات إسمنت (150 طن و120 طن)",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "تصنيع سيلوهات إسمنت عمودية بسعة 150 طنًا و120 طنًا. مبنية من أجود أنواع الصلب السميك المقاوم للتآكل ومجهزة بفلاتر هواء، وصمامات أمان لتخزين الإسمنت بكفاءة وسلامة تامة.",
    image: "/images/double_cement_silos.webp",
    specs: ["سعة 120 و 150 طن", "صلب عالي المتانة 6-8 ملم", "صمامات ضغط وفلاتر بيئية", "سلالم حماية دائرية خارجية"]
  },
  {
    id: 12,
    title: "سيلو اسمنت سعة تخزين 150 طن",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "سيلو إسمنت عالي الجودة بسعة تخزينية 150 طن، مجهز بسلم حماية جانبي وقواعد تثبيت قوية، مصنع من الصلب المقاوم للتآكل والعوامل الجوية لضمان تخزين وتفريغ الإسمنت بأعلى كفاءة وأمان.",
    image: "/images/silo_150_ton.webp",
    specs: ["سعة تخزين 150 طن إسمنت", "أنظمة تهوية وتفريغ هوائي", "دهان مقاوم للصدأ والحرارة", "قواعد تثبيت شاقة"]
  },
  {
    id: 13,
    title: "تانك مياه 57 ألف لتر معزول",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "تصنيع وتجهيز خزان مياه ضخم بسعة 57,000 لتر، مزود بعزل حراري عالي الكفاءة من الصوف الحراري وكسوة خارجية حامية من ألواح الألمونيوم المقاومة للظروف الجوية الصعبة وللحفاظ على حرارة المياه.",
    image: "/images/water_tank_57k.webp",
    specs: ["سعة 57,000 لتر", "عزل صوف حراري عالي الكثافة", "كسوة ألمونيوم خارجية", "مضخات وتوصيلات متكاملة"]
  },
  {
    id: 4,
    title: "مهزات رمل وسن وغرابيل ركام",
    category: "screening",
    categoryName: "غربلة وسيور",
    description: "تصنيع مهزات سن ورمل (غربال ركام) بجميع المقاسات المتفاوتة والمختلفة، وبأنظمة اهتزاز ميكانيكية متطورة لتصنيف وفصل الركام لضمان خلطة خرسانية مطابقة للمواصفات الهندسية.",
    image: "/images/486641740_1069345401878299_2779942071246690946_n.webp",
    specs: ["طوابق غربلة متعددة 2-4 طبقات", "مواتير هزازة فائقة القوة", "شباك غربال فولاذية قابلة للتغيير", "قدرات فرز وإنتاجية عالية"]
  },
  {
    id: 16,
    title: "سير محوري ودوار لنقل المواد",
    category: "screening",
    categoryName: "غربلة وسيور",
    description: "تصنيع وتوريد السيور المحورية والدوارة المخصصة لنقل وتوزيع الركام والحصى بكفاءة عالية في محطات الخرسانة ومواقع الغربلة، تتميز بهيكل جمالوني فولاذي شديد التحمل ونظام حركة مرن.",
    image: "/images/pivot_conveyor.webp",
    specs: ["دوران محوري بزوايا واسعة", "شاسيه جمالوني صلب ومقاوم", "بكرات ومحامل سير عالية الجودة", "محركات كهربائية موفرة للطاقة"]
  },
  {
    id: 6,
    title: "خزانات مياه وسولار ومواد إضافية",
    category: "silos",
    categoryName: "سيلوهات وخزانات",
    description: "تصنيع خزانات مياه وخزانات وقود (سولار) وخزانات المواد الإضافية الكيميائية بجميع الأحجام والسعات اللترية المطلوبة، معالجة داخليًا وخارجيًا ضد الصدأ والتسريب.",
    image: "/images/486603129_1069345668544939_3168069876910589249_n.webp",
    specs: ["سعات مخصصة حسب الطلب", "معالجة داخلية ضد التآكل", "مؤشرات مستوى السوائل", "محابس وتجهيزات تفريغ آمنة"]
  },
  {
    id: 7,
    title: "كسارات وجاروشة الثلج الصناعية",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "تصنيع وتوريد مجرشات وجوارش ثلج صناعية قوية، مخصصة لكسر الثلج المضاف للخلطة الخرسانية لخفض درجة حرارتها أثناء الصب في الأجواء الحارة.",
    image: "/images/584132553_1264421732370664_6616535584646022451_n.webp",
    specs: ["قدرة تكسير وجرش سريعة", "شفرات فولاذية مقاومة للتآكل", "محرك شاق معزول", "تغذية وتفريغ مباشر للخلاط"]
  },
  {
    id: 8,
    title: "محطات ومصانع الإنترلوك المتكاملة",
    category: "batching",
    categoryName: "محطات خرسانة",
    description: "تصنيع وتركيب محطات وخطوط إنتاج الإنترلوك والبردورات والبلوك الإسمنتي بجميع مشتملاتها من خلاطات وسيور ومكابس آلية ونصف آلية.",
    image: "/images/583248397_1264421912370646_5653268569184743852_n.webp",
    specs: ["خطوط إنتاج متكاملة", "قوالب متعددة الأشكال والمقاسات", "أنظمة هيدروليكية دقيقة", "كفاءة إنتاجية عالية"]
  },
  {
    id: 9,
    title: "جميع قطع غيار المحطات الأصلية",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "نوفر تشكيلة واسعة من قطع الغيار الأصلية لجميع أنواع المحطات (سكاكين خلاطات، جلود سيور، حساسات وزن، بساتم هواء، صمامات وبوابات تفريغ) بجودة عالية وأسعار تنافسية.",
    image: "/images/583288682_1264421902370647_8690585275868236668_n.webp",
    specs: ["قطع أصلية إيطالية وتركية", "توريد فوري من المخازن", "مطابقة للمواصفات القياسية", "ضمان ضد عيوب الصناعة"]
  },
  {
    id: 10,
    title: "خدمات فك وتركيب ورفع كفاءة المحطات",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "متخصصون في أعمال فك وتركيب ونقل محطات الخرسانة من موقع لآخر، ورفع كفاءتها الفنية والتشغيلية، بالإضافة إلى زيادة السعة الإنتاجية وتحديث أنظمة التحكم والتشغيل.",
    image: "/images/spare parts/IMG-20260721-WA0037.webp",
    specs: ["نقل وفك وتركيب آمن", "رفع سعة المحطات القديمة", "تحديث لوحات التحكم PLC", "فحص ومعايرة أجهزة الوزن"]
  },
  {
    id: 11,
    title: "مكونات ولوحات الكنترول الكهربائي",
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "توفير جميع مكونات الكنترول واللوحات الكهربائية الأصلية من قواطع وكونتاكتورات وحشوات حماية لأعلى درجات الأمان للمحطات.",
    image: "/images/spare parts/control_components.webp",
    specs: ["قواطع ومفاتيح ماركات عالمية", "شاشات تحكم لمسية Touch Screen", "حماية متقدمة ضد تقلبات الجهد", "برمجة مرنة وتقارير إنتاج"]
  }
];

const DYNAMIC_SPARE_PARTS: Product[] = SPARE_PART_NAMES.map((name, index) => {
  const imageNum = 14 + index;
  return {
    id: 100 + index,
    title: name,
    category: "spare",
    categoryName: "قطع الغيار والخدمات",
    description: "قطع غيار أصلية عالية الجودة متوفرة للتوريد الفوري لجميع محطات الخرسانة الجاهزة ومصانع البلوك والإنترلوك.",
    image: `/images/spare parts/IMG-20260721-WA00${imageNum}.webp`,
    specs: ["خامات شاقة مقاومة للاحتكاك", "توريد فوري", "متوافق مع مختلف الطرازات"]
  };
});

const ALL_PRODUCTS: Product[] = [
  ...BASE_PRODUCTS,
  ...DYNAMIC_SPARE_PARTS
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setSearchParams(catId === "all" ? {} : { category: catId });
  };

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductWhatsApp = (product: Product) => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله، أود الاستفسار وطلب عرض سعر لمنتج: (${product.title}) من شركة إمتياز.`
    );
    window.open(`https://wa.me/201070833313?text=${text}`, "_blank");
  };

  return (
    <div className="layout">
      <SEO
        title="كتالوج المنتجات والمعدات | شركة إمتياز لمحطات الخرسانة"
        description="تصفح كتالوج محطات الخرسانة الجاهزة، السيلوهات، المهزات، السيور، وقطع الغيار الأصلية من شركة إمتياز لتصنيع محطات الخرسانة."
      />

      <Navbar />

      <main>
        {/* Header Hero */}
        <section className="section" style={{ paddingTop: "140px", paddingBottom: "40px", background: "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)" }}>
          <div className="container">
            <div className="sectionHeader" style={{ marginBottom: "20px" }}>
              <span className="sectionSub">المنتجات والمعدات</span>
              <h1 className="sectionTitle" style={{ fontSize: "2.6rem" }}>كتالوج محطات الخرسانة والمعدات الصناعية</h1>
              <p className="sectionDesc" style={{ maxWidth: "750px", margin: "0 auto" }}>
                نقدم حلولاً تصنيعية مخصصة بأعلى معايير المتانة الهندسية لتلبية احتياجات أضخم مشروعات البناء والتشييد.
              </p>
            </div>

            {/* Search and Filters */}
            <div style={{ maxWidth: "600px", margin: "0 auto 30px auto", position: "relative" }}>
              <input
                type="text"
                className="formInput"
                placeholder="ابحث عن محطة، سيلو، غربال، أو قطعة غيار..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingRight: "45px", borderRadius: "30px", backgroundColor: "var(--bg-surface)" }}
              />
              <div style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}>
                <SearchIcon size={20} />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="categoryTabs" style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`tabBtn ${activeCategory === cat.id ? "tabBtnActive" : ""}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section" style={{ paddingTop: "20px", paddingBottom: "80px", backgroundColor: "var(--bg-base)" }}>
          <div className="container">
            <div style={{ marginBottom: "20px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
              عرض <strong>{filteredProducts.length}</strong> منتج ومعدة متوفرة
            </div>

            <div className="categoryGrid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="categoryCard" style={{ display: "flex", flexDirection: "column" }}>
                  <div className="cardImageContainer" style={{ aspectRatio: "4/3", cursor: "pointer" }} onClick={() => setSelectedProduct(product)}>
                    <img
                      src={getImageUrl(product.image)}
                      alt={product.title}
                      className="cardImage"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="cardCategoryBadge">{product.categoryName}</span>
                  </div>
                  <div className="cardBody" style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h2 className="cardTitle" style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "10px", color: "white" }}>
                      {product.title}
                    </h2>
                    <p className="cardDesc" style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "18px", flexGrow: 1 }}>
                      {product.description}
                    </p>

                    {product.specs && product.specs.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                        {product.specs.slice(0, 2).map((spec, sIdx) => (
                          <span key={sIdx} style={{ fontSize: "0.75rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid var(--border-subtle)", padding: "3px 8px", borderRadius: "4px", color: "#cbd5e1" }}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="categoryCardBtn"
                        style={{ flex: 1, textAlign: "center" }}
                      >
                        المواصفات
                      </button>
                      <button
                        onClick={() => handleProductWhatsApp(product)}
                        className="whatsapp-btn"
                        style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                        title="طلب عرض سعر عبر واتساب"
                      >
                        <WhatsAppIcon size={18} />
                        <span>طلب سعر</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "var(--bg-surface)", borderRadius: "var(--radius-md)", marginTop: "20px" }}>
                <p style={{ fontSize: "1.2rem", color: "white", marginBottom: "10px" }}>لم يتم العثور على منتجات مطابقة لبحثك</p>
                <button onClick={() => { setActiveCategory("all"); setSearchQuery(""); }} className="btnPrimaryNav">
                  عرض جميع المنتجات
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="modalOverlay" onClick={() => setSelectedProduct(null)}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <button className="modalCloseBtn" onClick={() => setSelectedProduct(null)} aria-label="إغلاق">
                <CloseIcon size={24} />
              </button>
              <div className="modalGrid">
                <div className="modalImageWrap">
                  <img
                    src={getImageUrl(selectedProduct.image)}
                    alt={selectedProduct.title}
                    className="modalImage"
                  />
                </div>
                <div className="modalInfo">
                  <span className="sectionSub">{selectedProduct.categoryName}</span>
                  <h3 style={{ fontSize: "1.6rem", color: "white", fontWeight: "900", marginBottom: "15px" }}>
                    {selectedProduct.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--text-muted)", marginBottom: "20px" }}>
                    {selectedProduct.description}
                  </p>

                  {selectedProduct.specs && selectedProduct.specs.length > 0 && (
                    <div style={{ marginBottom: "24px" }}>
                      <h4 style={{ fontSize: "1rem", color: "white", marginBottom: "10px" }}>أبرز المواصفات الهندسية:</h4>
                      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                        {selectedProduct.specs.map((spec, idx) => (
                          <li key={idx} style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px", fontSize: "0.9rem", color: "#e2e8f0" }}>
                            <span style={{ color: "var(--primary)" }}>✓</span> {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => handleProductWhatsApp(selectedProduct)}
                      className="whatsapp-btn"
                      style={{ flex: 1 }}
                    >
                      <WhatsAppIcon size={20} />
                      <span>طلب عرض سعر فوري واتساب</span>
                    </button>
                    <a href="tel:01070833313" className="phoneLink" style={{ padding: "10px 16px", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                      <PhoneIcon size={20} />
                      <span>اتصال بالمبيعات (01070833313)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
