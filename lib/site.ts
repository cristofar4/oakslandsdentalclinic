/**
 * Oaklands Multispecialty Dental Care Clinic — central content source.
 * All real business facts (name, address, hours, services) are retained from
 * the existing brand; copy has been elevated for the premium redesign.
 */

export const site = {
  name: "Oaklands Dental Clinic",
  legalName: "Oaklands Multispecialty Dental Care Clinic",
  shortName: "Oaklands",
  tagline: "Precision dentistry. Effortless confidence.",
  description:
    "Oaklands Multispecialty Dental Care Clinic is Imo State's premier destination for advanced, patient-centred dentistry — from smile makeovers and orthodontics to restorative and preventive care in Owerri, Nigeria.",
  founded: 2015,
  url: "https://www.oaklandsdentalclinic.com",
  email: "info@oaklandsdentalclinic.com",
  supportEmail: "support@oaklandsdentalclinic.com",
  phone: "+234 703 653 1860",
  phoneHref: "+2347036531860",
  whatsapp: "+2347036531860",
  address: {
    line1: "Eve & Kez Plaza, MCC Road",
    line2: "34 Umuoba Uratta Road",
    city: "Owerri",
    state: "Imo State",
    postalCode: "460281",
    country: "Nigeria",
    full: "Eve & Kez Plaza, MCC Road (34 Umuoba Uratta Rd), Owerri 460281, Imo State, Nigeria",
    mapsQuery: "Oaklands+Multispecialty+Dental+Care+Clinic+Owerri",
    lat: 5.4861,
    lng: 7.0264,
  },
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 8:00 PM", open: true },
    { day: "Saturday", time: "9:00 AM – 7:00 PM", open: true },
    { day: "Sunday", time: "Emergencies only", open: false },
  ],
  socials: {
    facebook: "https://www.facebook.com/OaklandsDentals/",
    instagram: "https://www.instagram.com/imo_dentist_owerri/",
    linkedin: "https://ng.linkedin.com/company/oaklands-dental-clinic",
  },
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Our Team", href: "/team" },
  { label: "Stories", href: "/testimonials" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 20000, suffix: "+", label: "Smiles transformed", hint: "Patients served since 2015" },
  { value: 16, suffix: "+", label: "Specialists & clinicians", hint: "A multidisciplinary team" },
  { value: 10, suffix: " yrs", label: "Of trusted care", hint: "Founded in 2015" },
  { value: 98, suffix: "%", label: "Would recommend us", hint: "Based on patient feedback" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  duration: string;
  highlights: string[];
  category: "Cosmetic" | "Orthodontics" | "Restorative" | "Preventive" | "Surgical";
};

export const services: Service[] = [
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Professional, enamel-safe brightening for a radiant smile.",
    description:
      "Advanced in-clinic and laser whitening that lifts years of staining in a single visit — calibrated to your enamel for a brilliant, natural result.",
    longDescription:
      "Our professional whitening protocol uses medical-grade gels and laser activation to safely lift coffee, tea, wine and tobacco stains. Every treatment begins with a shade assessment and enamel check, so your brighter smile looks luminous — never artificial. Take-home maintenance trays keep results lasting.",
    icon: "Sparkles",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    duration: "45–60 mins",
    highlights: ["Up to 8 shades brighter", "Enamel-safe laser system", "Same-day results", "Take-home maintenance kit"],
    category: "Cosmetic",
  },
  {
    slug: "braces-orthodontics",
    title: "Braces & Orthodontics",
    short: "Modern alignment for healthier, beautifully balanced smiles.",
    description:
      "From discreet clear aligners to precision fixed braces, we straighten teeth and correct bites with digitally planned, comfort-first orthodontics.",
    longDescription:
      "Whether you choose near-invisible aligners or modern fixed braces, treatment is mapped with digital imaging so you can preview your final smile before you begin. Our orthodontic team manages crowding, spacing and bite issues for children, teens and adults — improving both aesthetics and long-term oral health.",
    icon: "AlignHorizontalDistributeCenter",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
    duration: "6–24 months",
    highlights: ["Clear aligner options", "Digital smile preview", "Child & adult orthodontics", "Bite & alignment correction"],
    category: "Orthodontics",
  },
  {
    slug: "smile-makeovers",
    title: "Smile Makeovers",
    short: "A bespoke transformation, designed around your face.",
    description:
      "A fully tailored cosmetic plan combining whitening, veneers, alignment and restorations to craft the smile you've always wanted.",
    longDescription:
      "A smile makeover is a curated combination of treatments designed around your facial features, lips and personality. We begin with a digital smile design consultation, then sequence whitening, veneers, contouring and restorations into one harmonious plan — so every detail, from tooth shape to shade, feels unmistakably you.",
    icon: "Smile",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    duration: "Tailored plan",
    highlights: ["Digital smile design", "Face-led aesthetics", "Combined treatment plan", "Natural, lasting results"],
    category: "Cosmetic",
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    short: "Gentle, pain-relieving therapy that saves natural teeth.",
    description:
      "Precise endodontic care that removes infection, ends pain and preserves your natural tooth — finished with a durable, lifelike crown.",
    longDescription:
      "Modern root canal therapy is comfortable and highly effective. Using magnification and gentle techniques, we remove infected tissue, disinfect the canal and seal the tooth — relieving pain while keeping your natural tooth in place. We finish most cases with a precision Zirconia crown for strength and beauty.",
    icon: "ShieldPlus",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    duration: "1–2 visits",
    highlights: ["Virtually painless", "Saves the natural tooth", "Magnified precision", "Finished with a crown"],
    category: "Restorative",
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    short: "Safe, calm removals — including complex surgical cases.",
    description:
      "When a tooth can't be saved, our surgical team performs gentle, sterile extractions with clear aftercare and seamless replacement options.",
    longDescription:
      "From simple removals to impacted wisdom teeth, our surgical clinicians prioritise comfort, safety and rapid healing. We explain every step, use effective anaesthesia, and guide you through aftercare. Where a tooth is lost, we plan replacement options — implants, bridges or dentures — to protect your bite and smile.",
    icon: "Stethoscope",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    duration: "30–60 mins",
    highlights: ["Simple & surgical cases", "Wisdom tooth removal", "Sterile, safe protocol", "Replacement planning"],
    category: "Surgical",
  },
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    short: "Ultra-thin porcelain artistry for a flawless front line.",
    description:
      "Hand-finished porcelain veneers that correct shape, shade and spacing — sculpting a bright, even and natural-looking smile.",
    longDescription:
      "Veneers are wafer-thin porcelain shells bonded to the front of your teeth to transform colour, shape, length and symmetry. Crafted by skilled ceramists and placed with meticulous precision, they're ideal for chips, gaps and discolouration — delivering a red-carpet smile that still looks completely natural.",
    icon: "Gem",
    image:
      "https://images.unsplash.com/photo-1581585095857-50a5b14f3c5b?auto=format&fit=crop&w=1200&q=80",
    duration: "2–3 visits",
    highlights: ["Hand-crafted porcelain", "Corrects shape & shade", "Stain resistant", "Natural translucency"],
    category: "Cosmetic",
  },
  {
    slug: "crowns-restorations",
    title: "Crowns & Restorations",
    short: "Strength and beauty restored with precision Zirconia.",
    description:
      "Custom crowns, bridges and tooth-coloured restorations that rebuild damaged teeth with strength, function and seamless aesthetics.",
    longDescription:
      "When teeth are cracked, worn or heavily filled, our restorations rebuild them to full strength and beauty. We use premium Zirconia and ceramic crowns, bridges and fillings — colour-matched and contoured to blend invisibly with your natural teeth, restoring confident chewing and a complete smile.",
    icon: "Crown",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    duration: "1–2 visits",
    highlights: ["Premium Zirconia crowns", "Bridges & inlays", "Colour-matched", "Long-lasting strength"],
    category: "Restorative",
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    short: "Cleanings and checkups that keep smiles healthy for life.",
    description:
      "Routine examinations, professional scaling and polishing, and tailored hygiene plans that stop problems before they start.",
    longDescription:
      "Prevention is the foundation of lasting oral health. Our hygiene team provides thorough scaling and polishing, gum-health assessments, and personalised home-care guidance. Regular checkups with digital diagnostics catch issues early — protecting your teeth, your comfort and your budget over a lifetime.",
    icon: "HeartPulse",
    image:
      "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1200&q=80",
    duration: "30–45 mins",
    highlights: ["Scaling & polishing", "Gum-health checks", "Digital diagnostics", "Personalised hygiene plan"],
    category: "Preventive",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  credentials: string[];
};

export const team: TeamMember[] = [
  {
    name: "Dr. David Wilfred",
    role: "Founder & Lead Dental Surgeon",
    specialty: "Restorative & Cosmetic Dentistry",
    bio: "A visionary clinician, Dr. Wilfred founded Oaklands in 2015 with a single belief: that world-class dentistry belongs in the heart of Owerri. From a team of three, he has built Imo State's most trusted multispecialty practice, blending surgical precision with a genuinely gentle chairside manner.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
    credentials: ["BDS", "Implantology", "Smile Design"],
  },
  {
    name: "Dr. Chukwuebuka Iroanya",
    role: "Endodontic & Restorative Lead",
    specialty: "Root Canal & Crowns",
    bio: "Renowned for pain-free root canal therapy, Dr. Iroanya combines magnification-led technique with an obsessive eye for detail. Patients travel across the region for his restorative work and the reassuring calm he brings to every appointment.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
    credentials: ["BDS", "Endodontics", "Zirconia Crowns"],
  },
  {
    name: "Dr. Amara Okeke",
    role: "Orthodontist",
    specialty: "Braces & Clear Aligners",
    bio: "Dr. Okeke designs confident smiles for children, teens and adults alike. With a digital-first approach to alignment, she makes orthodontic journeys predictable, comfortable and genuinely enjoyable from the first scan to the final reveal.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    credentials: ["BDS", "Orthodontics", "Aligner Therapy"],
  },
  {
    name: "Nurse Blessing Eze",
    role: "Lead Dental Hygienist",
    specialty: "Preventive & Hygiene Care",
    bio: "Blessing leads our preventive programme, turning routine cleanings into a calm, thorough ritual of care. Her warmth puts even the most anxious patients at ease — and her hygiene coaching keeps smiles healthy long after they leave the chair.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    credentials: ["RDH", "Periodontal Care", "Patient Coaching"],
  },
];

export type Testimonial = {
  name: string;
  treatment: string;
  rating: number;
  quote: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Chidinma A.",
    treatment: "Root Canal & Zirconia Crown",
    rating: 5,
    quote:
      "The entire process was handled with such care and professionalism. My root canal was completely painless and my new Zirconia crown looks exactly like a natural tooth. I can't recommend Oaklands enough.",
    location: "Owerri",
  },
  {
    name: "Emeka O.",
    treatment: "Surgical Extraction",
    rating: 5,
    quote:
      "I was terrified before my surgical extraction, but the dentist was so nice and the customer service was top-notch. It was over before I knew it. Genuinely the best dental experience I've had.",
    location: "Owerri",
  },
  {
    name: "Ngozi U.",
    treatment: "Veneers & Smile Makeover",
    rating: 5,
    quote:
      "They gave me the exact teeth shape I wanted. The dentist was patient, skilled and listened to everything I asked for. I finally smile in photos without thinking twice.",
    location: "Aba",
  },
  {
    name: "Tochukwu N.",
    treatment: "Scaling, Polishing & Biopsy",
    rating: 5,
    quote:
      "I brought my daughter in for scaling, polishing and a biopsy. The staff were so friendly and the service was top-notch. You can feel that they genuinely care about their patients.",
    location: "Owerri",
  },
  {
    name: "Adaeze K.",
    treatment: "Emergency Dental Care",
    rating: 5,
    quote:
      "Wonderful customer care, a beautiful and calm environment, and very affordable. They saw me quickly for an emergency and treated me like family. Easily the best clinic in Imo State.",
    location: "Owerri",
  },
  {
    name: "Ifeanyi M.",
    treatment: "Teeth Whitening",
    rating: 5,
    quote:
      "My teeth are several shades brighter after just one session and it looks completely natural. The clinic feels more like a luxury spa than a dental office. Outstanding from start to finish.",
    location: "Port Harcourt",
  },
];

export type SmileCase = {
  title: string;
  treatment: string;
  description: string;
  before: string;
  after: string;
};

export const smileCases: SmileCase[] = [
  {
    title: "Closing the gap",
    treatment: "Porcelain Veneers",
    description:
      "A full upper veneer set closed spacing and brightened shade for a balanced, confident smile line.",
    before:
      "https://images.unsplash.com/photo-1601001435957-74f0958a93c9?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1612968055231-a3a99c4ed4f6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Brighter in one visit",
    treatment: "Laser Whitening",
    description:
      "Years of coffee and tea staining lifted in a single in-clinic whitening session.",
    before:
      "https://images.unsplash.com/photo-1620916297612-4f3f4f5b2c0c?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Straight & aligned",
    treatment: "Clear Aligner Therapy",
    description:
      "Crowding corrected over a digitally planned aligner journey — no metal, no fuss.",
    before:
      "https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Rebuilt & restored",
    treatment: "Zirconia Crowns",
    description:
      "Worn and damaged teeth restored to full strength and a seamless, natural finish.",
    before:
      "https://images.unsplash.com/photo-1581585099522-f4ac2efe7f4e?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1000&q=80",
  },
];

export type GalleryImage = { src: string; caption: string; category: string };

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80",
    caption: "Smile makeover reveal",
    category: "Cosmetic",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80",
    caption: "Porcelain veneer detail",
    category: "Veneers",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    caption: "Professional whitening",
    category: "Whitening",
  },
  {
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
    caption: "Aligned & confident",
    category: "Orthodontics",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    caption: "Radiant results",
    category: "Cosmetic",
  },
  {
    src: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=80",
    caption: "Healthy, polished smile",
    category: "Preventive",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "How do I book my first appointment?",
    answer:
      "You can book online through our appointment page in under two minutes, or call us directly on +234 703 653 1860. New patients receive a comprehensive consultation where we discuss your goals and build a personalised treatment plan.",
  },
  {
    question: "Does treatment hurt?",
    answer:
      "Comfort is at the centre of everything we do. We use modern anaesthesia and gentle techniques, and many patients tell us procedures like root canals were completely painless. Let us know about any anxiety and we'll tailor your visit accordingly.",
  },
  {
    question: "Are your treatments affordable?",
    answer:
      "Absolutely. We're proud to deliver world-class dentistry at fair, transparent prices. We'll always explain costs upfront with no surprises, and we'll help you prioritise treatment in a way that suits your budget.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes. Dental emergencies — severe pain, swelling, trauma or a knocked-out tooth — are seen as a priority. Call us straight away on +234 703 653 1860 and we'll get you the fastest possible care, including on Sundays for emergencies.",
  },
  {
    question: "Where is Oaklands located?",
    answer:
      "We're at Eve & Kez Plaza on MCC Road (34 Umuoba Uratta Rd), Owerri, Imo State. We're easy to reach with convenient parking, and our team will happily guide you with directions when you book.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We're open Monday to Friday from 8:00 AM to 8:00 PM and Saturday from 9:00 AM to 7:00 PM. Sundays are reserved for emergencies. Our extended hours make it easy to find a time that fits around work and family.",
  },
];

export const values = [
  {
    title: "Patient-first comfort",
    description:
      "Every detail — from our calm interiors to gentle clinical technique — is designed around how you feel.",
    icon: "HeartHandshake",
  },
  {
    title: "Clinical excellence",
    description:
      "A multispecialty team using modern technology and evidence-based protocols for predictable, lasting results.",
    icon: "Award",
  },
  {
    title: "Honest & transparent",
    description:
      "Clear plans, upfront pricing and straight answers. You'll always understand your options before we begin.",
    icon: "ShieldCheck",
  },
  {
    title: "Smiles that last",
    description:
      "We treat the cause, not just the symptom — protecting your oral health and confidence for the long term.",
    icon: "Infinity",
  },
];

export const timeline = [
  {
    year: "2015",
    title: "A vision takes root",
    description:
      "Dr. David Wilfred opens Oaklands in Owerri with a team of three and an uncompromising standard of care.",
  },
  {
    year: "2017",
    title: "Multispecialty care arrives",
    description:
      "Orthodontics, endodontics and oral surgery join the practice, bringing advanced treatment under one roof.",
  },
  {
    year: "2020",
    title: "Technology-led dentistry",
    description:
      "Digital diagnostics, laser whitening and Zirconia restorations elevate precision and patient comfort.",
  },
  {
    year: "2023",
    title: "Imo State's most trusted",
    description:
      "Recognised as the region's leading dental clinic, with a team of 16+ clinicians and growing.",
  },
  {
    year: "Today",
    title: "20,000 smiles and counting",
    description:
      "Oaklands continues to set the standard for premium, patient-centred dentistry in Nigeria.",
  },
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We listen to your goals and concerns, then carry out a thorough digital examination of your oral health.",
  },
  {
    step: "02",
    title: "Personalised plan",
    description:
      "You receive a clear, tailored treatment plan with transparent pricing and a realistic timeline.",
  },
  {
    step: "03",
    title: "Gentle treatment",
    description:
      "Our specialists deliver your care with precision and comfort, keeping you informed at every step.",
  },
  {
    step: "04",
    title: "Lasting aftercare",
    description:
      "We support your results with maintenance, hygiene coaching and friendly follow-ups for the long term.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readingTime: string;
  date: string;
  author: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-habits-for-a-brighter-smile",
    title: "5 daily habits for a brighter, healthier smile",
    excerpt:
      "Small, consistent routines make the biggest difference to your oral health. Here are five our clinicians swear by.",
    category: "Oral Health",
    readingTime: "4 min read",
    date: "2026-05-18",
    author: "Nurse Blessing Eze",
    image:
      "https://images.unsplash.com/photo-1559757175-082c4a3f6f0c?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A radiant smile is built on the quiet consistency of everyday habits. While professional cleanings and treatments do the heavy lifting, the way you care for your teeth between visits determines how long your results last — and how healthy your mouth stays for life.",
      "First, brush for a full two minutes, twice a day, with a soft-bristled brush and fluoride toothpaste. Technique matters more than force: angle the brush gently towards the gumline and let the bristles do the work. Aggressive scrubbing wears enamel and irritates gums.",
      "Second, never skip flossing. The spaces between your teeth account for a large share of decay and gum disease, and no brush can reach them. A daily floss — or interdental brush — is the single most underrated habit in dentistry.",
      "Third, rethink the snacking. Frequent sugar and acidic drinks keep your mouth in a constant cycle of acid attack. Water is always the best choice, and finishing meals with water helps rinse away residue.",
      "Fourth, don't ignore your tongue. A gentle tongue clean reduces the bacteria responsible for bad breath and contributes to fresher, cleaner-feeling mouth all day.",
      "Finally, keep your routine checkups. Prevention is always easier, gentler and more affordable than treatment. Twice-yearly visits let us catch issues early — often before you'd ever notice them.",
    ],
  },
  {
    slug: "the-truth-about-teeth-whitening",
    title: "The truth about teeth whitening: what actually works",
    excerpt:
      "From charcoal trends to professional laser systems — we separate myth from evidence so you can choose safely.",
    category: "Cosmetic",
    readingTime: "5 min read",
    date: "2026-04-29",
    author: "Dr. David Wilfred",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Teeth whitening is one of the most requested treatments in cosmetic dentistry — and one of the most misunderstood. The internet is full of dramatic before-and-afters and DIY trends, but not all of them are safe, and very few deliver lasting, natural results.",
      "Let's start with the trends. Charcoal pastes and acidic fruit 'hacks' are abrasive: they may make teeth feel cleaner briefly, but over time they erode enamel, which can actually make teeth look more yellow as the darker dentine beneath shows through.",
      "Over-the-counter strips can offer mild improvement, but the concentration is low and the fit is generic. Without a custom tray, the gel often irritates gums and whitens unevenly.",
      "Professional whitening is different. We assess your enamel, protect your gums and use medical-grade gels — often activated with a gentle laser — to lift staining safely and evenly. The result is dramatic yet natural, and we calibrate the shade so it suits your face.",
      "The best part is longevity. With take-home maintenance trays and a few simple habits, professional results last far longer than any quick fix. If a brighter smile is on your list, let an experienced clinician guide you — your enamel will thank you.",
    ],
  },
  {
    slug: "conquering-dental-anxiety",
    title: "Conquering dental anxiety: a gentler way to care",
    excerpt:
      "Nervous about the dentist? You're not alone — and modern, comfort-first dentistry can change everything.",
    category: "Patient Comfort",
    readingTime: "4 min read",
    date: "2026-03-12",
    author: "Dr. Amara Okeke",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa8ed?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Dental anxiety is incredibly common, and it's nothing to be ashamed of. For many people it stems from a difficult experience years ago — and that memory can quietly delay the very care that would put them at ease.",
      "The good news is that modern dentistry is almost unrecognisable from the past. Gentle anaesthesia, refined techniques and calm, spa-like environments mean treatments that once felt daunting are now genuinely comfortable.",
      "At Oaklands, we start by listening. Tell us what makes you anxious and we'll adapt — whether that's explaining each step before we begin, agreeing on a signal to pause, or simply taking things at your pace.",
      "Small comforts matter too: a warm, quiet space, friendly faces, and never being rushed. Many of our most nervous patients tell us afterwards that the appointment was nothing like they feared.",
      "If anxiety has kept you away, please don't let it keep you in discomfort. Reach out, tell us how you feel, and let us show you a gentler way to care for your smile.",
    ],
  },
];

export const trustBadges = [
  "Multispecialty Care",
  "Modern Technology",
  "Gentle & Pain-Free",
  "20,000+ Patients",
  "Owerri, Imo State",
  "Emergency Care",
];
