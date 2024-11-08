import iconHTML from "../../assets/logo-html5.png";
import iconCSS from "../../assets/logo-css3.png";
import iconJavascript from "../../assets/logo-javascript.png";
import iconTypescript from "../../assets/typescript.svg";
import iconSass from "../../assets/logo-sass.svg";
import iconReact from "../../assets/logo-react.svg";
import iconTailwind from "../../assets/logo-tailwind.svg";
import iconStyledComponents from "../../assets/styled-components.svg";
import iconGitHub from "../../assets/github-mark-white.svg";
import iconLinkedin from "../../assets/logo-linkedin.png";
import iconResume from "../../assets/resume.svg";
import iconJest from "../../assets/jest.svg";
import TechIcon from "../../components/tech-icon/TechIcon";
import resume from "../../assets/Currículo Matheus Escobar.pdf";

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
          <TechIcon icon={iconTailwind} name="Tailwind" />
          <TechIcon icon={iconStyledComponents} name="Styled Components" />
          <TechIcon icon={iconJest} name="Jest" />
        </ul>
        <h1 className="hero__heading heading__primary">
          Desenvolvedor <span>fullstack </span>
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
        <a href={resume} target="_blank">
          <TechIcon icon={iconResume} name="Currículo" />
        </a>
      </ul>
    </section>
  );
}
