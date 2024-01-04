import iconCSS from "./assets/logo-css3.png";
import iconJavascript from "./assets/logo-javascript.png";
import iconSass from "./assets/logo-sass.svg";
/* import iconTypescript from "./assets/typescript.svg";
import iconReact from "./assets/logo-react.svg"; */
import myMovieList from "./assets/MyMovieList.png";
import rocketNFTs from "./assets/Rocket NFTs.png";

import TechIcon from "./TechIcon";

const projectsList = [
  {
    imagePath: myMovieList,
    title: "My Movie List",
    date: "Julho de 2023",
    description:
      "My Movie List é um site onde você pode pesquisar informações sobre qualquer filme que desejar e ver seus trailers. Além disso, é possível adicionar os filmes que desejar a listas de favoritos, de assistidos, e para ver mais tarde, assim mantentando uma organização do que você deseja ver. ",
    website: "https://mymovielistproj.netlify.app/",
    technologiesUsed: [
      { icon: iconJavascript, technologieName: "Javascript" },
      { icon: iconCSS, technologieName: "CSS" },
    ],
    repositorie: "My-Movie-List",
  },
  {
    imagePath: rocketNFTs,
    title: "Rocket NFTs",
    date: "Novembro de 2023",
    description: "Landing page da Rocket NFTs, um serviço de venda de NFTs.",
    website: "https://nfts-rocket.netlify.app/",
    technologiesUsed: [
      { icon: iconJavascript, technologieName: "Javascript" },
      { icon: iconSass, technologieName: "Sass" },
    ],
    repositorie: "RocketNFTs",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title section-title--left">
        Esses são os meu <span>trabalhos</span>:
      </div>
      {projectsList.map((project, i) =>
        i % 2 ? (
          <Project>
            <>
              <ProjectImage source={project.imagePath} name={project.title} />
              <ProjectContent
                title={project.title}
                description={project.description}
                website={project.website}
                repositorie={project.repositorie}
                date={project.date}
              >
                <Tags technologiesUsed={project.technologiesUsed} />
              </ProjectContent>
            </>
          </Project>
        ) : (
          <Project>
            <>
              <ProjectContent
                title={project.title}
                description={project.description}
                website={project.website}
                repositorie={project.repositorie}
                date={project.date}
              >
                <Tags technologiesUsed={project.technologiesUsed} />
              </ProjectContent>
              <ProjectImage source={project.imagePath} name={project.title} />
            </>
          </Project>
        )
      )}
    </section>
  );
}

function Project({ children }: { children: JSX.Element }) {
  return <div className="project">{children}</div>;
}

function ProjectContent({
  title,
  description,
  website,
  children,
  repositorie,
  date,
}: {
  title: string;
  description: string;
  website: string;
  children: JSX.Element;
  repositorie: string;
  date: string;
}) {
  return (
    <div className="project__content">
      <h3 className="heading__tertiary project__heading">{title}</h3>
      <p className="project__date">({date})</p>
      <p className="project__description">{description}</p>
      {children}
      <ul className="project__links">
        <li>
          <a href={`https://github.com/irrobs/${repositorie}`} target="_blank">
            código
          </a>
        </li>
        <li>
          <a href={website} target="_blank">
            website
          </a>
        </li>
      </ul>
    </div>
  );
}

function ProjectImage({ source, name }: { source: string; name: string }) {
  return <img className="project__image" src={source} alt={name} />;
}

interface TagsProps {
  icon: string;
  technologieName: string;
}

interface Props {
  technologiesUsed: TagsProps[];
}

function Tags({ technologiesUsed }: Props) {
  return (
    <ul className="tags">
      {technologiesUsed.map((technologie) => (
        <TechIcon icon={technologie.icon} name={technologie.technologieName} />
      ))}
    </ul>
  );
}
