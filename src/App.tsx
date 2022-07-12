import "./App.scss";
import Header from "./components/Header/Header";
import SupportBy from "./components/SupportBy/SupportBy";
import Hero from "./sections/Hero/Hero";
import OurServices from "./sections/OurServices/OurServices";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SupportBy />
        <OurServices />
      </main>
    </>
  );
}

export default App;
