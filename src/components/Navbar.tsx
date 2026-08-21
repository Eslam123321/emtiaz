import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, FacebookIcon, MenuIcon, CloseIcon } from './Icons';
import { getImageUrl } from '../utils/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/products', label: 'المنتجات والمعدات' },
    { path: '/maintenance', label: 'خدمات الصيانة' },
    { path: '/contact', label: 'اتصل بنا' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="siteHeader">
      {/* Top emergency bar */}
      <div className="topBar">
        <div className="topBarContent">
          <div className="topBarContacts">
            <a href="tel:01070833313" className="topContactItem" title="اتصال مباشر بالمبيعات والإدارة">
              <PhoneIcon size={16} />
              <span dir="ltr">المبيعات: 01070833313</span>
            </a>
            <span className="topBarDivider">|</span>
            <a href="tel:01070833312" className="topContactItem" title="اتصال مباشر بالصيانة والدعم الفني">
              <PhoneIcon size={16} />
              <span dir="ltr">الصيانة 24 ساعة: 01070833312</span>
            </a>
            <span className="topBarDivider">|</span>
            <div className="topLocationItem">
              <MapPinIcon size={16} />
              <span>جمهورية مصر العربية - مصنع ومقر الشركة الرئيسي</span>
            </div>
          </div>
          <div className="topBarSocials">
            <a
              href="https://wa.me/201070833313?text=مرحباً،%20أرغب%20في%20الاستفسار%20عن%20محطات%20الخرسانة%20وخدماتكم"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIconLink whatsapp"
              title="تواصل معنا عبر واتساب"
            >
              <WhatsAppIcon size={18} />
              <span className="socialLabel">واتساب</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064085473050"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIconLink facebook"
              title="صفحتنا الرسمية على فيسبوك"
            >
              <FacebookIcon size={18} />
              <span className="socialLabel">فيسبوك</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mainNavbar">
        <div className="navbarContainer">
          <Link to="/" className="brandLogoLink" onClick={() => setMobileMenuOpen(false)}>
            <img
              src={getImageUrl('/images/logo.webp')}
              alt="شعار شركة إمتياز لتصنيع محطات الخرسانة"
              className="brandLogoImg"
              width="60"
              height="60"
            />
            <div className="brandTextGroup">
              <span className="brandName">شركة إمتياز</span>
              <span className="brandTagline">لتصنيع وتجهيز محطات الخرسانة ومشتملاتها</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktopNavLinks" aria-label="روابط الموقع الرئيسية">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navLinkItem ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="navbarActions">
            <Link to="/contact" className="btnPrimaryNav">
              طلب عرض سعر فوري
            </Link>
            <button
              className="mobileMenuBtn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobileDropdownMenu">
            <nav className="mobileNavList" aria-label="روابط القائمة للموبايل">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobileNavLinkItem ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btnPrimaryMobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                طلب عرض سعر أو صيانة
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
