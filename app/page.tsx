import { Link } from '@nextui-org/link';
import { Code } from '@nextui-org/code';
import { title, subtitle } from '@/components/primitives';
import { Image } from '@nextui-org/image';
import Experience from '@/components/experience';
import { Spacer } from '@nextui-org/spacer';
import Marquee from 'react-fast-marquee';
import { skills } from '@/constants/data';
import Education from '@/components/education';
import ProjectsSection from '@/components/project';

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col space-y-8 w-3/4">
        <Image
          isZoomed
          width={150}
          alt="NextUI Fruit Image with Zoom"
          src="/images/profile.jpeg"
        />
        <div className="flex flex-col">
          <h1 className={title()}>Naman Agrawal</h1>
          <h3 className={subtitle()}>Full-stack Developer</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cumque
          ut sequi dolorum veniam culpa eligendi unde beatae quae mollitia autem
          ea maxime pariatur! Inventore at ab corrupti error qui.
        </p>
        <div className="flex gap-4">
          <Link isExternal href="/resume.pdf">
            <Code size="md">$ npm install @resume</Code>
          </Link>
          <Link isExternal href="mailto:naman.agrawal.na05@gmail.com">
            <Code size="md">$ sudo mail</Code>
          </Link>
        </div>
      </div>
      <Spacer y={24} />
      <Marquee speed={75}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex justify-center items-center gap-2 mr-8"
          >
            <div className="bg-white rounded-2xl w-12 h-12 flex items-center justify-center">
              <Image
                src={skill.img}
                alt={skill.name}
                width={skill.id === 4 ? 18 : 40}
                height={40}
              />
            </div>
            <h1 className="text-lg font-semibold">{skill.name}</h1>
          </div>
        ))}
      </Marquee>
      <Spacer y={24} />
      <Experience />
      <Spacer y={24} />
      <ProjectsSection />
      <Spacer y={24} />
      <Education />
      <Spacer y={10} />
    </div>
  );
}
