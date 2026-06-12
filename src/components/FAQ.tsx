import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Clock, Calendar, Sparkles, Shield, AlertTriangle } from "lucide-react";

interface FAQProps {
  lang: "en" | "ar";
}

interface FAQItem {
  id: string;
  category: "packages" | "turnaround" | "policies";
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  icon: any;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-diff",
    category: "packages",
    question: "What is the difference between Paint Correction, Ceramic Coating, and PPF?",
    questionAr: "ما الفرق بين تصحيح الطلاء، السيراميك، وأفلام الحماية (PPF)؟",
    answer: "Paint correction is a micro-polishing process that levels your clear coat to permanently remove swirl marks, light scratches, and oxidation. Ceramic Coating is a hard liquid-glass layer that bonds to the coat to provide deep wet gloss and high hydrophobic repel-action against dust and water. Paint Protection Film (PPF) is a 180-microns thick elastomeric self-healing film designed purely to absorb heavy physical impacts such as road gravel, door dings, sand abrasion, and paint chips.",
    answerAr: "تصحيح الطلاء هو عملية صقل مجهري تسوي السطح لإزالة الخدوش الدائرية والبهتان بشكل نهائي. النانو سيراميك هو طبقة زجاجية سائلة تتصلب للترابط مع الهيكل وتمنح لمعاناً رطباً عمقياً وقدرة فائقة على طرد الغبار والماء. أما فيلم الحماية (PPF) فهو غشاء مرن معالج ذاتياً بسمك 180 ميكرون مصمم لامتصاص الصدمات المادية القوية مثل طريق الحصى، احتكاك الرمال، والخدوش العشوائية.",
    icon: Sparkles,
  },
  {
    id: "faq-time-detail",
    category: "turnaround",
    question: "How long does a full detailing service take?",
    questionAr: "كم من الوقت يستغرق غسيل وتلميع السيارة بالكامل؟",
    answer: "A standard Full Interior & Exterior Detail typically takes 1 full working day (approximately 8-10 hours). Our specialists meticulously treat every single leather crease, AC vent, chassis line, and tire glaze. We refuse to rush our work to guarantee a flawless showroom finish.",
    answerAr: "تستغرق باقة التلميع الغسيل الكامل الداخلي والخارجي عادة يوم عمل كامل (حوالي 8 إلى 10 ساعات). يعتني خبراؤنا بكل فتحة مكيف وفواصل المقاعد والجلد والجنوط بشكل يدوي دقيق تماماً، ونرفض الاستعجال لضمان تسليم سيارتك بمستوى يفوق التوقعات.",
    icon: Clock,
  },
  {
    id: "faq-time-ceramic-ppf",
    category: "turnaround",
    question: "What is the turnaround time for PPF or Ceramic Coating installations?",
    questionAr: "ما هي مدة تركيب باقات النانو سيراميك وأفلام الحماية (PPF)؟",
    answer: "Professional multi-layer Ceramic Coating requires 24 to 36 hours to allow correct chemical curing in our dust-controlled environment. Full-car Paint Protection Film (PPF) application is highly meticulous and takes 2 to 4 working days to ensure every corner is cleanly wrapped, heat-sealed, and dried with zero bubbles.",
    answerAr: "يتطلب طلاء النانو سيراميك من 24 إلى 36 ساعة للسماح بالصلابة الكيميائية في بيئة آمنة ومعزولة عن الغبار. بينما يحتاج فيلم حماية الطلاء للسيارة بالكامل (PPF) من 2 إلى 4 أيام عمل لضمان دقة لف حواف الهيكل، إحكام حراري تام، وجفاف الفيلم بنسبة 100٪ بدون فقاعات.",
    icon: Shield,
  },
  {
    id: "faq-booking",
    category: "policies",
    question: "Do I need to book an appointment in advance? What is your rescheduling policy?",
    questionAr: "هل أحتاج لطلب حجز مسبق؟ وما هي سياسة تعديل أو إلغاء الموعد؟",
    answer: "Yes, to give each luxury car the attention it deserves, we operate strictly by appointment and highly recommend booking 2 to 3 days in advance. If you need to reschedule or cancel your slot, please let us know via WhatsApp or phone call at least 24 hours prior so we can adjust our schedule.",
    answerAr: "نعم، لضمان حصول كل سيارة فارهة على كامل وقتها المستحق، نعمل بنظام المواعيد وننصح بشدة بالحجز قبل يومين أو ثلاثة من موعد الخدمة. وإذا رغبت في إلغاء أو تغيير الموعد، يرجى إبلاغنا عبر الهاتف أو الواتساب قبل موعدك بـ 24 ساعة على الأقل ليتمكن فريق العمل من إعادة الحجز.",
    icon: Calendar,
  },
  {
    id: "faq-aftercare",
    category: "turnaround",
    question: "How should I maintain my car after a ceramic coating or PPF treatment?",
    questionAr: "كيف يجب أن أعتني بسيارتي بعد البوليمر السيراميكي أو الـ PPF؟",
    answer: "Do not wash the car with high pressure or chemicals for the first 7 days post-delivery to let the coatings fully cure. After that, wash with pH-neutral soap, premium mitts, and microfiber towels. Never use generic automatic washes with spinning nylon brushes, as they will micro-scratch any finish.",
    answerAr: "تجنب كلياً غسيل سيارتك بالمياه المضغوطة أو الصابون لفترة الـ 7 أيام الأولى بعد استلامها لضمان ثبات تام. بعد ذلك، قم بغسلها يدوياً باستخدام شامبو معادل الحموضة (Neutral pH) وفوط مايكروفايبر ناعمة، ولا تذهب أبداً لمحطات الغسيل الآلية بالفرش الطيارة لأنها تسبب خدوشاً وسطحية.",
    icon: AlertTriangle,
  },
  {
    id: "faq-summer",
    category: "packages",
    question: "Does detailing and film protection work against Qatar's intense summer heat?",
    questionAr: "هل توفر خدمات العناية والسيراميك حماية كافية ضد صيف قطر اللاهب؟",
    answer: "Absolutely. Our premium German chemistry ceramic coatings and high-grade aliphatic polyurethane PPFs are engineered specifically for extreme Middle Eastern temperatures. They include high-density UV blocks that prevent paint oxidation, fading, bird-dropping etching, and yellowing, keeping your premium coat pristine.",
    answerAr: "بالتأكيد. باقات النانو سيراميك الألمانية وأفلام الحماية بولي يوريثان عالية الجودة مصممة ومختبرة مسبقاً لتحمل درجات الحرارة والظروف المناخية القاسية للخليج. تحتوي على مركبات صلبة تمتص الأشعة فوق البنفسجية وتمنع تماماً أكسدة أو تلاشي الطلاء وبهتانه، مما يحفظ القيمة والبريق لسيارتك.",
    icon: Sparkles,
  }
];

export default function FAQ({ lang }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "packages" | "turnaround" | "policies">("all");
  const [openId, setOpenId] = useState<string | null>("faq-diff"); // default open the first one

  const categories = [
    { value: "all", label: "All Questions", labelAr: "كل الأسئلة" },
    { value: "packages", label: "Treatments & Gloss", labelAr: "باقات الحماية والتلميع" },
    { value: "turnaround", label: "Turnaround & Care", labelAr: "مدة العمل والعناية" },
    { value: "policies", label: "Booking & Policies", labelAr: "الحجز والسياسات" },
  ] as const;

  const filteredItems = FAQ_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-dark relative overflow-hidden border-t border-dark-border">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
            {lang === "en" ? "Common Roadblocks Cleared" : "إجابات لاستفساراتكم الشائعة"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white tracking-tight">
            {lang === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة وعملاؤنا"}
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-muted-gray leading-relaxed font-sans font-light max-w-2xl mx-auto">
            {lang === "en"
              ? "Everything you need to know about our artisan car protection, time frames, warranties, and center guidelines in Al Wakrah."
              : "كل ما تود معرفته عن حماية الطلاء المتكاملة، فترات التسليم، ضمان الجودة، والسياسات المعتمدة لدينا بفرع بروة الوكرة."}
          </p>
        </div>

        {/* Categorization Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="faq-categories-tabs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                id={`faq-tab-${cat.value}`}
                onClick={() => {
                  setActiveCategory(cat.value);
                  // Open first item of newly selected category
                  const firstOfCat = FAQ_ITEMS.find(
                    (item) => cat.value === "all" || item.category === cat.value
                  );
                  if (firstOfCat) setOpenId(firstOfCat.id);
                }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gold text-dark font-bold shadow-[0_4px_15px_rgba(201,168,76,0.3)]"
                    : "bg-dark-card border border-dark-border text-warm-white/70 hover:text-gold hover:border-gold/30 hover:bg-zinc-900"
                }`}
              >
                {lang === "en" ? cat.label : cat.labelAr}
              </button>
            );
          })}
        </div>

        {/* Accordions Container */}
        <div className="space-y-4" id="faq-accordions-list">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isOpen = openId === item.id;
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.id}
                  id={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-dark-card/90 border-gold/50 shadow-[0_10px_30px_rgba(201,168,76,0.06)]"
                      : "bg-dark-card/40 border-dark-border hover:border-gold/30"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    id={`${item.id}-trigger`}
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 px-6 sm:px-8 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        isOpen ? "bg-gold/10 text-gold border border-gold/30" : "bg-dark-border/40 text-muted-gray"
                      }`}>
                        <IconComponent size={18} />
                      </div>
                      <span className="font-display font-bold text-sm sm:text-base md:text-lg text-warm-white hover:text-gold transition-colors duration-200">
                        {lang === "en" ? item.question : item.questionAr}
                      </span>
                    </div>

                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : "text-muted-gray"}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {/* Accordion Content Block */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pt-1 px-6 sm:px-8 border-t border-dark-border/60">
                      <p className="text-xs sm:text-sm text-warm-white/80 leading-relaxed font-sans font-light">
                        {lang === "en" ? item.answer : item.answerAr}
                      </p>
                      
                      {/* Short action badge to make it extremely dynamic and high end */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gold">
                          {lang === "en" ? "Royal Way Qatar Certified Crew" : "طاقم رويال واي المعتمد قطر"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic Help Center Footer Block */}
        <div id="faq-assistant-cta" className="mt-16 text-center p-8 rounded-3xl bg-dark-card border border-dark-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-display text-lg sm:text-xl font-bold text-warm-white mb-2">
            {lang === "en" ? "Have a custom enquiry or rare vehicle paint concern?" : "هل لديك استفسار خاص بطراز سيارتك أو حالة الطلاء؟"}
          </h3>
          <p className="text-xs sm:text-sm text-muted-gray mb-6 max-w-xl mx-auto font-sans font-light">
            {lang === "en"
              ? "Speak directly with our Chief Detailing Officer. We provide bespoke consultation for vintage restorations and exotic carbon fiber."
              : "تحدث مباشرة مع مدير قسم الفنيين لدينا. نقدم استشارات مخصصة وترميم كلي للسيارات الكلاسيكية وألياف الكربون."}
          </p>
          <a
            href="https://wa.me/97455066333?text=Hi%20Royal%20Way%20team%2C%20I%20have%20a%20special%20enquiry%20about%20my%20vehicle%20detailing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-dark text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-gold/20 transform hover:scale-[1.02] cursor-pointer"
          >
            <span>{lang === "en" ? "Chat on WhatsApp" : "تواصل معنا مباشرة"}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
