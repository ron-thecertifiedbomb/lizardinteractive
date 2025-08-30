export interface NavigationPanel {
  key: string;
  heading: string;
  content: string;
  screen: string;
}

export interface Skill {
  type: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  techStack?: string[];
  screen?: string;
}

export interface AboutMe {
  heading: string;
  description: string;
  screen: string;
}

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  screen?: string;
}

export interface Introduction {
  heading: string;
  content: string;
  screen: string;
}

export interface LizardData {
  navigationPanels: NavigationPanel[];
  sections: Section<any>[]; // each section: heading + content array
}

export interface Section<T> {
  heading: string;
  content: T[];
}

export const lizardData: LizardData = {
  navigationPanels: [
    {
      key: "introduction",
      heading: "Introduction",
      content:
        "I am a creative and passionate individual with a strong love for learning.",
      screen: "Introduction",
    },
    {
      key: "projects",
      heading: "Projects",
      content: "Check out my projects",
      screen: "Projects",
    },
    {
      key: "skills",
      heading: "Skills",
      content: "What I offer & technologies I work with",
      screen: "Skills",
    },
    {
      key: "aboutme",
      heading: "About Me",
      content: "I'm a creative individual.",
      screen: "About Me",
    },
  ],

  sections: [
    // Introduction section
    {
      heading: "Introduction",
      content: [
        {
          heading: "Introduction",
          content:
            "I am a creative and passionate individual with a strong love for learning.",
          screen: "IntroductionScreen",
        } as Introduction,
      ],
    },

    // Projects section
    {
      heading: "Projects",
      content: [
        {
          title: "Project One",
          description: "A modern web app built with React and Next.js.",
          imageSrc: "/assets/project1.png",
          imageAlt: "Screenshot of Project One",
          screen: "ProjectsScreen",
        } as Project,
        {
          title: "Project Two",
          description: "A mobile app created using React Native and Expo.",
          imageSrc: "/assets/project2.png",
          imageAlt: "Screenshot of Project Two",
          screen: "ProjectsScreen",
        } as Project,
        {
          title: "Project Three",
          description:
            "Fullstack application with Node.js, MongoDB, and Supabase.",
          imageSrc: "/assets/project3.png",
          imageAlt: "Screenshot of Project Three",
          screen: "ProjectsScreen",
        } as Project,
      ],
    },

    // Skills section
    {
      heading: "Skills",
      content: [
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
            "MobX",
            "GraphQL",
            "CSS",
            "HTML5",
          ],
          screen: "SkillsScreen",
        } as Skill,
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
          screen: "SkillsScreen",
        } as Skill,
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
          screen: "SkillsScreen",
        } as Skill,
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
          screen: "SkillsScreen",
        } as Skill,
      ],
    },

    // About Me section
    {
      heading: "About Me",
      content: [
        {
          heading: "About Me",
          description:
            "I am a creative and passionate individual with a strong love for learning. I thrive on exploring new ideas, embracing challenges, and constantly growing both personally and professionally.",
          screen: "AboutMeScreen",
        } as AboutMe,
      ],
    },
  ],
};
