// utils/Language.js

export function updateLanguage(language) {
    const elements = {
      en: { 
        home: "Home",
        services: "Services", 
        contact: "Contact", 
        about:"About" ,
        heroContentTitle: "Takharuji is a platform dedicated to being with you during your graduation moments.",
        heroContentBody: "Explore the joy. It’s designed for you.",
        readMore: "Read more",
        Contact: "Contact Us",
      },
      fr: { 
        home: "Accueil",
        services: "Services", 
        contact: "Contact" , 
        about:"À propos",
        heroContentTitle: "Takharuji est une plateforme dédiée à vous accompagner lors de vos moments de remise de diplôme.",
        heroContentBody: "",
        readMore: "Lire la suite",
        Contact: "Contactez-nous",
      },
      ar: { 
        home: "الرئيسية",
        services: "الخدمات", 
        contact: "اتصل بنا" , 
        about:"معلومات عنا",
        heroContentTitle: "تخرجي هو منصة مخصصة لمرافقتك خلال لحظات تخرجك.",
        heroContentBody: "",
        readMore: "اقرأ المزيد",
        Contact: "اتصل بنا",
      },
    };
  
    const selected = elements[language] || elements.en;
  
    const homeLink = document.getElementById("home-link");
    const homeLinkMobile = document.getElementsByName("home-link-mobile");
    const servicesLink = document.getElementById("services-link");
    const servicesLinkMobile = document.getElementById("services-link-mobile");
    const contactLink = document.getElementById("contact-link");
    const contactLinkMobile = document.getElementById("contact-link-mobile");
    const abouttLink = document.getElementById("about-link");
    const abouttLinkMobile = document.getElementById("about-link-mobile");
    const heroContentTitle = document.getElementById("hero-content-title");
    const heroContentBody = document.getElementById("hero-content-body");
    const readMore = document.getElementById("read-more");
    const Contact = document.getElementById("contact");
  
    if (homeLink) homeLink.textContent = selected.home;
    if (homeLinkMobile) homeLinkMobile.textContent = selected.home;
    if (servicesLink) servicesLink.textContent = selected.services;
    if (servicesLinkMobile) servicesLinkMobile.textContent = selected.services;
    if (contactLink) contactLink.textContent = selected.contact;
    if (contactLinkMobile) contactLinkMobile.textContent = selected.contact;
    if (abouttLink) abouttLink.textContent = selected.about;
    if (abouttLinkMobile) abouttLinkMobile.textContent = selected.about;
    if (heroContentTitle) heroContentTitle.textContent = selected.heroContentTitle;
    if (heroContentBody) heroContentBody.textContent = selected.heroContentBody;
    if (readMore) readMore.textContent = selected.readMore;
    if (Contact) Contact.textContent = selected.Contact;
  }
  