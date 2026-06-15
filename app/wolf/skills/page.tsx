import SkillsContent from "../../../components/SkillsContent";
import { persons } from "../../data";
export default function Page() { return <SkillsContent p={persons["2"]} />; }
// For person2, change persons["1"] → persons["2"]