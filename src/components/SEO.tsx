import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: Record<string, any>;
}

export default function SEO({
  title = "شركة إمتياز لتصنيع وتجهيز محطات الخرسانة الجاهزة والسيلوهات ومشتملاتها",
  description = "شركة إمتياز الرائدة في مصر والشرق الأوسط لتصنيع محطات الخرسانة الجاهزة الثابتة والمتحركة، سيلوهات الإسمنت، مهزات وغرابيل السن والرمل، السيور الناقلة، وقطع الغيار الأصلية مع خدمة صيانة 24 ساعة.",
  keywords = "محطات خرسانة, محطة خرسانة جاهزة, تصنيع محطات خرسانة, سيلوهات اسمنت, مهزات سن, غرابيل رمل, سيور ناقلة, خلاطات خرسانة, شركة امتياز, صيانة محطات خرسانة, قطع غيار محطات خرسانة مصر",
  image = "/images/logo.webp",
  url = "https://ok-company.github.io/emtiaz/",
  schema
}: SEOProps) {
  useEffect(() => {
    // Update Title
    const fullTitle = title.includes("إمتياز") ? title : `${title} | شركة إمتياز لمحطات الخرسانة`;
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    
    // Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:locale', 'ar_EG');

    // Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // Optional Page-Specific Schema
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      scriptTag.id = 'page-schema';
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, image, url, schema]);

  return null;
}
