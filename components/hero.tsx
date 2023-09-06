import { Image } from '@nextui-org/image';
import { subtitle, title } from './common/primitives';
import { Link } from '@nextui-org/link';
import { Code } from '@nextui-org/code';

const Hero = () => {
  return (
    <div className="flex flex-col space-y-8 sm:w-3/4">
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
      <div>
        <p>
          I am a full stack developer with a strong track record of success in
          developing and maintaining scalable web applications. I have
          experience with blockchain technologies, including smart contracts,
          decentralized protocols, and cryptographic algorithms.
        </p>
        <br />
        <p className="hidden sm:block">
          I am a team player with strong communication and collaboration skills.
          I am passionate about using technology to solve real-world problems.
        </p>
      </div>
      <div className="flex gap-4">
        <Link isExternal href="/resume.pdf">
          <Code size="md">$ npm install @resume</Code>
        </Link>
        <Link isExternal href="mailto:naman.agrawal.na05@gmail.com">
          <Code size="md">$ sudo mail</Code>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
