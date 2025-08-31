import { AppData } from "@/types/appData";

export const appData: AppData = {
  overview: {
    heading: "Overview",
    content:
      "This is the LizardInteractive portfolio — my own business. I am a creative and passionate individual with a strong love for learning.",
  },

  projects: {
    heading: "Projects",
    content: "Here are some of my projects showcasing my work:",
    items: [
      {
        title: "Project One",
        description: "A modern web app built with React and Next.js.",
        imageSrc: "/assets/project1.png",
        imageAlt: "Screenshot of Project One",
      },
      {
        title: "Project Two",
        description: "A mobile app created using React Native and Expo.",
        imageSrc: "/assets/project2.png",
        imageAlt: "Screenshot of Project Two",
      },
      {
        title: "Project Three",
        description:
          "Fullstack application with Node.js, MongoDB, and Supabase.",
        imageSrc: "/assets/project3.png",
        imageAlt: "Screenshot of Project Three",
      },
    ],
  },

  services: {
    heading: "Services",
    content: "Here are my core skills and technologies I work with:",
    items: [
      {
        type: "Web Development",
        imageSrc: "/assets/cardimg.png",
        imageAlt: "Laptop with code editor",
        title: "Web Development",
        description:
          "Building modern, responsive websites using React, Next.js, and TailwindCSS.",
        techStack: [
          "ReactJS",
          "Next.js",
          "TailwindCSS",
          "TypeScript",
          "Redux",
          "MobX",
          "GraphQL",
          "CSS",
          "HTML5",
        ],
      },
      {
        type: "Mobile Development",
        imageSrc: "/assets/cardimg1.png",
        imageAlt: "Mobile app interface",
        title: "Mobile Development",
        description:
          "Creating cross-platform mobile apps with React Native for both iOS and Android.",
        techStack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Redux",
          "MobX",
          "TailwindCSS",
        ],
      },
      {
        type: "Fullstack Application",
        imageSrc: "/assets/cardimg2.png",
        imageAlt: "Fullstack workflow diagram",
        title: "Fullstack Application",
        description:
          "Developing scalable fullstack applications with seamless frontend and backend integration.",
        techStack: [
          "ReactJS",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Supabase",
          "GraphQL",
          "TypeScript",
          "TailwindCSS",
        ],
      },
      {
        type: "Video Editing",
        imageSrc: "/assets/cardimg3.png",
        imageAlt: "Video editing timeline",
        title: "Video Editing",
        description:
          "Producing high-quality video content with professional editing, transitions, and effects.",
        techStack: [
          "Photoshop",
          "Premiere Pro",
          "After Effects",
          "Figma",
          "Lightroom",
        ],
      },
    ],
  },

  aboutme: {
    heading: "About Me",
    content:
      "I am a creative and passionate individual with a strong love for learning. I thrive on exploring new ideas, embracing challenges, and constantly growing both personally and professionally.",
  },
};
