export interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  linkedInUrl: string;
  whatsAppUrl: string;
  resumeUrl: string;
  profilePhotoUrl: string;
  bio: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export interface Skill {
  name: string;
  level: number; // percentage (1-100) for progress bar
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
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

export const profileInfo: ProfileInfo = {
  name: "Bharath S",
  title: "Aspiring Generative AI Developer | LLM Engineer",
  location: "Kallakurichi, Tamil Nadu, India",
  phone: "+91 6379639596",
  email: "vells0659@gmail.com",
  linkedIn: "linkedin.com/in/s-bharath",
  linkedInUrl: "https://www.linkedin.com/in/s-bharath",
  whatsAppUrl: "https://wa.me/916379639596?text=Hi%20Bharath,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
  resumeUrl: "https://docs.google.com/document/d/1WRlwH9Lq2GtiCP9-N8HfyF2MpAe-EotD/export?format=docx",
  profilePhotoUrl: "/assets/profile.jpg",
  bio: "Highly motivated B.Tech Artificial Intelligence and Data Science student with a strong academic foundation and hands-on project experience in Machine Learning, Deep Learning, and Generative AI. Skilled in developing intelligent applications, proctoring systems, and real-time translators. Eager to contribute to cutting-edge LLM operations, pipeline development, and intelligent agent systems."
};

export const educationList: Education[] = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "AVS Engineering College, Salem, India",
    period: "2024 – 2028",
    score: "CGPA: 8.00 / 10.00",
    details: "Focused on core courses in Artificial Intelligence, Machine Learning, Data Structures, Design & Analysis of Algorithms, and Database Management."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt Boys Higher Secondary School, Tamil Nadu, India",
    period: "2022 – 2024",
    score: "Percentage: 60.8%",
    details: "Specialized in Computer Science, Mathematics, Physics, and Chemistry."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "HTML & CSS", level: 85 }
    ]
  },
  {
    category: "AI / ML & Deep Learning",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "Generative AI & LLMs", level: 80 },
      { name: "TensorFlow & Keras", level: 75 },
      { name: "OpenCV (Computer Vision)", level: 85 }
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "React.js", level: 70 },
      { name: "SQLite", level: 80 },
      { name: "Power BI", level: 80 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Teamwork & Collaboration", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Critical Thinking", level: 90 }
    ]
  }
];

export const projectList: Project[] = [
  {
    title: "NeuroSign v2.0",
    description: "A real-time American Sign Language (ASL) translation system utilizing deep learning. The system captures hand gestures using a webcam, classifies them into corresponding text in real time, and synthesizes speech using offline text-to-speech rendering.",
    techStack: ["Python", "Flask", "TensorFlow", "OpenCV", "pyttsx3"],
    githubUrl: "https://github.com/s-bharath"
  },
  {
    title: "AI Exam Guardian",
    description: "An advanced automated proctoring system engineered to prevent cheating in online exams. Implements face tracking, gaze direction analysis, multiple person detection, and mobile phone detection, integrating Flask and FastAPI with a SQLite backend.",
    techStack: ["Python", "Flask", "OpenCV", "FastAPI", "SQLite"],
    githubUrl: "https://github.com/s-bharath"
  },
  {
    title: "Zero to Hero",
    description: "An interactive, AI-driven learning platform tailored for students starting their tech journey. Features an intelligent Claude-powered AI tutor that provides real-time feedback, interactive lessons, and custom quizzes, with a secure mobile-based OTP verification.",
    techStack: ["React.js", "Claude AI API", "TypeScript", "Node.js", "Firebase OTP"],
    githubUrl: "https://github.com/s-bharath"
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
      { label: "Certificate 1", url: "https://drive.google.com/uc?export=download&id=1ZbzKbnqX2YKGXBQmP8W9wcDxi6L0s3Hd" },
      { label: "Certificate 2", url: "https://drive.google.com/uc?export=download&id=1V6k27XUaDGArR6_j7kX2xilPVo3J50VP" }
    ]
  },
  {
    title: "Power BI Data Analyst Certification",
    provider: "Gen AI Networks",
    details: "Learned data modeling, DAX queries, and dashboard design. Built comprehensive analytical reports for business intelligence workflows.",
    certificateUrls: [
      { label: "Certificate 1", url: "https://drive.google.com/uc?export=download&id=10PceLwgTQolKAfFkqGs6FAAf3uSU7Yfo" },
      { label: "Certificate 2", url: "https://drive.google.com/uc?export=download&id=1ryr_U-3_zTE6g-ZYoAXL5FcR7XLUBK99" }
    ]
  },
  {
    title: "Honours Diploma in Computer Applications (HDCA)",
    provider: "CSC (Computer Software College)",
    details: "Completed standard curriculum covering office automation tools, database essentials, and basic programming concepts.",
    certificateUrls: [
      { label: "Certificate", url: "https://drive.google.com/uc?export=download&id=16-AYxEHP8omClw1ZIHeOUn1FIW6wSenE" }
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
    title: "Future Tech & Cybersecurity Workshops",
    description: "Active participant in specialized engineering workshops focusing on 'AI in Future Technologies' and 'Cybersecurity Essentials' for modern web applications.",
    badge: "Continuous Learning"
  }
];
