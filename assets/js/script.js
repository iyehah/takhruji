'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
  * Translation script
*/


const translations = {
  fr: {
    /** 
    * French translation
    */
    webTitle: "Takhruji",
    webMark: "Takhruji",
    webName: "Takhruji",

    /**
    * Header
    */

    home: "Accueil",
    service: "Services",
    about: "À propos de nous",
    contact: "Contactez-nous",

    /**
    * Home or Hero
    */

    heroTitle: "Nous rendons votre graduation inoubliable",
    heroText:
      "De la photographie au design, nous offrons tout ce dont votre promotion a besoin pour une cérémonie exceptionnelle.",
    btnText: "Planifiez votre graduation",

    /**
    * Services
    */

    servicesTitle: "Les services que nous offrons",
    servicesText:"Nous proposons une variété de services conçus spécialement pour rendre votre cérémonie de graduation inoubliable.",
    card_1_Title: "Photographie Professionnelle",
    card_1_Text: "Nous offrons des séances photo professionnelles pour immortaliser vos moments de graduation avec des images de haute qualité.",
    card_2_Title: "Tournage et Montage Vidéo",
    card_2_Text: "Création de vidéos créatives pour votre cérémonie de graduation, avec une couverture complète et un montage unique de l'histoire de votre promotion.",
    card_3_Title: "Conception d’Invitations Électroniques",
    card_3_Text: "Nous créons des designs innovants pour vos invitations de graduation numériques, faciles à partager avec vos proches.",
    card_4_Title: "Service de conception",
    card_4_Text: "Création de logos et publications uniques reflétant l’identité de votre promotion, avec des supports créatifs pour la cérémonie de graduation.",
    aboutTitle: "À propos de nous",

    /**
    * About
    */

    aboutDescription:"\"Takhruji\" est une plateforme dédiée à être avec vous lors des plus beaux moments de votre cérémonie de remise de diplôme. Nous offrons des services variés qui répondent à vos besoins pour ces moments spéciaux, allant de la photographie, du montage, de la conception des invitations, jusqu'à l'événement de remise de diplôme.",
    aboutWhoTitle: "Qui sommes-nous?",
    aboutWhoDescription:"Nous sommes une équipe de professionnels dans les domaines de la photographie, de l'art visuel et du design. Notre mission est de fournir tout ce dont les étudiants ont besoin pour célébrer leur diplôme avec la plus haute qualité et professionnalisme.",
    aboutSuccessTitle:"Notre succès",
    aboutSuccess1:"Offrir des services de photographie et de montage professionnels à des milliers d'étudiants lors de leur remise de diplôme.",
    aboutSuccess2:"Concevoir des invitations de remise de diplôme raffinées et innovantes adaptées à tous les goûts.",
    aboutSuccess3:"Fournir des expériences mémorables rendant les moments de remise de diplôme inoubliables",
    aboutMissionTitle:"Notre mission",
    aboutMissionDescription:"Notre mission est de devenir votre partenaire de confiance le jour de votre remise de diplôme, pour vous aider à immortaliser chaque instant, créer des invitations uniques et fournir des services de montage professionnels qui rendront votre événement inoubliable.",
    
    /**
    * CTA
    */

    ctaTitle:"Suivez-nous sur nos comptes",

    /**
    * Contact
    */

    contactUs: "Contactez-nous",
    contactDescription:"Vous pouvez nous contacter via les moyens disponibles ci-dessous, et nous serons ravis de communiquer avec vous et de vous aider à rendre vos moments de remise de diplôme inoubliables.",
    contactTitle:"Contactez-nous",
    visitTitle:"Visitez-nous",
    visitAddress1:"Noukchott, Mauritanie",
    visitAddress2:"123 rue de la liberté",
    callTitle:"Appelez-nous",

    /**
    * Footer
    */
    footerCopyRightInfo: "© 2025 Tous droits réservés par",
  },
  ar: {
    /** 
    * Arabic translation 
    */
    webTitle: "تخرجي",
    webMark: "تخرجي",
    webName: " تخرجي ",
    /**
    * Header
    */

    home: "الرئيسية",
    service: "الخدمات",
    about: "معلومات عنا",
    contact: "تواصل معنا",

    /**
    * Home or Hero
    */

    heroTitle: "نجعل تخرجك لا يُنسى",
    heroText: "من التصوير إلى التصميم، نقدم كل ما تحتاجه لتخرج لا يُنسى.",
    btnText: "خطط لتخرجك",

    /**
    * Services
    */

    servicesTitle: "الخدمات التي نقدمها",
    servicesText:"نقدم مجموعة متنوعة من الخدمات المصممة خصيصًا لجعل حفل تخرجك لا يُنسى.",
    card_1_Title: "تصوير احترافي",
    card_1_Text: "نقدم جلسات تصوير احترافية لتخليد لحظات تخرجك بصور عالية الجودة.",
    card_2_Title: "تصوير وتحرير الفيديو",
    card_2_Text: "إنشاء فيديوهات إبداعية لحفل تخرجك، مع تغطية شاملة وتحرير فريد لقصة تخرجك.",
    card_3_Title: "تصميم دعوات إلكترونية",
    card_3_Text: "نقوم بإنشاء تصاميم مبتكرة لدعوات تخرجك الرقمية، سهلة المشاركة مع أحبائك.",
    card_4_Title: "خدمة التصميم",
    card_4_Text: "إنشاء شعارات ومنشورات فريدة تعكس هوية تخرجك، مع دعم إبداعي لحفل تخرجك.",

    /**
    * About
    */

    aboutTitle: "معلومات عنا",
    aboutDescription:"\"تخرجي\" هي منصة مخصصة لتكون معك في أجمل لحظات حفل تخرجك. نحن نقدم خدمات متنوعة تلبي احتياجاتك لهذه اللحظات الخاصة، بدءًا من التصوير والتحرير وتصميم الدعوات، حتى حفل تخرجك.",
    aboutWhoTitle: "من نحن؟",
    aboutWhoDescription:"نحن فريق من المحترفين في مجالات التصوير الفوتوغرافي والفن البصري والتصميم. مهمتنا هي توفير كل ما يحتاجه الطلاب للاحتفال بتخرجهم بأعلى جودة واحترافية.",
    aboutSuccessTitle:"نجاحنا",
    aboutSuccess1:"تقديم خدمات التصوير الفوتوغرافي والتحرير الاحترافي لآلاف الطلاب عند تخرجهم.",
    aboutSuccess2:"تصميم دعوات تخرج رائعة ومبتكرة تناسب جميع الأذواق.",
    aboutSuccess3:"توفير تجارب لا تنسى مما يجعل لحظات التخرج لا تنسى",
    aboutMissionTitle:"مهمتنا",
    aboutMissionDescription:"مهمتنا هي أن نصبح شريكك الموثوق به في يوم تخرجك، لمساعدتك في تخليد كل لحظة، وإنشاء دعوات فريدة وتوفير خدمات تحرير احترافية ستجعل حدثك لا يُنسى.",
    
    /**
    * CTA
    */

    ctaTitle:"تابعنا على حساباتنا",
    
    /**
    * Contact
    */

    contactUs: "اتصل بنا",
    contactDescription:"يمكنك التواصل معنا من خلال الوسائل المتاحة أدناه، وسنكون سعداء بالتواصل معك ومساعدتك في جعل لحظات تخرجك لا تُنسى.",
    contactTitle:"اتصل بنا",
    visitTitle:"زورنا",
    visitAddress1:"نواكشوط، موريتانيا",
    visitAddress2:"123 شارع الحرية",
    callTitle:"اتصل بنا",

    /**
    * Footer
    */
    footerCopyRightInfo: " © 2025  جميع الحقوق محفوظة بواسطة",},
};


/**
 * Language switcher
 */
const customSelectBox = document.querySelector(".custom-select-box");
const customSelectOptions = document.querySelector(".custom-select-options");
const selectedLang = document.getElementById("selected-lang");
const options = document.querySelectorAll(".option");

customSelectBox.addEventListener("click", () => {
  customSelectOptions.classList.toggle("open"); 
});

/**
  * Event listener for the language dropdown
*/
options.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.getAttribute("data-value");
    selectedLang.textContent = option.textContent.trim();
    
    saveLanguage(lang); 
    
    customSelectOptions.classList.remove("open");
    
    switchLanguage(lang);
  });
});

function saveLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);
}
/** Note:
  * Makhtor side ar will be the default language.
*/
function loadLanguage() {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "fr"; // Default to 'fr' if not found you can change it to 'ar'
  document.getElementById("select-lang").value = savedLanguage; 
  selectedLang.textContent = getLanguageName(savedLanguage); 
  switchLanguage(savedLanguage); 
}

function getLanguageName(langCode) {
  const languageNames = {
    'fr': 'Français',
    'ar': 'العربية',
  };
  return languageNames[langCode] || 'Français'; // Default to 'Français' if not found you can change it to 'العربية'
}

function switchLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Language '${lang}' not supported.`);
    return;
  }
  /**
   * Change the direction of the page based on the selected language
   * Add or remove the 'arabic' class to the <html> element
   */
   const htmlElement = document.documentElement; 
   if (lang === "ar") {
     htmlElement.setAttribute("dir", "rtl"); 
     htmlElement.classList.add("arabic");
   } else {
     htmlElement.setAttribute("dir", "ltr"); 
     htmlElement.classList.remove("arabic");
   }
  /**
  * Change the text content of the elements based on the selected language
  */
  document.title = translations[lang].webTitle;
  document.querySelector("[data-translate='webMark']").textContent = translations[lang].webMark;
  document.querySelector("[data-translate='webName']").textContent = translations[lang].webName;
  document.querySelector("[data-translate='home']").textContent = translations[lang].home;
  document.querySelector("[data-translate='service']").textContent = translations[lang].service;
  document.querySelector("[data-translate='about']").textContent = translations[lang].about;
  document.querySelector("[data-translate='contact']").textContent = translations[lang].contact;
  document.querySelector("[data-translate='heroTitle']").textContent = translations[lang].heroTitle;
  document.querySelector("[data-translate='heroText']").textContent = translations[lang].heroText;
  document.querySelector("[data-translate='btnText']").textContent = translations[lang].btnText;
  document.querySelector("[data-translate='servicesTitle']").textContent = translations[lang].servicesTitle;
  document.querySelector("[data-translate='servicesText']").textContent = translations[lang].servicesText;
  document.querySelector("[data-translate='card_1_Title']").textContent = translations[lang].card_1_Title;
  document.querySelector("[data-translate='card_1_Text']").textContent = translations[lang].card_1_Text;
  document.querySelector("[data-translate='card_2_Title']").textContent = translations[lang].card_2_Title;
  document.querySelector("[data-translate='card_2_Text']").textContent = translations[lang].card_2_Text;
  document.querySelector("[data-translate='card_3_Title']").textContent = translations[lang].card_3_Title;
  document.querySelector("[data-translate='card_3_Text']").textContent = translations[lang].card_3_Text;
  document.querySelector("[data-translate='card_4_Title']").textContent = translations[lang].card_4_Title;
  document.querySelector("[data-translate='card_4_Text']").textContent = translations[lang].card_4_Text;
  document.querySelector("[data-translate='aboutTitle']").textContent = translations[lang].aboutTitle;
  document.querySelector("[data-translate='aboutDescription']").textContent = translations[lang].aboutDescription;
  document.querySelector("[data-translate='aboutWhoTitle']").textContent = translations[lang].aboutWhoTitle;
  document.querySelector("[data-translate='aboutWhoDescription']").textContent = translations[lang].aboutWhoDescription;
  document.querySelector("[data-translate='aboutSuccessTitle']").textContent = translations[lang].aboutSuccessTitle;
  document.querySelector("[data-translate='aboutSuccess1']").textContent = translations[lang].aboutSuccess1;
  document.querySelector("[data-translate='aboutSuccess2']").textContent = translations[lang].aboutSuccess2;
  document.querySelector("[data-translate='aboutSuccess3']").textContent = translations[lang].aboutSuccess3;
  document.querySelector("[data-translate='aboutMissionTitle']").textContent = translations[lang].aboutMissionTitle;
  document.querySelector("[data-translate='aboutMissionDescription']").textContent = translations[lang].aboutMissionDescription;
  document.querySelector("[data-translate='ctaTitle']").textContent = translations[lang].ctaTitle;
  document.querySelector("[data-translate='contactUs']").textContent = translations[lang].contactUs;
  document.querySelector("[data-translate='contactDescription']").textContent = translations[lang].contactDescription;
  document.querySelector("[data-translate='contactTitle']").textContent = translations[lang].contactTitle;
  document.querySelector("[data-translate='visitTitle']").textContent = translations[lang].visitTitle;
  document.querySelector("[data-translate='visitAddress1']").textContent = translations[lang].visitAddress1;
  document.querySelector("[data-translate='visitAddress2']").textContent = translations[lang].visitAddress2;
  document.querySelector("[data-translate='callTitle']").textContent = translations[lang].callTitle;
  document.querySelector("[data-translate='footerCopyRightInfo']").textContent = translations[lang].footerCopyRightInfo;
}

document.addEventListener("DOMContentLoaded", loadLanguage); 
