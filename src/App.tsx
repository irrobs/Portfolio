import Hero from "./Hero.tsx";
import Navigation from "./Navigation.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contacts from "./Contacts.tsx";

export default function App() {
  return (
    <div className="app">
      <Hero>
        <Navigation></Navigation>
      </Hero>
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}
