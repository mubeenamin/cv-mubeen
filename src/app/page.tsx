import Image from "next/image";
import { Inter } from "next/font/google";

import AboutMe from "./component/aboutme";
import { aboutMe, personalData, skills } from "./data/page-data";
import Sidebar from "./component/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <Sidebar data={personalData} />
    </section>
  );
}
