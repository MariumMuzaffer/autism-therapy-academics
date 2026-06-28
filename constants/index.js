import {
  Mail,
  Phone,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Heart,
  ArrowRight,
  CheckCircle2,
  Clock,
  BarChart3,
  Sparkles,
  GraduationCap,
  Puzzle,
  HeartHandshake,
  Users,
  UserCheck,
  BookOpen,
  Target,
  Star,
  Repeat,
  Building2,
  Send,
  AlertCircle,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Navigation Bar Content Data
// ─────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact-us" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Home page Content Data
// ─────────────────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: "18mo – 14yr", label: "Ages Accepted" },
  { value: "1 : 1", label: "Play-Based Therapy" },
  { value: "BCBA", label: "Led Programs" },
];

const ACCEPTED_INSURANCE = "Aetna IL (Commercial & Medicaid)";
const UPCOMING_INSURANCE =
  "IL MEDICAID - BCBS · County Care · Meridian · Molina" +
  " | " +
  "HFS Illinois (Department of Healthcare and Family Services)";

const APPROACH_ITEMS = [
  {
    Icon: BarChart3,
    title: "Evidence-Based Protocols",
    desc: "Proven techniques tailored to each child's unique needs and strengths.",
    accent: "#0597F2",
  },
  {
    Icon: Sparkles,
    title: "Data-Driven Decisions",
    desc: "Real-time data guides treatment adjustments and progress monitoring.",
    accent: "#F2A007",
  },
  {
    Icon: GraduationCap,
    title: "Academic Integration",
    desc: "Bridging the gap where academics meets advocacy for classroom success.",
    accent: "#62BF04",
  },
];

const HOME_SERVICES = [
  {
    Icon: Puzzle,
    title: "ABA Services - In-Home Sessions",
    desc: "Individualized, evidence-based therapy focused on building communication, social and daily living skills.",
    featured: true,
  },
  {
    Icon: HeartHandshake,
    title: "Parent Coaching",
    desc: "Hands-on coaching sessions that empower parents with practical strategies.",
  },
  {
    Icon: GraduationCap,
    title: "School Support",
    desc: "Collaboration with schools to support IEP goals and classroom success.",
    bg: "#FFE75C",
  },
  {
    Icon: Users,
    title: "Caregiver Support",
    desc: "Ongoing guidance to help caregivers reinforce skills at home.",
    bg: "#ED6AFF",
  },
  {
    Icon: BookOpen,
    title: "Tutoring",
    desc: "Targeted academic support integrated with behavioral strategies.",
    bg: "#FFA2A2",
  },
  {
    Icon: UserCheck,
    title: "Training & Supervision",
    desc: "Professional training for consistent implementation of ABA strategies.",
    bg: "#A4F4CF",
  },
];

const FAMILY_BULLETS = [
  {
    title: "Customized Family Coaching:",
    desc: "Practical training tailored to your child's goals.",
  },
  {
    title: "Community Integration:",
    desc: "Guided experiences that promote confidence and participation in everyday life.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// About Us page Content data
// ─────────────────────────────────────────────────────────────────────────────
const HERO_PILLS = [
  {
    label: "Evidence-Based",
    dotCls: "bg-[#0597F2]",
    bgCls: "bg-[#0597F2]/10",
    borderCls: "border-[#0597F2]/25",
  },
  {
    label: "Compassionate Care",
    dotCls: "bg-[#62BF04]",
    bgCls: "bg-[#62BF04]/10",
    borderCls: "border-[#62BF04]/25",
  },
  {
    label: "Measurable Outcomes",
    dotCls: "bg-[#F2A007]",
    bgCls: "bg-[#F2A007]/10",
    borderCls: "border-[#F2A007]/30",
  },
];

const CORE_PRINCIPLES = [
  {
    Icon: BarChart3,
    title: "Evidence-Based Protocols",
    desc: "Proven techniques tailored to each child's needs. Every intervention is grounded in peer-reviewed research and clinical best practices.",
    accent: "#0597F2",
  },
  {
    Icon: Target,
    title: "Data-Driven Decisions",
    desc: "Real-time data guides treatment adjustments and progress monitoring. We track every milestone to ensure meaningful outcomes.",
    accent: "#62BF04",
  },
  {
    Icon: Star,
    title: "Positive Reinforcement",
    desc: "Celebrate effort and success to make learning motivating and meaningful. We build on strengths, not just address challenges.",
    accent: "#F2A007",
  },
];

const ACADEMIC_ITEMS = [
  {
    Icon: Users,
    title: "Group Learning Dynamics",
    desc: "Small-group instruction focused on communication, cooperation and following directions.",
    accent: "#0597F2",
  },
  {
    Icon: Repeat,
    title: "Transition Planning",
    desc: "Individualized assessments and support for successful school transitions.",
    accent: "#F2A007",
  },
];

const COMMUNITY_CARDS = [
  {
    Icon: HeartHandshake,
    title: "Customized Family Coaching",
    desc: "Practical training tailored to your child's goals, delivered in a way that fits your family's routine.",
    accent: "#0597F2",
    gradient: "from-[#0597F2]/8 to-[#043F8C]/5",
  },
  {
    Icon: Building2,
    title: "Community Integration",
    desc: "Guided experiences that promote confidence and participation in everyday life.",
    accent: "#62BF04",
    gradient: "from-[#62BF04]/8 to-[#043F8C]/5",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Services Page Content data
// ─────────────────────────────────────────────────────────────────────────────
const ABA_BULLETS = [
  "Communication & social skills development",
  "Daily living skills & independence training",
  "Structured 1:1 support sessions",
  "Positive reinforcement-based approaches",
];

const ALL_SERVICES = [
  {
    Icon: Puzzle,
    title: "ABA Services - In-Home Sessions",
    desc: "Individualized, evidence-based therapy focused on building communication, social and daily living skills while reducing challenging behaviors through structured, 1:1 support.",
    featured: true,
  },
  {
    Icon: UserCheck,
    title: "Training & Supervision",
    desc: "Professional training and supervision for staff and caregivers to ensure high-quality, consistent implementation of ABA strategies and best practices.",
  },
  {
    Icon: Users,
    title: "Caregiver Support",
    desc: "Ongoing guidance and resources to help caregivers reinforce skills at home and confidently support their child's development.",
  },
  {
    Icon: HeartHandshake,
    title: "Parent Coaching",
    desc: "Hands-on coaching sessions that empower parents with practical strategies to manage behaviors, build skills, and promote consistency across environments.",
  },
  {
    Icon: GraduationCap,
    title: "School Support",
    desc: "Collaboration with schools to support IEP goals, improve classroom success and ensure skill generalization in academic settings.",
  },
  {
    Icon: BookOpen,
    title: "Tutoring",
    desc: "Targeted academic support integrated with behavioral strategies to improve focus, learning outcomes and confidence.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Contact Us Page Content data
// ─────────────────────────────────────────────────────────────────────────────
const CONTACT_CARDS = [
  {
    Icon: Mail,
    label: "Email Us",
    value: "info@ata-org.com",
    href: "mailto:info@ata-org.com"
  },
  {
    Icon: Phone,
    label: "Call Us",
    value: "331-332-0712",
    href: "tel:+13313320712"
  },
  {
    Icon: Clock,
    label: "Ages Accepted",
    value: "18 months – 14 years",
    href: "#"
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ content
// ─────────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: "Do you have a waiting list?",
    answer: "No.",
  },
  {
    question: "Do you offer out-of-pocket ABA services?",
    answer:
      "Yes, we offer an affordable plan for ABA services, even without insurance.",
  },
  {
    question: "Do you provide clinic based services?",
    answer: "Clinic coming soon.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Footer Constants Data
// ─────────────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

const CONTACT_INFO = [
  { Icon: Mail, label: "info@ata-org.com", href: "mailto:info@ata-org.com" },
  { Icon: Phone, label: "331-332-0712", href: "tel:+13313320712" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const CURRENT_YEAR = new Date().getFullYear();

export {
  QUICK_LINKS,
  CONTACT_INFO,
  LEGAL_LINKS,
  CURRENT_YEAR,
  ArrowUpRight,
  Mail,
  Phone,
  Menu,
  X,
  ChevronDown,
  navLinks,
  Heart,
  ArrowRight,
  CheckCircle2,
  Clock,
  BarChart3,
  Sparkles,
  GraduationCap,
  Puzzle,
  HeartHandshake,
  Users,
  UserCheck,
  BookOpen,
  Target,
  Star,
  Repeat,
  Send,
  AlertCircle,
  Building2,
  HERO_STATS,
  ACCEPTED_INSURANCE,
  UPCOMING_INSURANCE,
  APPROACH_ITEMS,
  HOME_SERVICES,
  FAMILY_BULLETS,
  HERO_PILLS,
  CORE_PRINCIPLES,
  ACADEMIC_ITEMS,
  COMMUNITY_CARDS,
  ABA_BULLETS,
  ALL_SERVICES,
  CONTACT_CARDS,
  FAQS
};
