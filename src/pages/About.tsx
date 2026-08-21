import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEO from '../components/SEO';
import {
  AwardIcon,
  ShieldCheckIcon,
  MaintenanceIcon,
  CheckIcon
} from '../components/Icons';
import { getImageUrl } from '../utils/image';
import '../page.css';

export default function About() {
  return (
    <div className="layout">
      <SEO
        title="من نحن وسابقة أعمالنا | شركة إمتياز لتصنيع محطات الخرسانة"
        description="تعرف على شركة إمتياز لتصنيع وتجهيز محطات الخرسانة الجاهزة، السيلوهات، ومصانع الإنترلوك في مصر والشرق الأوسط منذ عام 2016."
      />

      <Navbar />

      <main>
        {/* Main Banner Header */}
        <section className="section" style={{ paddingTop: "140px", paddingBottom: "50px", background: "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)" }}>
          <div className="container">
            <div className="sectionHeader" style={{ marginBottom: "20px" }}>
              <span className="sectionSub">تعرف علينا عن قرب</span>
              <h1 className="sectionTitle" style={{ fontSize: "2.6rem" }}>من نحن - شركة إمتياز للصناعات ومحطات الخرسانة</h1>
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
              <div>
                <h2 style={{ fontSize: "1.8rem", color: "white", fontWeight: "800", marginBottom: "20px", borderRight: "4px solid var(--primary)", paddingRight: "15px" }}>
                  مسيرة من التميز الهندسي والصناعي
                </h2>

                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "20px" }}>
                  تأسست <strong>شركة إمتياز لتصنيع محطات الخرسانة</strong> في عام 2016 بجمهورية مصر العربية، حاملةً رؤية واضحة لتوطين صناعة معدات ومحطات الخرسانة الثقيلة محلياً وبجودة تضاهي المحطات المستوردة من أوروبا وتركيا.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "20px" }}>
                  على مر السنوات، تحولنا من مصنع هندسي رائد إلى شريك موثوق لكبرى شركات المقاولات والتشييد والخرسانة الجاهزة في مصر والدول المجاورة مثل ليبيا الشقيقة، مساهمين بفعالية في النهضة العمرانية التي تشهدها المنطقة من خلال توفير وتطوير خلاطات خرسانية وصوامع متينة.
                </p>

                <h3 style={{ fontSize: "1.4rem", color: "white", fontWeight: "700", marginTop: "35px", marginBottom: "15px" }}>
                  معايير الجودة والتصنيع الفائقة لدينا:
                </h3>

                <ul style={{ listStyleType: "none", padding: 0, margin: "0 0 30px 0" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}><CheckIcon size={22} /></span>
                    <div>
                      <strong style={{ color: "white" }}>التصميم الهندسي المتطور (3D CAD):</strong>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        نقوم بدراسة وتصميم المحطات على برامج التصميم الهندسي ثلاثية الأبعاد لاختبار الأحمال والإجهادات قبل بدء التصنيع الفعلي لضمان صلابة تامة.
                      </p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}><CheckIcon size={22} /></span>
                    <div>
                      <strong style={{ color: "white" }}>اختيار الفولاذ المقاوم للتآكل:</strong>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        نستخدم ألواح الصلب عالي المتانة بسماكات تتناسب مع ظروف التشغيل الشاقة، بالإضافة إلى معالجة الأسطح بمواد مقاومة للصدأ والتآكل المناخي.
                      </p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}><CheckIcon size={22} /></span>
                    <div>
                      <strong style={{ color: "white" }}>أنظمة تحكم ذكية متطورة (PLC):</strong>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        نوفر لوحات تحكم إلكترونية مبرمجة بالكامل تتيح للمشغل إدارة عملية الخلط، والوزن، والتحميل إلكترونياً بنسبة خطأ 0%.
                      </p>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}><CheckIcon size={22} /></span>
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
                    src={getImageUrl("/images/mixer_2m_tower.webp")}
                    alt="مصنع شركة إمتياز لتصنيع المحطات"
                    className="cardImage"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glowOverlay"></div>
                </div>

                {/* Grid Statistics */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-subtle)", padding: "20px", borderRadius: "var(--radius-sm)", textAlign: "center" }}>
                    <div style={{ color: "var(--primary)", display: "flex", justifyContent: "center", marginBottom: "10px" }}><AwardIcon size={30} /></div>
                    <h4 style={{ fontSize: "1.8rem", color: "white", fontWeight: "900", margin: "5px 0" }}>+10 سنوات</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>خبرة فنية وتصنيعية متراكمة</p>
                  </div>

                  <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-subtle)", padding: "20px", borderRadius: "var(--radius-sm)", textAlign: "center" }}>
                    <div style={{ color: "var(--primary)", display: "flex", justifyContent: "center", marginBottom: "10px" }}><ShieldCheckIcon size={30} /></div>
                    <h4 style={{ fontSize: "1.8rem", color: "white", fontWeight: "900", margin: "5px 0" }}>+200 عميل</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>يثقون في محطاتنا بمصر وليبيا</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section" style={{ backgroundColor: "#0b0d10", borderTop: "1px solid var(--border-subtle)", paddingBottom: "100px" }}>
          <div className="container">
            <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "50px" }}>
              <span className="sectionSub">ما يميزنا عن غيرنا</span>
              <h2 className="sectionTitle">لماذا تختار شركة إمتياز؟</h2>
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
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
