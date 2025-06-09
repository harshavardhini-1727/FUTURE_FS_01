export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  footerDescription: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Stats {
  experience: string;
  projects: string;
  internships: string;
  cgpa: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export const personalInfo: PersonalInfo = {
  name: "Harshavardhini",
  firstName: "Harshavardhini",
  title: "Full Stack Developer",
  description: "B.Tech student passionate about full-stack development. Currently learning through internships and building innovative projects.",
  email: "kommojuharsha2005@gmail.com",
  phone: "",
  location: "",
  footerDescription: "Full Stack Developer passionate about creating amazing web experiences and solving complex problems through code."
};

export const stats: Stats = {
  experience: "Student",
  projects: "Multiple",
  internships: "5",
  cgpa: "9.1"
};

export const skills: Skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.js"],
  backend: ["Python", "Java", "MongoDB", "Database"],
  tools: ["AWS", "Git", "NPTEL Certified", "MongoDB Certified"]
};

export const experiences: Experience[] = [
  {
    title: "Government Internships",
    company: "Government & AU University",
    period: "2024 - Present",
    description: "Currently participating in 5 government and university internships to gain practical experience in software development and emerging technologies.",
    responsibilities: [
      "Participating in hands-on projects and real-world applications",
      "Learning industry best practices and development methodologies",
      "Working with diverse teams on various technology stacks"
    ]
  },
  {
    title: "Student Developer",
    company: "NSRIT Engineering College",
    period: "2022 - Present",
    description: "Developing projects and building expertise in full-stack development while maintaining academic excellence.",
    responsibilities: [
      "Maintaining 9.1 CGPA in B.Tech Computer Science",
      "Working on SimplifyAI project approved by multiple institutions",
      "Learning and implementing modern web technologies"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science",
    school: "NSRIT Engineering College",
    period: "2022 - Present",
    description: "Currently pursuing B.Tech in Computer Science with a CGPA of 9.1. Focused on software engineering, data structures, web development, and emerging technologies."
  }
];

export const certifications = [
  "NPTEL Certified",
  "MongoDB Certified",
  "edX Certified",
  "Government Internship Programs"
];

export const projects: Project[] = [
  {
    name: "SimplifyAI",
    description: "An AI-powered project that has been approved and recognized by multiple prestigious institutions including Rajiv Gandhi University, IIIT, and Aditya Engineering College for its innovative approach.",
    techStack: ["Python", "JavaScript", "AI/ML", "React.js", "MongoDB"],
    githubUrl: "https://github.com/harshavardhini-1727/SimplifyAI",
    liveUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    imageAlt: "SimplifyAI Project"
  },
  {
    name: "Web Development Projects",
    description: "Various web development projects showcasing skills in modern web technologies and full-stack development.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB"],
    githubUrl: "https://github.com/harshavardhini-1727",
    liveUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Web Development Projects"
  }
];

export const socialLinks: SocialLinks = {
  github: "https://github.com/harshavardhini-1727",
  linkedin: "https://www.linkedin.com/in/kommoju-harsha-vardhini-aa71a0321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  twitter: "",
  email: "mailto:kommojuharsha2005@gmail.com"
};
