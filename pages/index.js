import Head from "next/head";
import Main from "./components/Main";
import EducationBackground from "./components/Education_Background";
import ResearchSkills from "./components/Research_skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Conference from "./components/Conference";

export default function Home() {
  return (
    <div>
      <Head >
        <title>Pavithraa Sundararajan</title>
        <meta
          name="description"
          content="Astrochemistry/Interstellar Chemistry, Spectroscopy, PAH Chemistry in space."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
    </div>
  );
}
