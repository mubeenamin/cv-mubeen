import AboutMeDetail from "../component/aboudMeDetail";
import { aboutMe, skills } from "../data/page-data";

export default function AboutMe(){
    return(
        <AboutMeDetail data={aboutMe} />
    )
}