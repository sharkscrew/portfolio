import HomeContent from "../components/HomeContent";
import { persons } from "../data";
export default function Page() { return <HomeContent p={persons["2"]} />; }