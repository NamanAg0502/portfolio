import { projects } from '@/constants/data';
import { Image } from '@nextui-org/image';
import ProjectCard from './projectCard';
import { title } from './primitives';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className={title()}>Notable Projects</h1>
        <Button as={NextLink} href="/projects">
          More Projects
        </Button>
      </div>
      <div className="flex gap-8">
        {projects.map((project) => {
          if (project.id <= 3)
            return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
