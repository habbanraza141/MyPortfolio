export const site = {
  name: "Muhammad Habban",
  shortName: "Muhammad Habban",
  role: "Team Lead, React Native",
  location: "Karachi, Pakistan",
  email: "muhammadhabbanraza@gmail.com",
  summary:
    "React Native team lead shipping production Android and iOS apps. I take features from architecture to App Store and Play Store, keep releases stable, and mentor engineers along the way.",
};

export const experience = [
  {
    company: "Alasoft",
    location: "Karachi, Pakistan",
    role: "Team Lead, React Native Development",
    type: "Full Time",
    start: "Feb 2026",
    end: "Present",
    current: true,
    highlights: [
      "Leading the mobile team for a feature-rich social media app — architecture, technical planning, and delivery.",
      "Mentoring three developers through task allocation, code reviews, and hands-on problem-solving.",
      "Owning feature work, performance, debugging, and critical production issues.",
      "Working with product, design, QA, and backend to turn requirements into scalable mobile releases.",
      "Overseeing Android and iOS releases, workflows, and ongoing product maintenance.",
    ],
  },
  {
    company: "Anglebrackets",
    location: "Karachi, Pakistan",
    role: "React Native Engineer",
    type: "Full Time",
    start: "May 2025",
    end: "Jan 2026",
    current: false,
    highlights: [
      "Primary React Native owner for EHS Navigator (SaaS Environment, Health & Safety) and Mabel Insights AI.",
      "Built incident reporting and communication workflows so employees can report workplace hazards in-app.",
      "Integrated the mobile app with a NestJS and AWS backend, APIs, and cloud infrastructure.",
      "Owned the full lifecycle: development, debugging, testing, release prep, deployment, and post-production support.",
      "Worked independently, then mentored junior developers and supported releases across other teams.",
      "Managed Android and iOS builds and production submissions on Google Play and the App Store.",
    ],
  },
  {
    company: "PAZ Technologies",
    location: "Karachi, Pakistan",
    role: "Junior Frontend Developer",
    type: "Full Time",
    start: "Apr 2024",
    end: "Feb 2025",
    current: false,
    highlights: [
      "Contributed to web platforms for a telecommunications product serving international markets.",
      "Built responsive interfaces for global eSIM and telecom services, wired to REST APIs and live data.",
      "Collaborated with design, backend, QA, and project managers in an agile product team.",
      "Grew React Native skills independently before moving into a dedicated mobile role.",
    ],
  },
] as const;

export const work = [
  {
    title: "Social Media Application",
    company: "Alasoft",
    tag: "Team Lead",
    description:
      "Feature-rich social product on React Native. I lead architecture, delivery, performance, and Android/iOS releases with a team of three.",
  },
  {
    title: "EHS Navigator",
    company: "Anglebrackets",
    tag: "SaaS · Safety",
    description:
      "Mobile platform for workplace incident reporting, corrective actions, and communication across employees, managers, and leadership.",
  },
  {
    title: "Mabel Insights AI",
    company: "Anglebrackets",
    tag: "AI · Mobile",
    description:
      "AI-powered production app — from architecture and feature work through Play Store and App Store deployment and maintenance.",
  },
  {
    title: "Global eSIM Platform",
    company: "PAZ Technologies",
    tag: "Telecom · Web",
    description:
      "Frontend for international eSIM and telecom services: responsive UI, REST integrations, and agile delivery with a cross-functional team.",
  },
] as const;

export const skillGroups = [
  {
    title: "Mobile",
    items: [
      "React Native",
      "Android",
      "iOS",
      "Play Store",
      "App Store",
      "Release management",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Responsive UI", "REST APIs", "JavaScript"],
  },
  {
    title: "Backend & Cloud",
    items: ["NestJS", "AWS", "API integration"],
  },
  {
    title: "Leadership",
    items: [
      "Team lead",
      "Mentoring",
      "Code reviews",
      "Agile delivery",
      "Production support",
    ],
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
