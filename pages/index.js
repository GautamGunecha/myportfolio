import Head from "next/head";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHeader = dynamic(() => import("../components/Header/Header"), {
  suspense: true,
});

const DynamicAbout = dynamic(() => import("../components/About/About"), {
  suspense: true,
});

const DynamicContactMe = dynamic(
  () => import("../components/Contact/ContactMe"),
  { suspense: true }
);

const DynamicHero = dynamic(() => import("../components/Hero/Hero"), {
  suspense: true,
});

const DynamicProjects = dynamic(
  () => import("../components/Projects/Projects"),
  { suspense: true }
);

const DynamicSkills = dynamic(() => import("../components/Skills/Skills"), {
  suspense: true,
});

const Home = () => {
  return (
    <div>
      <Head>
        <title>Gautam Gunecha</title>
        <meta
          name="description"
          content="Gautam Gunecha Full Stack Developer"
        />

        <meta
          name="skills"
          content="reactjs nodejs expressjs mongodb nextjs tailwind"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={`Loading...`}>
        <DynamicHeader />
        <DynamicHero />
        <DynamicAbout />
        <DynamicSkills />
        <DynamicProjects />
        <DynamicContactMe />
      </Suspense>
    </div>
  );
};

export default Home;
