import AboutContent from "../../../components/AboutContent";
import { persons } from "../../data";
export default function Page() { return <AboutContent p={persons["2"]} />; }
// For person2, change persons["1"] → persons["2"]