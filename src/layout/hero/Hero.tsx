import iconHTML from "../../assets/logo-html5.png";
import iconCSS from "../../assets/logo-css3.png";
import iconJavascript from "../../assets/logo-javascript.png";
import iconTypescript from "../../assets/typescript.svg";
import iconSass from "../../assets/logo-sass.svg";
import iconReact from "../../assets/logo-react.svg";
import iconGitHub from "../../assets/github-mark-white.svg";
import iconLinkedin from "../../assets/logo-linkedin.png";

import TechIcon from "../../components/tech-icon/TechIcon";

export default function Hero({ children }: { children: JSX.Element }) {
  return (
    <section className="hero" id="hero">
      <div className="section-title section-title--left">
        Olá, meu nome é <span>Matheus Escobar</span>, e eu sou um:
      </div>
      <div className="hero__main-text">
        <ul className="hero__tech-icons-list">
          <TechIcon icon={iconHTML} name="HTML" />
          <TechIcon icon={iconCSS} name="CSS" />
          <TechIcon icon={iconJavascript} name="Javascript" />
          <TechIcon icon={iconTypescript} name="Typescript" />
          <TechIcon icon={iconSass} name="Sass" />
          <TechIcon icon={iconReact} name="React" />
        </ul>
        <h1 className="hero__heading heading__primary">
          Desenvolvedor <span>front</span>-end
        </h1>
      </div>
      {children}
      <ul className="hero__social-icons-list">
        <a href="https://github.com/irrobs" target="_blank">
          <TechIcon icon={iconGitHub} name="Github" />
        </a>
        <a href="https://www.linkedin.com/in/matheus-escobar/" target="_blank">
          <TechIcon icon={iconLinkedin} name="Linkedin" />
        </a>
      </ul>
    </section>
  );
}
