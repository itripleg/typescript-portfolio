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
import BreadCrumbs from "../components/BreadCrumbs";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experiences: Experience[];
};

const Home = ({ pageInfo, skills, projects, socials, experiences }: Props) => {
  // console.log(skills);
  return <></>;
};

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   console.log("Getting static props...");
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const skills: Skill[] = await fetchSkills();
//   const socials: Social[] = await fetchSocials();
//   const experiences: Experience[] = await fetchExperiences();
//   const projects: Project[] = await fetchProjects();

//   return {
//     props: { pageInfo, skills, socials, experiences, projects },
//     revalidate: 10,
//   };
// };
