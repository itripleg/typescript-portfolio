import type { GetStaticProps } from "next";
import Head from "next/head";
// import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Chatbot from "../components/Chatbot";
import Link from "next/link";
import { PageInfo, Skill, Project, Social, Experience } from "../typings";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import Breadcrumbs from "nextjs-breadcrumbs";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experiences: Experience[];
};

const Home = ({ pageInfo, skills, projects, socials, experiences }: Props) => {
  // console.log(skills);
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-white"
    >
      <div className="absolute bottom-0">
        {/* <Breadcrumbs useDefaultStyle rootLabel="Home" /> */}
      </div>
      <Head>
        <title>Josh Bell Dev</title>
      </Head>
      <Header socials={socials} />
      <Chatbot />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section
        id="about"
        className="snap-center scroll-smooth transition duration-300 ease-in-out"
      >
        <About pageInfo={pageInfo} />
      </section>
      <section
        id="experience"
        className="snap-center scroll-smooth transition duration-300 ease-in-out"
      >
        <WorkExperience experiences={experiences} />
      </section>
      <section
        id="skills"
        className="snap-start scroll-smooth transition duration-300 ease-in-out"
      >
        <Skills skills={skills} />
      </section>
      <section
        id="projects"
        className="snap-center scroll-smooth transition duration-300 ease-in-out"
      >
        <Projects projects={projects} />
      </section>
      <section
        id="contact"
        className="snap-center scroll-smooth transition duration-300 ease-in-out"
      >
        <Contact />
      </section>
      <Link href={"https://buncombe.tech/"}>
        <footer className="sticky bottom-0 hidden">
          <div>
            <img
              src="https://buncombe.tech/me_mask.jpg"
              alt=""
              className="w-20 h-20 z-30"
            />
          </div>
        </footer>
      </Link>
      {/* <BreadCrumbs /> */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  console.log("Getting static props...");
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();

  return {
    props: { pageInfo, skills, socials, experiences, projects },
    revalidate: 10,
  };
};
