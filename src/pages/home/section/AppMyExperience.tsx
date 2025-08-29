import { AppCard, AppLabel } from "@/components/common";
import { AppContentContainer } from "@/components/layout";

interface MyExperienceProps {
  title?: string;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  skills: string[];
  description?: string;
  links?: { label: string; url: string }[];
}

export function AppMyExperience() {
  const experiences: MyExperienceProps[] = [
    {
      role: "Full Stack Developer",
      company: "Lizard Interactive",
      type: "Freelance",
      period: "March 2025 - Aug 2025",
      duration: "5 mos",
      location: "Philippines · Remote",
      skills: ["React Native", "TypeScript", "Expo", "Supabase", "Firebase"],
      description:
        "Developed a mobile application for an Australian startup clinic, implementing responsive UI and integrating backend APIs.",
    },
    {
      role: "Full Stack Developer (Sub Lead)",
      company: "Ascendion",
      type: "Full-time",
      period: "Aug 2024 - Feb 2025",
      duration: "7 mos",
      location: "Philippines · Remote",
      skills: ["ReactJS", "React Native", "Next.js", "TypeScript"],
      description:
        "Led front-end development and collaborated on cross-functional projects, building scalable React applications and mobile solutions.",
    },
    {
      role: "Full Stack Developer",
      company: "Collabera Digital",
      type: "Full-time",
      period: "Aug 2024 - Feb 2025",
      duration: "7 mos",
      location: "Philippines · Remote",
      skills: ["Expo", "Node.js", "GraphQL", "React Native", "TypeScript"],
      description:
        "Developed end-to-end solutions using React Native and Node.js, integrating APIs and optimizing performance for web and mobile platforms.",
    },
    {
      role: "Mid Software Engineer",
      company: "VeritasPay Philippines Inc.",
      type: "Full-time",
      period: "Feb 2023 - Aug 2024",
      duration: "1 yr 7 mos",
      location: "Philippines · Remote",
      skills: ["ReactJS", "React Native", "MobX"],
      description:
        "Maintained and enhanced web and mobile applications, implementing state management with MobX and improving user experience.",
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      type: "Freelance",
      period: "Nov 2017 - Sep 2023",
      duration: "5 yrs 11 mos",
      location: "National Capital Region, Philippines",
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "ReactJS",
        "React Native",
        "Next.js",
      ],
      description:
        "Specialized in creating responsive, accessible front-end interfaces for clients, including React web apps and mobile solutions.",
    },
  ];

  return (
    <AppContentContainer className="p-4 sm:p-6 lg:p-8">
      <AppLabel variant="h1" className="mb-4 sm:mb-6 lg:mb-8">
        My Experiences
      </AppLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <AppCard
            key={index}
            title={exp.role}
            subtitle={`${exp.company} · ${exp.type}`}
            period={`${exp.period} · ${exp.duration}`}
            location={exp.location}
            description={exp.description}
            skills={exp.skills}
            links={exp.links}
          />
        ))}
      </div>
    </AppContentContainer>
  );
}
