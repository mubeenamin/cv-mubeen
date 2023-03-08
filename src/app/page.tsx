import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import AboutMe from "./component/aboutme";
import { aboutMe, skills } from "./data/page-data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <div className="hidden sm:block">
        <Image
          width={3000}
          height={2000}
          alt="bg image"
          src={"/cv-bg1.jpg"}
          className="bg-cover fixed sm:w-[80%]  sm:h-screen w-auto bg-center shrink-0 "
        />
        <div className="sm:text-5xl font-extrabold  relative flex justify-center items-center h-auto pt-40 sm:h-screen shrink-0 text-yellow-200">
          {" "}
          Web Developer
        </div>
      </div>
      <AboutMe data={aboutMe} skills={skills} />
    </section>
  );
}
