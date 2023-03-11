import ResumeDetail from "../component/resumeDetail"
import { personalData, professionalData } from "../data/page-data"
export default function Resume(){
    return(
        <div>
            <ResumeDetail data={personalData} professional={professionalData}/>
        </div>
    )
}