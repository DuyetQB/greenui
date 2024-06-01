import Activities from "./components/Activities";
import Banner from "./components/Banner";
import DomainActivity from "./components/DomainActivity";
import HistoryCreation from "./components/HistoryCreation";
import Mission from "./components/Mission";


export default function Home() {
  return (
    <main>
      <Banner />
      <DomainActivity />
      <HistoryCreation />
      <Mission />
      <Activities />
    </main>
  );
}
