import "./App.scss";
import Header from "./components/Header/Header";
import SupportBy from "./components/SupportBy/SupportBy";
import About from "./sections/About/About";
import Comments from "./sections/Comments/Comments";
import Hero from "./sections/Hero/Hero";
import OurServices from "./sections/OurServices/OurServices";
import Popular from "./sections/Popular/Popular";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SupportBy />
        <OurServices />
        <Popular />
        <Comments />
        <About />
      </main>
    </>
  );
}

export default App;
