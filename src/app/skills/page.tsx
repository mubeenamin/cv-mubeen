import SkillsDetails from "../component/skillsDetail";
import { skills } from "../data/page-data";

export default function Skills(){
    return(
        <>
        <SkillsDetails data ={skills}/>
        </>
    )
}