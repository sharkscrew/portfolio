import ContactContent from "../../../components/ContactContent";
import { persons } from "../../data";
export default function Page() { return <ContactContent p={persons["2"]} />; }
// For person2, change persons["1"] → persons["2"]