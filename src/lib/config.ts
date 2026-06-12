// ============================================================
// 🔴 EDIT THIS FILE ONLY when building for a new business
// ============================================================

export const SITE_CONFIG = {
  // ── Identity ──────────────────────────────────────────────
  businessName: "Royal Way Car Detailing Centre",
  businessNameAr: "مركز رويال واي للعناية بالسيارات",
  tagline: "Where Perfection Meets Passion",
  taglineAr: "حيث الكمال يلتقي بالشغف",        // Arabic tagline
  logoText: "ROYAL WAY",
  logoTextAr: "رويال واي",
  logoPath: "/logo.ico",

  // ── Contact ───────────────────────────────────────────────
  phone: "+974 5506 6333", // Royal Way actual contact or proxy
  whatsapp: "https://wa.me/97455066333", // Royal Way real WhatsApp Link
  email: "info@royalwaydetailing.com",
  instagram: "https://instagram.com/royalway.qa", // Standard local social link

  // ── Location ──────────────────────────────────────────────
  address: "Barwa Village, Building 17, Shop 33, Al Wakrah, Qatar",
  addressAr: "قرية بروة، مبنى 17، محل 33، الوكرة، قطر",
  googleMapsUrl: "https://www.google.com/maps/place/Royal+Way+Car+Detailing+Centre/@25.2104085,51.4251038,12z/data=!4m10!1m2!2m1!1sqatar+car+detailing!3m6!1s0x3e45cfc2ed3df315:0x6f695d84579cc821!8m2!3d25.2104085!4d51.5775391!15sChNxYXRhciBjYXIgZGV0YWlsaW5nWhUiE3FhdGFyIGNhciBkZXRhaWxpbmeSARhhdXRvX3Jlc3RvcmF0aW9uX3NlcnZpY2WaASRDaGREU1VoTk1HOW5TMFZRYlhWcGRYSldiV0poVFdwQlJSQULgAQD6AQUI9wMQQQ!16s%2Fg%2F11kpfz2yw8?entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D",
  // Google Maps standard embedded iframe URL for Al Wakrah Royal Way
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d115454.49653139892!2d51.4251038!3d25.2104085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cfc2ed3df315%3A0x6f695d84579cc821!2sRoyal%20Way%20Car%20Detailing%20Centre!5e0!3m2!1sen!2sqa!4v1781226000000!5m2!1sen!2sqa",

  // ── Hours ─────────────────────────────────────────────────
  hours: [
    { day: "Saturday – Thursday", dayAr: "السبت – الخميس", time: "7:00 AM – 10:00 PM", timeAr: "7:00 صباحاً – 10:00 مساءً" },
    { day: "Friday", dayAr: "الجمعة", time: "Closed", timeAr: "مغلق" },
  ],

  // ── Social proof ──────────────────────────────────────────
  rating: "4.8",
  reviews: "119",
  platform: "Google Reviews",

  // ── Hero ──────────────────────────────────────────────────
  heroBackground: "/src/assets/images/main_background_1781226015883.jpg",

  // ── Gallery ───────────────────────────────────────────────
  // Using direct premium generated images from the AI Studio Workspace
  galleryImages: [
    {
      src: "/src/assets/images/gallery_01_1781226032526.jpg",
      title: "Paint Correction & Polish",
      titleAr: "تصحيح مصقول وتلميع الطلاء",
      category: "Correction"
    },
    {
      src: "/src/assets/images/gallery_02_1781226047310.jpg",
      title: "Active Snow-Wash Suds",
      titleAr: "غسيل رغوي نشط للسيارات",
      category: "Detailing"
    },
    {
      src: "/src/assets/images/gallery_03_1781226062096.jpg",
      title: "Steamed & Conditioned Leather",
      titleAr: "تنظيف وتعقيم الكراسي والشاشات",
      category: "Interior"
    },
    {
      src: "/src/assets/images/gallery_04_1781226078925.jpg",
      title: "Hydrophobic Glass-Shield Beading",
      titleAr: "حماية النانو سيراميك عالي اللمعان",
      category: "Ceramic"
    },
    {
      src: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80",
      title: "Rotary Swirl Correction",
      titleAr: "إزالة الخدوش الدائرية بالمكائن",
      category: "Correction"
    },
    {
      src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Seat Renovation",
      titleAr: "تجديد المقاعد الفاخرة بالكامل",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80",
      title: "Precision Foam Cleaning",
      titleAr: "تنظيف تفصيلي دقيق بالرغوة",
      category: "Detailing"
    },
    {
      src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80",
      title: "Deep Gloss Paint Sealant",
      titleAr: "عزل طلاء عميق وحماية الألوان",
      category: "Ceramic"
    }
  ],

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      id: "detail",
      icon: "Sparkles",
      title: "Full Detail",
      titleAr: "التنظيف الشامل الفاخر",
      description: "Complete interior master-cleaning + intensive exterior treatment. Leaves your vehicle looking better than showroom-ready.",
      descriptionAr: "تنظيف داخلي كامل وتلميع خارجي مكثف. تخرج سيارتك وكأنها خرجت للتو من صالة العرض.",
      price: "From QAR 250",
      priceAr: "تبدأ من 250 ر.ق",
      popular: false
    },
    {
      id: "ppf",
      icon: "Shield",
      title: "Paint Protection Film (PPF)",
      titleAr: "فيلم حماية الطلاء عالي المقاومة",
      description: "Military-grade ultra-clear self-healing polyurethane shield. Protects your metallic panels from rock chips, sand abrasion and extreme Qatar heat.",
      descriptionAr: "درع مالبولي يوريثان عسكري عالي الشفافية ذاتي المعالجة. يحمي سيارتك من الحصى وحصى الرمال وحرارة الصيف الشديدة.",
      price: "From QAR 1,800",
      priceAr: "تبدأ من 1,800 ر.ق",
      popular: true
    },
    {
      id: "ceramic",
      icon: "Droplets",
      title: "Ceramic Coating",
      titleAr: "طلاء النانو سيراميك 9H",
      description: "Multi-layer molecular 9H glass shield. Permanent hydrophobic surface tension, high UV rays deflection, and custom wet-mirror glossy depth.",
      descriptionAr: "درع زجاجي جزيئي متعدد الطبقات 9H. سطح دائم طارد للماء، حماية قصوى من الأشعة فوق البنفسجة، ولمعان المرآة.",
      price: "From QAR 1,200",
      priceAr: "تبدأ من 1,200 ر.ق",
      popular: false
    },
    {
      id: "interior",
      icon: "Car",
      title: "Interior Detailing & Steam",
      titleAr: "تنظيف وتفصيل داخلية السيارة بالبخار",
      description: "Full fabric extraction, deep steam sterilization, fine conditioning of premium leather, and active allergen/odor elimination.",
      descriptionAr: "غسيل شامل بالبخار الحار والتعقيم العالي للمراتب والجلد والأرضيات، وإزالة الروائح الكريهة والبقع الصعبة.",
      price: "From QAR 150",
      priceAr: "تبدأ من 150 ر.ق",
      popular: false
    },
    {
      id: "correction",
      icon: "Sun",
      title: "Multi-Stage Paint Correction",
      titleAr: "تصحيح الطلاء متعدد المراحل",
      description: "Expert level triple-pass compound buffing. Obliterates paint oxidation, severe swirl marks, spiderwebs and deep lacquer marks.",
      descriptionAr: "معالجة وإزالة الخدوش الدائرية وبهتان الألوان والدوائر الناتجة عن الغسيل الخاطئ باستخدام أفضل المركبات والمكائن العالمية.",
      price: "From QAR 600",
      priceAr: "تبدأ من 600 ر.ق",
      popular: false
    },
    {
      id: "tinting",
      icon: "Eye",
      title: "Premium Window Tinting",
      titleAr: "عزل وتظليل النوافذ الحراري",
      description: "Nano-ceramic films offering up to 98% infrared heat prevention. Indispensable defense to retain low temperatures inside Gulf cabins during peak summer.",
      descriptionAr: "أفلام نانو سيراميك متطورة تعزل حتى 98% من الحرارة والأشعة فوق البنفسجية — ضرورية ومهمة للتغلب على صيف الخليج والحد من حرارة المكيف.",
      price: "From QAR 400",
      priceAr: "تبدأ من 400 ر.ق",
      popular: false
    }
  ],

  // ── Why Us ────────────────────────────────────────────────
  whyUs: [
    { stat: "5+", label: "Years of Excellence", labelAr: "سنوات من التميز والإبداع" },
    { stat: "3,000+", label: "Luxury Cars Detailed", labelAr: "سيارة فاخرة تم تجهيزها" },
    { stat: "4.8★", label: "Google Rating", labelAr: "تقييم ممتاز على جوجل" },
    { stat: "100%", label: "Satisfaction Guaranteed", labelAr: "ضمان الرضا الكامل للعميل" }
  ],

  whyDetails: [
    {
      title: "State-of-The-Art Lab",
      titleAr: "مختبر مجهز بأحدث التقنيات",
      description: "Dust-controlled environment with correct premium daylight LED arrays for flawless detail observation.",
      descriptionAr: "بيئة تلميع خالية تماماً من الغبار ومجهزة بإضاءة LED متكاملة لمحاكاة ضوء النهار وكشف أدق التفاصيل لكشف العيوب."
    },
    {
      title: "Premium German Chemistry",
      titleAr: "كيميائيات ومواد ألمانية فائقة الجودة",
      description: "We use strictly elite European and Japanese solutions — no harsh chemicals or substandard compounds.",
      descriptionAr: "نعتمد كلياً على أرقى المحاليل السيراميكية والمواد الألمانية واليابانية لحماية ولمعان من الدرجة الأولى."
    },
    {
      title: "Expert Certified Crew",
      titleAr: "فريق خبير ومعتمد عالمياً",
      description: "Our detailing specialists are highly trained and experienced with exotic supercars, luxury SUVs, and classics.",
      descriptionAr: "أخصائيو التفصيل لدينا مدربون بشكل مكثف ولديهم خبرة واسعة في التعامل مع السيارات الفارهة والسوبر كارز."
    }
  ],

  // ── Testimonials ──────────────────────────────────────────
  testimonials: [
    {
      name: "Mohammed Al-Thani",
      nameAr: "محمد آل ثاني",
      text: "The absolute best detailing store in Qatar. My Land Cruiser looks completely showroom-fresh after their ceramic coating. Outstanding hospitality and precision.",
      textAr: "أفضل مركز تفصيل وعناية بالسيارات في قطر بلا منازع. لاندكروزر حقتي رجعت جديدة بعد السيراميك. شغل احترافي وتعامل راقي جداً.",
      rating: 5,
      role: "Land Cruiser Owner",
      roleAr: "مالك لاند كروزر"
    },
    {
      name: "Ahmed Al-Kuwari",
      nameAr: "أحمد الكواري",
      text: "Highly professional team, high-end European products, and very competitive pricing. The PPF film is literally invisible. Highly recommended to everyone who cares about their ride.",
      textAr: "طاقم عمل محترف، ومواد ألمانية ممتازة، وأسعار مناسبة للغاية. فيلم الـ PPF مركب بدقة متناهية ولا يظهر أبداً. أنصح به بشدة.",
      rating: 5,
      role: "Porsche 911 GT3 Owner",
      roleAr: "مالك بورشه 911"
    },
    {
      name: "Khalid Al-Sowaidi",
      nameAr: "خالد السويدي",
      text: "The nano-ceramic coating is pure magic — rainy drops or dirty sand just slides right off. Incredible visual depth and shine. Best investment for the Gulf heat.",
      textAr: "الكوتينج النانو سيراميك سحر عجيب — مجرد رش الماي أو عواصف الغبار تنزلق تماماً وما تعلق بالسيارة. لمعان رائع ومقاومة جيدة للحرارة.",
      rating: 5,
      role: "Patrol Super Safari Owner",
      roleAr: "مالك نيسان باترول"
    }
  ],

  // ── Pricing Packages ──────────────────────────────────────
  pricingPackages: [
    {
      title: "Elite Silver",
      titleAr: "الباقة الفضية المميزة",
      price: "600",
      period: "Single Session",
      popular: false,
      features: [
        "Exterior dual-stage paint correction",
        "Deep foam wash & clay bar treatment",
        "Premium quartz sealant application (6-month shine)",
        "Leather conditioning & vacuuming",
        "Tire glaze & exhaust tip polishing"
      ],
      featuresAr: [
        "تصحيح طلاء خارجي ثنائي المراحل لإزالة الدوائر",
        "غسيل رغوي مكثف وتلميع باستخدام صلصال تنقية الطلاء",
        "تطبيق مادة شمع الكوارتز الألماني لمعان يدوم 6 أشهر",
        "تنظيف وترطيب الجلد والفرش الداخلي بالكامل بالمكنسة",
        "تلميع حواف الشكمانات والكروم وتلميع الإطارات"
      ]
    },
    {
      title: "Royal Golden Shield",
      titleAr: "باقة رويال الذهبية (سيراميك)",
      price: "1,500",
      period: "with 2-Year Warranty",
      popular: true,
      features: [
        "3-stage full chassis paint correction",
        "Double layer 9H Nano-ceramic coating",
        "In-depth interior steam cleaning & sanitization",
        "Alloy wheel & windshield ceramic protection",
        "Engine bay professional detailing & coating",
        "Complementary maintenance check in 6 months"
      ],
      featuresAr: [
        "تصحيح طلاء خارجي ثلاثي المراحل لإزالة 95% من الخدوش",
        "تطبيق طبقتين من النانو سيراميك الألماني 9H الأصلي",
        "تنظيف داخلي عميق بالبخار الساخن لقتل الجراثيم وتطهير الجلد",
        "حماية سيراميكية مخصصة للرنجات (الجنوط) والزجاج الأمامي",
        "تنظيف وتزيين وتلميع حوض المحرك بالكامل بمواد آمنة",
        "فحص وصيانة مجانية إضافية بعد 6 أشهر"
      ]
    },
    {
      title: "Imperial PPF Armor",
      titleAr: "درع الحماية الإمبراطوري PPF",
      price: "4,500",
      period: "with 5-Year Warranty",
      popular: false,
      features: [
        "Full front or ultimate full car premium PPF",
        "180-Micron thickness self-healing polyurethane",
        "Severe scratch, sandstorm, and UV protection",
        "Pre-installation deep paint correction & glossing",
        "Wrapped edges for a completely invisible fit",
        "Free annual inspection & chemical detail wash"
      ],
      featuresAr: [
        "تغليف مقدمة السيارة أو كامل الهيكل بفيلم PPF الفاخر",
        "بولي يوريثان سمك 180 ميكرون معالج ذاتياً للخدوش بالحرارة",
        "مقاومة خارقة للحصى المتطاير وخدوش الرمال وأشعة الشمس والتشهيب",
        "تصحيح وتلميع مجهري فائق مسبق للطلاء لضمان أعلى التصاق وجاذبية",
        "حواف ملفوفة بالكامل ومخفية لتبدو غير مرئية وغاية في التناسق",
        "فحص مجاني سنوي وغسيل كيميائي مخصص لطبقات الحماية"
      ]
    }
  ]
};
