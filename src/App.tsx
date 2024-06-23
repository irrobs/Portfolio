import Hero from "./layout/hero/Hero.tsx";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./layout/about/About.tsx";
import Projects from "./layout/projects/Projects.tsx";
import Contacts from "./layout/contacts/Contacts.tsx";

export default function App() {
  return (
    <div className="app">
      <Hero>
        <Navigation />
      </Hero>
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}
