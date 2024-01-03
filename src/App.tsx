import Hero from "./hero";
import Navigation from "./Navigation.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";

export default function App() {
  return (
    <div className="app">
      <Hero>
        <Navigation></Navigation>
      </Hero>
      <About />
      <Projects />
    </div>
  );
}
