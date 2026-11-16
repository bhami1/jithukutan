export const personalInfo = {
  name: "Abhijith V",
  title: "Full-Stack Developer & Software Engineer",
  eyebrow: "Welcome to my digital workshop",
  tagline: "Engineering intelligent web, mobile, and AI solutions with precision and craft.",
  bio: [
    "I am a passionate software engineer and full-stack developer with a solid foundation spanning modern web architectures, native Android development, and applied artificial intelligence.",
    "Driven by clean code, privacy-first principles, and intuitive user experiences, I bridge technical depth with thoughtful design to build applications that perform reliably and solve real-world problems.",
    "Currently pursuing advanced studies in Master of Computer Applications (MCA) while continuously shipping open-source tools, machine learning classifiers, and cross-platform applications."
  ],
  location: "Varkala, Thiruvananthapuram, Kerala, India",
  email: "me.abhijith18@gmail.com",
  phone: "+91 9400174100",
  availability: "Available for Software Engineering & Full-Stack Roles",
  socials: {
    github: "https://github.com/Me-Abhijith-V",
    linkedin: "https://www.linkedin.com/in/abhijith-v-5a08aa260/",
    telegram: "https://telegram.me/axez_chat_bot",
    portfolioV1: "https://portfolio-axez.vercel.app"
  },
  stats: [
    { label: "Public Repositories", value: "14+", highlight: "GitHub Verified" },
    { label: "Core Domains", value: "3", highlight: "Web, Mobile & AI" },
    { label: "Academic Foundation", value: "B.Sc & MCA", highlight: "Kerala Univ" },
    { label: "Architecture Ethos", value: "100%", highlight: "Clean & Private" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend & UI" },
    { id: "backend", name: "Backend & Systems" },
    { id: "mobile", name: "Mobile Development" },
    { id: "ai", name: "AI & Data Science" },
    { id: "tools", name: "Databases & DevOps" }
  ],
  items: [
    // Frontend
    { name: "React", category: "frontend", level: "Advanced", icon: "Code2" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: "FileCode" },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "Palette" },
    { name: "HTML5 & Semantic Web", category: "frontend", level: "Expert", icon: "Layout" },
    { name: "CSS3 / Sass", category: "frontend", level: "Advanced", icon: "Sparkles" },
    { name: "UI/UX & Figma", category: "frontend", level: "Intermediate", icon: "Figma" },
    
    // Backend
    { name: "Python", category: "backend", level: "Advanced", icon: "Terminal" },
    { name: "Django", category: "backend", level: "Intermediate", icon: "Layers" },
    { name: "Flask", category: "backend", level: "Advanced", icon: "Cpu" },
    { name: "Node.js & Express", category: "backend", level: "Intermediate", icon: "Server" },
    { name: "PHP", category: "backend", level: "Intermediate", icon: "FileCode" },
    { name: "RESTful API Design", category: "backend", level: "Advanced", icon: "Network" },

    // Mobile
    { name: "Android (Kotlin & Java)", category: "mobile", level: "Intermediate", icon: "Smartphone" },
    { name: "Flutter & Dart", category: "mobile", level: "Intermediate", icon: "PhoneCall" },
    { name: "Android MediaStore API", category: "mobile", level: "Intermediate", icon: "FolderKanban" },
    { name: "UsageStats & Device APIs", category: "mobile", level: "Intermediate", icon: "Activity" },

    // AI & Machine Learning
    { name: "OpenAI API Integration", category: "ai", level: "Advanced", icon: "Bot" },
    { name: "Convolutional Neural Nets (CNN)", category: "ai", level: "Intermediate", icon: "Brain" },
    { name: "Computer Vision & Image Class.", category: "ai", level: "Intermediate", icon: "Eye" },
    { name: "PyTorch / TensorFlow Basics", category: "ai", level: "Intermediate", icon: "Cpu" },

    // Tools & Databases
    { name: "MySQL", category: "tools", level: "Intermediate", icon: "Database" },
    { name: "SQLite3", category: "tools", level: "Advanced", icon: "HardDrive" },
    { name: "Git & Version Control", category: "tools", level: "Advanced", icon: "GitBranch" },
    { name: "GitHub & Actions", category: "tools", level: "Advanced", icon: "Github" },
    { name: "Linux / Shell", category: "tools", level: "Intermediate", icon: "TerminalSquare" }
  ]
};

export const projectsData = [
  {
    id: "timewarp",
    title: "TimeWarp",
    subtitle: "Peak Productivity Hours & Focus Schedule Engine",
    description: "An Android application that passively tracks device application usage patterns to reveal when users accomplish their best focused work. Automatically synthesizes a personalized daily productivity schedule aligned with natural circadian focus windows.",
    longDescription: "Engineered with strict zero-cloud principles. All usage monitoring occurs on-device utilizing Android UsageStats services without requiring third-party telemetry, remote accounts, or cloud database storage.",
    tags: ["Android", "Java", "Kotlin", "UsageStats API", "On-Device", "Privacy-First"],
    category: "mobile",
    stars: "Featured",
    githubUrl: "https://github.com/Me-Abhijith-V/TimeWarp",
    demoUrl: "https://github.com/Me-Abhijith-V/TimeWarp",
    isFeatured: true,
    accentColor: "from-violet-500/20 to-purple-500/20",
    metrics: "100% On-Device · Zero Telemetry · Custom Focus Heuristics"
  },
  {
    id: "govt-job-notifier",
    title: "GovtJob Notifier",
    subtitle: "AI-Powered Mobile Recruitment Radar",
    description: "An automated cross-platform mobile application delivering personalized public sector career opportunities. Intelligently scrapes recruitment portals, evaluates candidate qualification and location criteria, and pushes immediate alerts.",
    longDescription: "Eliminates manual searches across fragmented government job circulars. Implements automated parsing, customizable notification categories, and streamlined deep-linking to official portal notifications.",
    tags: ["Flutter", "Dart", "Web Scraping", "Push Notifications", "Mobile"],
    category: "mobile",
    stars: "Featured",
    githubUrl: "https://github.com/Me-Abhijith-V/Govt-Job-Notifier",
    demoUrl: "https://github.com/Me-Abhijith-V/Govt-Job-Notifier",
    isFeatured: true,
    accentColor: "from-blue-500/20 to-cyan-500/20",
    metrics: "Automated Scraping · Smart Eligibility Filter · Push Alerts"
  },
  {
    id: "real-vs-fake-face",
    title: "Real vs AI-Generated Face Classifier",
    subtitle: "Computer Vision & Deep Learning Detector",
    description: "Deep learning binary classification model built to differentiate authentic human portraits from synthetic AI-generated deepfakes. Developed utilizing a lean convolutional neural network (CNN) optimized for subtle frequency and artifact anomalies.",
    longDescription: "Designed for data science and image verification pipelines, testing edge-artifact signatures and pixel anomalies common in generative synthesis algorithms.",
    tags: ["Python", "PyTorch / TensorFlow", "CNN", "Computer Vision", "Deep Learning"],
    category: "ai",
    stars: "AI / ML",
    githubUrl: "https://github.com/Me-Abhijith-V/real-vs-fake-face-classifier",
    demoUrl: "https://github.com/Me-Abhijith-V/real-vs-fake-face-classifier",
    isFeatured: true,
    accentColor: "from-emerald-500/20 to-teal-500/20",
    metrics: "2-Stage Custom CNN · High Precision · Artifact Detection"
  },
  {
    id: "axez-chatbot",
    title: "Axez AI Chatbot & Telegram Service",
    subtitle: "Conversational Intelligence Microservice",
    description: "Multi-channel conversational AI solution powered by the OpenAI API. Provides both an interactive web application built on Flask and a dedicated Telegram bot (@axez_chat_bot) facilitating contextual multi-turn conversations.",
    longDescription: "Integrated with OpenAI language models to handle natural dialogue, prompt engineering heuristics, conversation context buffers, and webhook routing for 24/7 availability.",
    tags: ["Python", "Flask", "OpenAI API", "Telegram Bot API", "REST API"],
    category: "ai",
    stars: "Live Bot",
    githubUrl: "https://github.com/Me-Abhijith-V/axez-chatbot-api",
    demoUrl: "https://telegram.me/axez_chat_bot",
    isFeatured: true,
    accentColor: "from-cyan-500/20 to-indigo-500/20",
    metrics: "OpenAI GPT · Telegram Webhook · Contextual Memory"
  },
  {
    id: "community-issue-reporter",
    title: "Community Issue Reporter",
    subtitle: "Civic-Tech Geolocation & Incident Platform",
    description: "Citizen-driven civic reporting mobile application enabling residents to report municipal and infrastructure issues directly with precise GPS tagging, photo evidence, and live ticket progress tracking.",
    longDescription: "Features community endorsement voting, proximity-based duplicate detection, and transparent resolution workflows connecting neighborhoods with local civic departments.",
    tags: ["Flutter", "Dart", "Geolocation", "REST API", "Civic Tech"],
    category: "mobile",
    stars: "Civic",
    githubUrl: "https://github.com/Me-Abhijith-V/community-issue-reporter",
    demoUrl: "https://github.com/Me-Abhijith-V/community-issue-reporter",
    isFeatured: true,
    accentColor: "from-amber-500/20 to-orange-500/20",
    metrics: "GPS Coordinates · Photo Proof Pipeline · Community Voting"
  },
  {
    id: "wa-organizer",
    title: "WA Organizer",
    subtitle: "Per-Group Android Media Sorter",
    description: "Smart on-device Android utility that automatically categorizes WhatsApp images and videos into clean, group-specific local folders using Android MediaStore API without requiring root privileges.",
    longDescription: "Solves storage clutter and privacy confusion caused by default unorganized media folders with user-defined sorting rules.",
    tags: ["Android", "Kotlin", "MediaStore API", "File System"],
    category: "mobile",
    stars: "Utility",
    githubUrl: "https://github.com/Me-Abhijith-V/WA-Oraganizer",
    demoUrl: "https://github.com/Me-Abhijith-V/WA-Oraganizer",
    isFeatured: false,
    accentColor: "from-violet-500/20 to-cyan-500/20",
    metrics: "No Root Required · MediaStore API · Local Group Folders"
  },
  {
    id: "imfn-network",
    title: "Integrated Medical Facilities Network",
    subtitle: "Centralized Healthcare Records & Teleconsultation",
    description: "Multi-facility medical network system designed with Django to centralize electronic medical records (EMR), streamline cross-clinic appointments, and facilitate doctor-patient consultations.",
    longDescription: "Implemented secure patient profile repositories, appointment calendar scheduling, and structured clinical consultation records.",
    tags: ["Python", "Django", "SQLite3", "Bootstrap", "Healthcare"],
    category: "backend",
    stars: "Healthcare",
    githubUrl: "https://github.com/Me-Abhijith-V/imfn",
    demoUrl: "https://github.com/Me-Abhijith-V/imfn",
    isFeatured: false,
    accentColor: "from-rose-500/20 to-pink-500/20",
    metrics: "Centralized EMR · Appointment Engine · Multi-Clinic"
  },
  {
    id: "hms",
    title: "Hospital Management System",
    subtitle: "Comprehensive Clinical Operations Management",
    description: "Full-cycle hospital information system engineered in PHP with modules for patient triage, doctor schedules, digital e-prescriptions, and complaint resolution tracking.",
    longDescription: "Built with modular PHP backend and relational database schemas to model hospital workflows from admission to discharge.",
    tags: ["PHP", "JavaScript", "MySQL", "CSS3", "Minor Project"],
    category: "backend",
    stars: "Academic",
    githubUrl: "https://github.com/Me-Abhijith-V/hms",
    demoUrl: "https://github.com/Me-Abhijith-V/hms",
    isFeatured: false,
    accentColor: "from-blue-500/20 to-slate-500/20",
    metrics: "E-Prescriptions · Appointment Triage · Relational Schema"
  }
];

export const experienceData = [
  {
    period: "2022 — 2023",
    role: "Teaching Assistant",
    organization: "Computer Centre",
    location: "Kerala, India",
    type: "Academic Mentorship",
    description: [
      "Led weekly hands-on laboratory sessions for cohorts of 30+ students covering fundamental programming principles, algorithms, and practical debugging.",
      "Provided personalized 1-on-1 mentorship to guide students through coding challenges and project implementation obstacles.",
      "Created tailored supplementary study materials, sample exercise sets, and structured code walkthroughs."
    ],
    skills: ["Programming Pedagogy", "Algorithmic Problem Solving", "Code Reviews", "Mentorship"]
  }
];

export const educationData = [
  {
    period: "2025 — Present",
    degree: "Master of Computer Applications (MCA)",
    institution: "Postgraduate Studies",
    location: "Kerala, India",
    status: "In Progress",
    description: "Deepening specialization in advanced software architecture, distributed systems, machine learning applications, and enterprise software engineering.",
    badge: "Pursuing"
  },
  {
    period: "2022 — 2025",
    degree: "Bachelor of Computer Science",
    institution: "Kerala University",
    location: "Kerala, India",
    status: "Completed",
    description: "Formed comprehensive grounding in data structures, algorithms, object-oriented design, web application development, database management systems, and systems programming.",
    badge: "Degree"
  },
  {
    period: "2024",
    degree: "Career Essentials in Cybersecurity",
    institution: "Microsoft & LinkedIn Learning",
    location: "Online Certification",
    status: "Certified",
    description: "In-depth specialization curriculum covering Information Security Awareness, Threat & Vulnerability Management, and defensive security fundamentals.",
    badge: "Certification"
  },
  {
    period: "2020 — 2022",
    degree: "Higher Secondary Education",
    institution: "Kerala State Syllabus",
    location: "Kerala, India",
    status: "Completed",
    description: "Science & Computer stream establishing foundational mathematics, physics, and analytical problem-solving skills.",
    badge: "Foundation"
  }
];

export const githubProfileData = {
  username: "Me-Abhijith-V",
  profileUrl: "https://github.com/Me-Abhijith-V",
  totalRepos: 14,
  highlights: [
    { title: "TimeWarp", lang: "Java / Kotlin", desc: "Android peak focus monitor & smart daily scheduler" },
    { title: "Govt-Job-Notifier", lang: "Dart / Flutter", desc: "AI-driven job alert aggregator & scraper" },
    { title: "real-vs-fake-face-classifier", lang: "Python", desc: "CNN-based deepfake & authentic face detector" },
    { title: "community-issue-reporter", lang: "Dart", desc: "Civic problem geotagging & community upvoting" },
    { title: "axez-chatbot-api", lang: "Python / Flask", desc: "OpenAI GPT multi-turn conversational backend" },
    { title: "WA-Oraganizer", lang: "Kotlin", desc: "Android MediaStore per-group media organizer" }
  ]
};
