import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, MailIcon, ShieldCheckIcon } from './Icons';
import { getImageUrl } from '../utils/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="footerMain">
        <div className="footerContainer">
          {/* Col 1: About Company */}
          <div className="footerCol">
            <div className="footerBrandHeader">
              <img
                src={getImageUrl('/images/logo.webp')}
                alt="لوجو شركة إمتياز لمحطات الخرسانة"
                className="footerBrandLogo"
                width="64"
                height="64"
                loading="lazy"
              />
              <div>
                <h3 className="footerBrandTitle">شركة إمتياز</h3>
                <p className="footerBrandSubtitle">لتصنيع وتجهيز محطات الخرسانة ومشتملاتها</p>
              </div>
            </div>
            <p className="footerAboutText">
              الرواد في تصنيع محطات الخرسانة الجاهزة الثابتة والمتحركة، سيلوهات الإسمنت، مهزات وغرابيل الركام، وسيور النقل بأعلى المعايير الهندسية وأدق مواصفات الجودة مع دعم فني مستمر 24/7.
            </p>
            <div className="footerBadge">
              <ShieldCheckIcon size={18} />
              <span>ضمان شامل وتوريد سريع لكافة المحافظات والدول العربية</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footerCol">
            <h4 className="footerColHeading">روابط الموقع السريعة</h4>
            <ul className="footerLinksList">
              <li><Link to="/">الصفحة الرئيسية</Link></li>
              <li><Link to="/about">من نحن وسابقة أعمالنا</Link></li>
              <li><Link to="/products">كتالوج المنتجات والمعدات</Link></li>
              <li><Link to="/maintenance">خدمات الصيانة والدعم الفني</Link></li>
              <li><Link to="/contact">اتصل بنا وطلب عرض سعر</Link></li>
            </ul>
          </div>

          {/* Col 3: Products Catalog */}
          <div className="footerCol">
            <h4 className="footerColHeading">المنتجات والتصنيع</h4>
            <ul className="footerLinksList">
              <li><Link to="/products?category=batching">محطات الخرسانة الثابتة والمتحركة</Link></li>
              <li><Link to="/products?category=silos">سيلوهات الإسمنت (120 طن - 150 طن)</Link></li>
              <li><Link to="/products?category=screening">مهزات وغرابيل السن والرمل</Link></li>
              <li><Link to="/products?category=conveyors">سيور النقل والمغذيات الترددية</Link></li>
              <li><Link to="/products?category=spare">قطع الغيار الإيطالية والتركية الأصلية</Link></li>
              <li><Link to="/products?category=tanks">خزانات المياه والسولار والمواد الكيميائية</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="footerCol">
            <h4 className="footerColHeading">التواصل والدعم الفوري</h4>
            <div className="footerContactsList">
              <a href="tel:01070833313" className="footerContactRow">
                <PhoneIcon size={18} />
                <div>
                  <span className="contactLabel">قسم المبيعات والتعاقدات:</span>
                  <span className="contactValue" dir="ltr">01070833313</span>
                </div>
              </a>
              <a href="tel:01070833312" className="footerContactRow">
                <PhoneIcon size={18} />
                <div>
                  <span className="contactLabel">الدعم الفني والصيانة (24 ساعة):</span>
                  <span className="contactValue" dir="ltr">01070833312</span>
                </div>
              </a>
              <a
                href="https://wa.me/201070833313?text=مرحباً،%20أرغب%20في%20طلب%20عرض%20سعر%20من%20شركة%20إمتياز"
                target="_blank"
                rel="noopener noreferrer"
                className="footerContactRow"
              >
                <WhatsAppIcon size={18} />
                <div>
                  <span className="contactLabel">محادثة واتساب مباشرة:</span>
                  <span className="contactValue">01070833313</span>
                </div>
              </a>
              <div className="footerContactRow">
                <MapPinIcon size={18} />
                <div>
                  <span className="contactLabel">المقر والمصنع:</span>
                  <span className="contactValue">الطريق الزراعي - مزلقان زكي - اجهور الكبرى</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footerBottom">
        <div className="footerBottomContainer" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a
            href="https://speed-up.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="speedUpAgencyBadge"
            title="زيارة موقع شركة Speed Up لتطوير البرمجيات والمواقع"
          >
            <span className="developedByText">تصميم وتطوير بواسطة</span>
            <span className="speedUpBrand">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="speedUpBolt">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Speed Up
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
