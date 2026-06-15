// person1 version uses "../data", person2 uses "../data" too (same level)
import HomeContent from "../components/HomeContent";
import { persons } from "../data";
export default function Page() { return <HomeContent p={persons["2"]} />; }
// For person2, change persons["1"] → persons["2"]