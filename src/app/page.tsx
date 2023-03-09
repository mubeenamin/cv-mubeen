import Image from "next/image";
import { Inter } from "next/font/google";


import { aboutMe, personalData, skills } from "./data/page-data";
import HomePage from "./component/home-page";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <HomePage data={personalData}/>
    </section>
  );
}
