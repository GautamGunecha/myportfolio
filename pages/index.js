import Head from "next/head";
import About from "../components/About/About";
import ContactMe from "../components/Contact/ContactMe";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

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
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
