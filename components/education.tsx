import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { title } from './primitives';
import { Image } from '@nextui-org/image';
import { Divider } from '@nextui-org/divider';

const Education = () => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className={title()}>Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card
          shadow="none"
          className="p-2 border border-neutral-300 dark:border-none"
        >
          <CardHeader className="flex gap-4">
            <Image src="/images/iitbhulogo.png" alt="iitbhu" width={40} />
            <div>
              <h1 className="font-semibold">
                Indian Institute Of Technology (B.H.U.), Varanasi
              </h1>
              <h2 className="text-sm">B.Tech. in Ceramic Engineering</h2>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>November 2020 - June 2024</CardFooter>
        </Card>
        <Card
          shadow="none"
          className="p-2 border border-neutral-300 dark:border-none"
        >
          <CardHeader className="flex gap-4">
            <Image src="/images/chinar.jpeg" alt="iitbhu" width={40} />
            <div>
              <h1 className="font-semibold">Chinar Public School</h1>
              <h2 className="text-sm">Journey from Nursery to High School</h2>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>2005 - 2018</CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Education;
