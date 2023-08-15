import NextLink from 'next/link';
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import { Image } from '@nextui-org/image';
import Experience from '@/components/experience';
import { Spacer } from '@nextui-org/spacer';
import Marquee from 'react-fast-marquee';

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
          <Link isExternal>
            <Code size="md">$ npm install @resume</Code>
          </Link>
          <Link isExternal href="malto:naman.agrawal.na05@gmail.com">
            <Code size="md">$ sudo mail</Code>
          </Link>
        </div>
      </div>
      <Spacer y={24} />
      {/* <Marquee>
        {}
      </Marquee> */}
      <Spacer y={24} />
      <Experience />
      <Spacer y={24} />
    </div>
  );
}
