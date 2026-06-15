import ProjectsContent from "../../components/ProjectsContent";
import { persons } from "../../data";
export default function Page() { return <ProjectsContent p={persons["1"]} />; }
// For person2, change persons["1"] → persons["2"]