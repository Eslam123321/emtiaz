import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEO from '../components/SEO';
import {
  PhoneIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
  MaintenanceIcon
} from '../components/Icons';
import '../page.css';

export default function Maintenance() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plantType: "محطة خرسانة ثابتة 120 متر",
    serviceType: "أعطال طارئة / إصلاح عاجل",
    details: ""
  });

  const handleMaintenanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*طلب صيانة ودعم فني - شركة إمتياز*\n\n` +
      `• *الشركة / العميل:* ${formData.name}\n` +
      `• *الهاتف والواتساب:* ${formData.phone}\n` +
      `• *نوع المعدة:* ${formData.plantType}\n` +
      `• *نوع الخدمة:* ${formData.serviceType}\n` +
      `• *تفاصيل الطلب / العطل:* ${formData.details}`
    );

    window.open(`https://wa.me/201070833313?text=${text}`, "_blank");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="layout">
      <SEO
        title="خدمات الصيانة الفورية والدعم الفني 24 ساعة | شركة إمتياز"
        description="فريق صيانة طوارئ متمرس على مدار 24 ساعة لإصلاح أعطال محطات الخرسانة الجاهزة، فك وتركيب ونقل المحطات، ورفع الكفاءة وتوفير قطع الغيار الأصلية."
      />

      <Navbar />

      <main>
        {/* Hero Banner Section */}
        <section className="section" style={{ paddingTop: "140px", paddingBottom: "60px", background: "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)" }}>
          <div className="container">
            <div className="sectionHeader" style={{ marginBottom: "20px" }}>
              <span className="sectionSub" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span className="badgeDot"></span>
                خدمة الدعم الفني والأعطال 24 ساعة تحت الطلب
              </span>
              <h1 className="sectionTitle" style={{ fontSize: "2.8rem", marginTop: "15px" }}>الصيانة والدعم الفني لمحطات الخرسانة</h1>
              <p className="sectionDesc" style={{ maxWidth: "800px", margin: "0 auto" }}>
                نحن في شركة إمتياز ننفرد بوجود فريق صيانة وأعطال فوري مجهز على أعلى مستوى فني، مستعد للتحرك على مدار 24 ساعة لجميع محافظات مصر وليبيا لضمان استمرارية مصنعكم دون أي توقف.
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
                <h2 style={{ fontSize: "1.8rem", color: "white", marginBottom: "15px" }}>الخدمات المتاحة بقسم الدعم والصيانة</h2>
                <p style={{ marginBottom: "25px" }}>
                  نوفر استجابة سريعة لجميع مشاكل محطات الخرسانة لتقديم أفضل أداء تشغيلي للمصنع.
                </p>

                <div className="infoItem" style={{ marginBottom: "20px" }}>
                  <div className="infoIcon"><MaintenanceIcon size={22} /></div>
                  <div className="infoContent">
                    <h3 style={{ color: "white", fontSize: "1.1rem", marginBottom: "4px" }}>إصلاح الأعطال الطارئة</h3>
                    <p>حل المشاكل الميكانيكية والهوائية والكهربائية للمحطات على الفور في موقع العمل.</p>
                  </div>
                </div>

                <div className="infoItem" style={{ marginBottom: "20px" }}>
                  <div className="infoIcon"><ShieldCheckIcon size={22} /></div>
                  <div className="infoContent">
                    <h3 style={{ color: "white", fontSize: "1.1rem", marginBottom: "4px" }}>رفع الكفاءة وتحديث السعة الإنتاجية</h3>
                    <p>تعديل المحطات القائمة لرفع كفاءتها وإنتاجيتها، وتطوير خلاطات الخرسانة والسيور.</p>
                  </div>
                </div>

                <div className="infoItem" style={{ marginBottom: "20px" }}>
                  <div className="infoIcon"><PhoneIcon size={22} /></div>
                  <div className="infoContent">
                    <h3 style={{ color: "white", fontSize: "1.1rem", marginBottom: "4px" }}>فك وتركيب ونقل المحطات</h3>
                    <p>فك ونقل وإعادة تركيب محطات الخرسانة بالكامل بمختلف أنواعها وأوزانها وتحت إشراف هندسي متكامل.</p>
                  </div>
                </div>

                <div className="infoItem" style={{ marginBottom: "20px" }}>
                  <div className="infoIcon" style={{ color: "var(--whatsapp-color)", borderColor: "rgba(37,211,102,0.2)" }}><WhatsAppIcon size={22} /></div>
                  <div className="infoContent">
                    <h3 style={{ color: "white", fontSize: "1.1rem", marginBottom: "4px" }}>توفير قطع الغيار الفورية</h3>
                    <p>توريد وتركيب جميع قطع الغيار الأصلية المطلوبة بضمان فني من فريق العمل.</p>
                  </div>
                </div>
              </div>

              {/* Maintenance Request Form */}
              <div className="contactForm">
                <h2 className="formTitle" style={{ fontSize: "1.6rem", color: "white", fontWeight: "800" }}>نموذج طلب صيانة / دعم فني</h2>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "24px" }}>
                  يرجى إدخال تفاصيل العطل أو الخدمة المطلوبة، وسيتم توجيهك فوراً لتطبيق الواتساب للتواصل مع مسؤول الصيانة الفورية.
                </p>

                <form onSubmit={handleMaintenanceSubmit}>
                  <div className="formGroup">
                    <label className="formLabel" htmlFor="maintenance-company">اسم الشركة أو المؤسسة</label>
                    <input
                      id="maintenance-company"
                      type="text"
                      required
                      className="formInput"
                      placeholder="مثال: شركة إمتياز للخرسانة"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="formGroup">
                    <label className="formLabel" htmlFor="maintenance-phone">رقم الهاتف للتواصل (واتساب)</label>
                    <input
                      id="maintenance-phone"
                      type="tel"
                      required
                      className="formInput"
                      placeholder="مثال: 010XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="formGroup">
                    <label className="formLabel" htmlFor="maintenance-plant-type">نوع المحطة أو المعدة</label>
                    <select
                      id="maintenance-plant-type"
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
                    <label className="formLabel" htmlFor="maintenance-service-type">نوع الخدمة المطلوبة</label>
                    <select
                      id="maintenance-service-type"
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
                    <label className="formLabel" htmlFor="maintenance-details">تفاصيل المشكلة / العطل أو الطلب بالتفصيل</label>
                    <textarea
                      id="maintenance-details"
                      required
                      className="formTextarea"
                      placeholder="اكتب هنا تفاصيل المشكلة الهوائية أو الميكانيكية أو نوع التطوير المطلوب..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="whatsapp-btn formBtn">
                    <WhatsAppIcon size={20} />
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
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
