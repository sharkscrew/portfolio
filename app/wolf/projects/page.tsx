import ProjectsContent from "../../../components/ProjectsContent";
import { persons } from "../../data";
export default function Page() { return <ProjectsContent p={persons["2"]} />; }
// For person2, change persons["1"] → persons["2"]