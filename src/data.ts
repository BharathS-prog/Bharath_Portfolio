export interface ProfileInfo {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  linkedInUrl: string;
  github: string;
  githubUrl: string;
  whatsAppUrl: string;
  resumeUrl: string;
  bio: string;
  badges: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export type SkillProficiencyStatus = 'Comfortable Using' | 'Currently Learning' | 'Interested in Exploring';

export interface CategorizedSkill {
  name: string;
  status: SkillProficiencyStatus;
  note?: string;
}

export interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: CategorizedSkill[];
}

export type ProjectStatus = 'Prototype' | 'In Development' | 'Research / Exploration' | 'Completed Project';

export interface Project {
  title: string;
  problem: string;
  description: string;
  status: ProjectStatus;
  techStack: string[];
  keyLearnings: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface CertificateFile {
  label: string;
  url: string;
  isImage?: boolean;
}

export interface Certification {
  title: string;
  provider: string;
  details?: string;
  certificateUrls?: CertificateFile[];
}

export interface Achievement {
  title: string;
  description: string;
  badge?: string;
}

export interface RoadmapItem {
  phase: 'NOW' | 'NEXT' | 'FUTURE DIRECTION';
  title: string;
  description: string;
  focusPoints: string[];
}

export const profileInfo: ProfileInfo = {
  name: "Bharath",
  headline: "Building Intelligent Solutions. Exploring What's Possible.",
  tagline: "I'm Bharath, an AI & Data Science student, aspiring AI engineer, and emerging entrepreneur exploring how artificial intelligence can solve real-world problems.",
  location: "Kallakurichi, Tamil Nadu, India",
  phone: "+91 6379639596",
  email: "vells0659@gmail.com",
  linkedIn: "linkedin.com/in/s-bharath",
  linkedInUrl: "https://www.linkedin.com/in/s-bharath",
  github: "github.com/BharathS-prog",
  githubUrl: "https://github.com/BharathS-prog",
  whatsAppUrl: "https://wa.me/916379639596?text=Hi%20Bharath,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
  resumeUrl: "/assets/resume-bharath.pdf",
  badges: [
    "AI Engineer in Progress",
    "Emerging Entrepreneur",
    "AI Product Builder"
  ],
  bio: "Third-year Artificial Intelligence and Data Science student at AVS Engineering College. I build AI-powered solutions, explore entrepreneurial opportunities, and work toward turning innovative ideas into products that solve real-world problems. I'm actively learning, experimenting with prototypes, and seeking guidance from mentors, founders, and fellow builders."
};

export const educationList: Education[] = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "AVS Engineering College, Salem, India",
    period: "2024 – 2028 (Third-Year Student)",
    score: "CGPA: 8.00 / 10.00",
    details: "Core coursework in Artificial Intelligence, Machine Learning algorithms, Data Structures, Design & Analysis of Algorithms, and Database Management Systems."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt Boys Higher Secondary School, Tamil Nadu, India",
    period: "2022 – 2024",
    score: "Percentage: 60.8%",
    details: "Mathematics, Computer Science, Physics, and Chemistry foundation."
  }
];

export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    category: "AI & Machine Learning",
    description: "Model building, vision pipelines, and intelligent agent interfaces",
    skills: [
      { name: "Computer Vision (OpenCV)", status: "Comfortable Using", note: "Video stream processing & landmark tracking" },
      { name: "Machine Learning (Scikit-Learn)", status: "Comfortable Using", note: "Supervised algorithms & data preprocessing" },
      { name: "Deep Learning (TensorFlow/Keras)", status: "Comfortable Using", note: "CNN architectures & classification" },
      { name: "Generative AI & LLM Prompting", status: "Currently Learning", note: "Prompt engineering, function calling & RAG concepts" },
      { name: "Intelligent AI Agents", status: "Interested in Exploring", note: "Autonomous workflows & tool orchestration" }
    ]
  },
  {
    category: "Programming & Languages",
    description: "Core languages used across software and algorithmic projects",
    skills: [
      { name: "Python", status: "Comfortable Using", note: "Primary language for AI/ML pipelines and backend APIs" },
      { name: "C / C++", status: "Comfortable Using", note: "Academic foundation in memory and algorithms" },
      { name: "HTML5 & CSS3", status: "Comfortable Using", note: "Semantic structure and modern responsive styling" },
      { name: "TypeScript / JavaScript", status: "Currently Learning", note: "Modern web frontend application development" }
    ]
  },
  {
    category: "Web & API Development",
    description: "Frameworks and backends for deploying interactive software",
    skills: [
      { name: "FastAPI", status: "Comfortable Using", note: "High-performance async REST APIs for ML inference" },
      { name: "Flask", status: "Comfortable Using", note: "Microservices and rapid prototype backends" },
      { name: "React.js", status: "Currently Learning", note: "Component-driven web applications" },
      { name: "SQLite", status: "Comfortable Using", note: "Relational data persistence for prototypes" },
      { name: "Node.js Basics", status: "Interested in Exploring", note: "Full-stack server runtime architecture" }
    ]
  },
  {
    category: "Data Science & Analytics",
    description: "Data exploration, feature engineering, and reporting",
    skills: [
      { name: "Pandas & NumPy", status: "Comfortable Using", note: "Data manipulation, transformation & analysis" },
      { name: "Power BI", status: "Comfortable Using", note: "Interactive business intelligence dashboards" },
      { name: "Data Visualization (Matplotlib/Seaborn)", status: "Comfortable Using", note: "Exploratory visual data inspection" },
      { name: "Vector Databases", status: "Interested in Exploring", note: "Embeddings indexing for semantic retrieval" }
    ]
  },
  {
    category: "Hardware & Applied Prototyping",
    description: "Bridging physical sensor telemetry with software intelligence",
    skills: [
      { name: "IoT Sensor Integration", status: "Currently Learning", note: "Reading sensor feeds for alert systems" },
      { name: "Embedded Prototyping", status: "Currently Learning", note: "Telemetry pipelines & threshold logic" },
      { name: "Real-time Streaming Logic", status: "Currently Learning", note: "Processing live camera & sensor streams" }
    ]
  }
];

export const projectList: Project[] = [
  {
    title: "AI Exam / Office Guardian",
    status: "In Development",
    problem: "Exam cheating and workplace distraction supervision often require manual proctoring or invasive, costly third-party systems.",
    description: "An automated intelligent supervision system that processes real-time webcam streams to detect multi-person presence, gaze divergence, face orientation, and mobile phone usage, logging incidents through a clean FastAPI and SQLite backend.",
    techStack: ["Python", "OpenCV", "FastAPI", "Flask", "SQLite"],
    keyLearnings: "Calibrating head-pose thresholds, maintaining low-latency inference on continuous video frames, and designing a structured violation log.",
    githubUrl: "https://github.com/BharathS-prog"
  },
  {
    title: "NeuroSign v2.0",
    status: "Prototype",
    problem: "Communication barriers between individuals using sign language and people unfamiliar with ASL gestures.",
    description: "A real-time American Sign Language (ASL) translation system utilizing computer vision and deep learning. Captures hand gestures via webcam, identifies characters and signs, and converts them into spoken audio through offline text-to-speech synthesis.",
    techStack: ["Python", "Flask", "TensorFlow", "OpenCV", "pyttsx3"],
    keyLearnings: "Preprocessing hand landmark coordinate vectors, handling varying lighting conditions, and synchronizing offline audio speech synthesis.",
    githubUrl: "https://github.com/BharathS-prog"
  },
  {
    title: "Zero to Hero",
    status: "Prototype",
    problem: "Beginner developers often struggle with passive video tutorials that lack interactive guidance and instant feedback.",
    description: "An interactive, AI-driven learning portal designed for students starting their coding journey. Features an intelligent LLM tutor that breaks down programming questions, assesses milestone answers, and reinforces concepts with mobile-verified sign-in.",
    techStack: ["React.js", "TypeScript", "Claude API", "Node.js", "Firebase Auth"],
    keyLearnings: "Designing structured prompt templates for pedagogical feedback and building responsive interactive quiz interfaces.",
    githubUrl: "https://github.com/BharathS-prog"
  },
  {
    title: "FuelGuard AI",
    status: "Research / Exploration",
    problem: "Undetected fuel pilferage, unexpected drainage, and hazardous tank fluctuations in transport and generator operations.",
    description: "An IoT and software telemetry concept exploring ultrasonic/liquid sensor integration with statistical anomaly detection algorithms to monitor tank levels in real time and alert operators to rapid irregular drain rates.",
    techStack: ["Python", "IoT Sensors", "Data Modeling", "Streamlit"],
    keyLearnings: "Filtering noisy raw sensor readings, establishing dynamic threshold baselines, and modeling drain-rate anomalies over time.",
    githubUrl: "https://github.com/BharathS-prog"
  },
  {
    title: "Voice2Blueprint AI",
    status: "In Development",
    problem: "Translating spoken user requirements into detailed software architecture schemas and task breakdowns is tedious.",
    description: "An AI application concept that captures spoken client briefings or audio notes, extracts key domain entities, and automatically formats technical specifications, user stories, and entity-relationship outlines.",
    techStack: ["Python", "Whisper API", "LLM Pipelines", "React.js"],
    keyLearnings: "Handling audio transcription errors, constraining LLM outputs to rigid schema structures, and mapping user intent to technical artifacts.",
    githubUrl: "https://github.com/BharathS-prog"
  }
];

export const entrepreneurshipCards = [
  {
    id: "startup-ideas",
    title: "Startup Ideas",
    summary: "I'm exploring practical startup opportunities, especially where AI, automation, and software can solve real problems.",
    icon: "Lightbulb",
    actionCategory: "Startup Idea or Feedback"
  },
  {
    id: "mentorship",
    title: "Looking for Mentorship",
    summary: "I'm interested in connecting with experienced founders, entrepreneurs, and professionals willing to share honest advice.",
    icon: "Compass",
    actionCategory: "Startup Mentorship"
  },
  {
    id: "collaborators",
    title: "Building with Collaborators",
    summary: "I'm open to connecting with developers, designers, and motivated people interested in exploring promising ideas together.",
    icon: "Users",
    actionCategory: "Collaboration"
  },
  {
    id: "feedback",
    title: "Feedback and Validation",
    summary: "I welcome constructive feedback that helps me improve my ideas, understand customers, and build more useful products.",
    icon: "Sparkles",
    actionCategory: "Startup Idea or Feedback"
  }
];

export const mentorshipTopics = [
  "Startup mentorship & founder guidance",
  "Constructive feedback on early-stage AI prototypes",
  "Real-world customer-problem discovery & validation",
  "Business-model & viability advice",
  "Technical collaboration with fellow student builders",
  "Internship & industry learning opportunities",
  "Introductions to supportive startup and tech communities"
];

export const roadmapItems: RoadmapItem[] = [
  {
    phase: "NOW",
    title: "Hands-on Development & Exploration",
    description: "Actively building functional prototypes, deepening core Python & AI/ML engineering skills, and exploring how modern LLMs can solve daily operational bottlenecks.",
    focusPoints: [
      "Building practical AI prototypes (vision, LLMs, proctoring)",
      "Strengthening algorithm and API architecture fundamentals",
      "Connecting with other developers and gathering constructive technical feedback"
    ]
  },
  {
    phase: "NEXT",
    title: "Validation, Collaboration & Industry Exposure",
    description: "Elevating project code quality, validating real-world problem statements with real users, collaborating on open initiatives, and securing technical internships.",
    focusPoints: [
      "Rigorous problem discovery before writing code",
      "Securing AI engineering or software development internship opportunities",
      "Collaborating with designers and developers to build polished products"
    ]
  },
  {
    phase: "FUTURE DIRECTION",
    title: "Emerging AI Engineer & Startup Founder",
    description: "Maturing into an impactful AI engineer capable of architecting scalable intelligent systems and exploring the foundation of a viable, technology-driven startup.",
    focusPoints: [
      "Architecting end-to-end intelligent systems and AI automation products",
      "Learning sustainable business mechanics, distribution, and customer success",
      "Building products that create tangible, lasting value for businesses and society"
    ]
  }
];

export const internships: Internship[] = [
  {
    company: "Imagecon Technologies",
    role: "Data Science Intern",
    period: "June 2025 - July 2025",
    description: "Worked on real-world datasets to build predictive models, clean and prepare structured data, and create interactive visualizations. Gained solid experience with Pandas, NumPy, Scikit-Learn, and Python-based data pipelines."
  }
];

export const certifications: Certification[] = [
  {
    title: "Generative AI & Artificial Intelligence Foundations",
    provider: "IBM SkillsBuild",
    details: "Acquired certifications in foundational Artificial Intelligence concepts, Prompt Engineering techniques, and ethical AI development guidelines.",
    certificateUrls: [
      { label: "Intro to Generative AI", url: "/assets/cert-intro-gen-ai.pdf" },
      { label: "Intro to AI", url: "/assets/cert-intro-ai.pdf" }
    ]
  },
  {
    title: "Power BI Data Analyst Certification",
    provider: "Gen AI Networks",
    details: "Learned data modeling, DAX queries, and dashboard design. Built comprehensive analytical reports for business intelligence workflows.",
    certificateUrls: [
      { label: "Power BI for Data Analytics - Part 1", url: "https://drive.google.com/uc?export=download&id=10PceLwgTQolKAfFkqGs6FAAf3uSU7Yfo" },
      { label: "Power BI for Data Analytics - Part 2", url: "https://drive.google.com/uc?export=download&id=1ryr_U-3_zTE6g-ZYoAXL5FcR7XLUBK99" }
    ]
  },
  {
    title: "Honours Diploma in Computer Applications (HDCA)",
    provider: "CSC (Computer Software College)",
    details: "Completed standard curriculum covering office automation tools, database essentials, and basic programming concepts.",
    certificateUrls: [
      { label: "Higher Diploma in Computer Applications", url: "https://drive.google.com/uc?export=download&id=16-AYxEHP8omClw1ZIHeOUn1FIW6wSenE" }
    ]
  }
];

export const achievementsList: Achievement[] = [
  {
    title: "100% Attendance Record",
    description: "Maintained a perfect attendance record from Semester 1 to Semester 4 at AVS Engineering College, demonstrating strong commitment and reliability.",
    badge: "Reliability"
  },
  {
    title: "Technical Symposium Presentation",
    description: "Successfully presented a technical paper on the deployment of Generative AI in education at a state-level college technical symposium.",
    badge: "Public Speaking"
  },
  {
    title: "Future Tech & Engineering Workshops",
    description: "Active participant in specialized engineering workshops focusing on 'AI in Future Technologies' and 'Cybersecurity Essentials' for modern web applications.",
    badge: "Continuous Learning"
  }
];
