import { useEffect, useState } from "react";
import {
  AppContentContainer,
} from "@/components/layout";
import { fetchMyProjectsData } from "@/hooks/fetchHeroData";
import { AppLabel, AppExploreCards } from "@/components/common";


interface MyProject {
  id: number;
  imgurl: string;
  title: string;
  description: string;
}

export function AppProjects() {
  const [projects, setProjects] = useState<MyProject[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchMyProjectsData();
      setProjects(data);
      if (data.length) setActiveId(data[0].id); 
    }

    loadProjects();
  }, []);

  const handleClick = (id: string | number) => {
    setActiveId(Number(id));
  };

  if (!projects.length) return null; 

  return (
    <AppContentContainer className="p-4 sm:p-6 lg:p-8">
      <AppLabel variant="h1" className="mb-4 md:mb-6 lg:mb-8">
        My Projects
      </AppLabel>

      <div className="flex flex-col lg:flex-row gap-2 overflow-x-auto scrollbar-hide h-auto lg:h-auto">
        {projects.map((project, index) => (
          <AppExploreCards
            key={project.id}
            id={project.id}
            imgUrl={project.imgurl}
            title={project.title}
            description={project.description}
            index={index}
            active={activeId}
            handleClick={handleClick}
          />
        ))}
      </div>
    </AppContentContainer>
  );
}
