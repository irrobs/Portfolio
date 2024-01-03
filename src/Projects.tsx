import iconTypescript from "./assets/typescript.svg";
import iconSass from "./assets/logo-sass.svg";
import iconReact from "./assets/logo-react.svg";
import MyMovieList from "./assets/MyMovieList.png";

import TechIcon from "./TechIcon";

export default function Projects() {
  return (
    <section className="projects">
      <div className="section-title section-title--left">
        Esses são os meu <span>trabalhos</span>:
      </div>
      <Project>
        <>
          <img
            className="project__image"
            src={MyMovieList}
            alt="My movie list"
          />
          <div className="project__content">
            <h3 className="heading__tertiary project__heading">
              My Movie List
            </h3>
            <p className="project__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quas rerum aut modi rem temporibus debitis? Quia magni velit
              voluptas modi architecto? Et cupiditate accusamus earum, eos
              voluptates id odio? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ratione id cupiditate, eveniet laudantium sunt
              illum temporibus sequi eum enim minima excepturi pariatur voluptas
              quas tempora qui doloribus iure, nesciunt nam.
            </p>
            <Tags />
            <ul className="project__links">
              <li>
                <a href="https://github.com/irrobs" target="_blank">
                  código
                </a>
              </li>
              <li>
                <a href="https://mymovielistproj.netlify.app/" target="_blank">
                  website
                </a>
              </li>
            </ul>
          </div>
        </>
      </Project>
      <Project>
        <>
          <div className="project__content">
            <h3 className="heading__tertiary project__heading">
              My Movie List
            </h3>
            <p className="project__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quas rerum aut modi rem temporibus debitis? Quia magni velit
              voluptas modi architecto? Et cupiditate accusamus earum, eos
              voluptates id odio? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ratione id cupiditate, eveniet laudantium sunt
              illum temporibus sequi eum enim minima excepturi pariatur voluptas
              quas tempora qui doloribus iure, nesciunt nam.
            </p>
            <Tags />
            <ul className="project__links">
              <li>
                <a href="#">código</a>
              </li>
              <li>
                <a href="#">website</a>
              </li>
            </ul>
          </div>
          <img
            className="project__image"
            src={MyMovieList}
            alt="My movie list"
          />
        </>
      </Project>
      <Project>
        <>
          <img
            className="project__image"
            src={MyMovieList}
            alt="My movie list"
          />
          <div className="project__content">
            <h3 className="heading__tertiary project__heading">
              My Movie List
            </h3>
            <p className="project__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quas rerum aut modi rem temporibus debitis? Quia magni velit
              voluptas modi architecto? Et cupiditate accusamus earum, eos
              voluptates id odio? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ratione id cupiditate, eveniet laudantium sunt
              illum temporibus sequi eum enim minima excepturi pariatur voluptas
              quas tempora qui doloribus iure, nesciunt nam.
            </p>
            <Tags />
            <ul className="project__links">
              <li>
                <a href="#">código</a>
              </li>
              <li>
                <a href="#">website</a>
              </li>
            </ul>
          </div>
        </>
      </Project>
    </section>
  );
}

function Project({ children }: { children: JSX.Element }) {
  return <div className="project">{children}</div>;
}

function Tags() {
  return (
    <ul className="tags">
      <TechIcon icon={iconReact} name="React" />
      <TechIcon icon={iconTypescript} name="TypeScript" />
      <TechIcon icon={iconSass} name="Sass" />
    </ul>
  );
}
