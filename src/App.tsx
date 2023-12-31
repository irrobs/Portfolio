import Hero from "./hero";
import Navigation from "./navigation";

export default function App() {
  return (
    <div className="app">
      <Hero>
        <Navigation></Navigation>
      </Hero>
    </div>
  );
}
