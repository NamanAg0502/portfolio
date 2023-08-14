import { subtitle, title } from '@/components/primitives';
import ProjectCard from '@/components/projectCard';
import { projects } from '@/constants/data';
import { Spacer } from '@nextui-org/spacer';

export default function ProjectPage() {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className={title()}>My Works</h1>
      <h3 className={subtitle()}>
        A showcase of my work, from my earliest projects to my most recent.
      </h3>
      <Spacer y={8} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
