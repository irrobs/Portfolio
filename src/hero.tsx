import iconHTML from "./assets/logo-html5.png";
import iconCSS from "./assets/logo-css3.png";
import iconJavascript from "./assets/logo-javascript.png";
import iconTypescript from "./assets/typescript.svg";
import iconSass from "./assets/logo-sass.svg";
import iconReact from "./assets/logo-react.svg";
import iconGitHub from "./assets/github-mark-white.svg";
import iconLinkedin from "./assets/logo-linkedin.png";

export default function Hero({ children }: { children: JSX.Element }) {
  return (
    <section className="hero">
      <div className="hero__main-text">
        <div className="section-title section-title--hero">
          Olá, meu nome é <span>Matheus Escobar</span>, e eu sou um:
        </div>
        <ul className="hero__tech-icons-list">
          <Icon icon={iconHTML} name="HTML" />
          <Icon icon={iconCSS} name="CSS" />
          <Icon icon={iconJavascript} name="Javascript" />
          <Icon icon={iconTypescript} name="Typescript" />
          <Icon icon={iconSass} name="Sass" />
          <Icon icon={iconReact} name="React" />
        </ul>
        <h1 className="hero__heading heading__primary">
          Desenvolvedor <span>front</span>-end
        </h1>
      </div>
      {children}
      <ul className="hero__social-icons-list">
        <Icon icon={iconGitHub} name="Github" />
        <Icon icon={iconLinkedin} name="Linkedin" />
      </ul>
    </section>
  );
}

function Icon({ icon, name }: { icon: string; name: string }) {
  return <img src={icon} alt={`${name} logo`} />;
}
