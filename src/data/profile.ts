import type { L } from "@/lib/types";

export const profile = {
  name: "Muhamad Septian",
  role: "Informatics Graduate",
  photo: "/images/profile/ALV_7118.jpg",
  cv: "/documents/CV Muhamad Septian.pdf", // contoh: "/documents/cv.pdf"
  email: "mseptian939@gmail.com",
  github: "https://github.com/MuhamadSeptian",
  linkedin: "https://www.linkedin.com/in/muhamad-septian-3a21a1341/",
  location: "Palembang, Indonesia",
  siteUrl: "https://example.com",

  headline: {
    en: "I build software, analyze data, network configuration.",
    id: "Saya membangun perangkat lunak, menganalisis data, dan menghubungkan jaringan.",
  } as L,

  intro: {
    en: "Informatics Engineering graduate with hands-on project experience across web development, data science, machine learning, game development, and networking.",
    id: "Lulusan Teknik Informatika dengan pengalaman proyek di web, data science, machine learning, game, dan jaringan.",
  } as L,

  about: [
  {
    en: "I am an Informatics Engineering graduate with a strong interest in technology and software development. Throughout my academic journey, I explored various areas of technology, including web development, game development, data science, recommendation systems, networking, and web services. I enjoy exploring new technologies and understanding how they can be applied to solve real-world problems.",
    id: "Saya merupakan lulusan Teknik Informatika yang memiliki ketertarikan besar terhadap teknologi dan pengembangan perangkat lunak. Selama masa perkuliahan, saya mengeksplorasi berbagai bidang teknologi, termasuk web development, game development, data science, recommendation systems, networking, dan web services. Saya senang mempelajari teknologi baru serta memahami bagaimana teknologi dapat diterapkan untuk menyelesaikan permasalahan di dunia nyata.",
  },
  {
    en: "Through various academic projects, I have gained hands-on experience in applying technical knowledge, analyzing problems, and developing solutions using different technologies and tools. These experiences have strengthened my analytical thinking, problem-solving abilities, and adaptability. I am passionate about continuous learning, improving my technical skills, and exploring new opportunities to contribute to meaningful technology projects.",
    id: "Melalui berbagai proyek akademik, saya memperoleh pengalaman langsung dalam menerapkan pengetahuan teknis, menganalisis permasalahan, dan mengembangkan solusi menggunakan berbagai teknologi dan perangkat. Pengalaman tersebut membantu saya mengembangkan kemampuan berpikir analitis, pemecahan masalah, dan beradaptasi. Saya memiliki semangat untuk terus belajar, meningkatkan keterampilan teknis, serta mengeksplorasi peluang baru untuk berkontribusi dalam proyek teknologi yang bermanfaat.",
  },
] as L[],

  education: {
    degree: "Bachelor of Informatics Engineering",
    university: "Universitas Katolik Musi Charitas",
    gpa: "3.68",
    period: "2022 – 2026",
    note: "Graduated with honors", 
  },
};
