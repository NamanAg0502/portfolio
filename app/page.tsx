import React from 'react';
import { Image } from '@nextui-org/image';
import Marquee from 'react-fast-marquee';
import { skills } from '@/constants/data';
import Experience from '@/components/experience/experience';
import Education from '@/components/education';
import ProjectsSection from '@/components/projects/project';
import Hero from '@/components/hero';
import { Spacer } from '@nextui-org/spacer';

interface Section {
  id: string;
  Component: React.FC;
  spacing: any;
}

interface Skill {
  id: number;
  name: string;
  img: string;
}

const SkillsSection: React.FC = () => (
  <Marquee speed={75}>
    {skills.map((skill: Skill) => (
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
);

const sections: Section[] = [
  { id: 'hero', Component: Hero, spacing: 4 },
  { id: 'skills', Component: SkillsSection, spacing: 20 },
  { id: 'experience', Component: Experience, spacing: 40 },
  { id: 'projects', Component: ProjectsSection, spacing: 40 },
  { id: 'education', Component: Education, spacing: 20 },
];

const Home: React.FC = () => (
  <div className="">
    {sections.map((section) => (
      <React.Fragment key={section.id}>
        <Spacer y={section.spacing} />
        <Section id={section.id} Component={section.Component} />
      </React.Fragment>
    ))}
  </div>
);

interface SectionProps {
  id: string;
  Component: React.FC;
}

const Section: React.FC<SectionProps> = ({ id, Component }) => (
  <React.Fragment key={id}>
    <Component />
  </React.Fragment>
);

export default Home;
