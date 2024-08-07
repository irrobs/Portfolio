import iconCSS from "../../assets/logo-css3.png";
import iconJavascript from "../../assets/logo-javascript.png";
import iconSass from "../../assets/logo-sass.svg";
import iconTypescript from "../../assets/typescript.svg";
import iconReact from "../../assets/logo-react.svg";
import iconTailwind from "../../assets/logo-tailwind.svg";
import iconStyled from "../../assets/styled-components.svg";
import iconJest from "../../assets/jest.svg";

import myMovieList from "../../assets/MyMovieList.jpg";
import rocketNFTs from "../../assets/Rocket-NFTs.jpg";
import fcommerce from "../../assets/fcommerce.jpg";
import roots from "../../assets/roots.png";

import Project from "../../components/project/Project";
import ProjectContent from "../../components/project/project-content/Project-content";
import ProjectImage from "../../components/project/project-image/Project-image";
import Tags from "../../components/tags/Tags";

const projectsList = [
  {
    imagePath: roots,
    title: "Roots",
    date: "Junho de 2024",
    description:
      "É uma rede social que é possível fazer postagens, seguir usuários, interagir com as postagens e até conversar em chats. Desenvolvida usando React e TypeScript, além de React Query para lidar com o state do servidor, Redux para o state global, React Router para o roteamento, React Hook Forms para os formulários, Styled Components para a estilização, e Jest/Vitest para os testes.",
    website: "https://rootss.vercel.app",
    technologiesUsed: [
      { icon: iconReact, technologieName: "React" },
      { icon: iconTypescript, technologieName: "Typescript" },
      { icon: iconStyled, technologieName: "Styled Components" },
      { icon: iconJest, technologieName: "Jest" },
    ],
    repositorie: "Roots",
  },
  {
    imagePath: fcommerce,
    title: "Fcommerce",
    date: "Fevereiro de 2024",
    description:
      "Ecommerce criado usando a API fakestore, sendo possível navegar pelas categorias de produtos, adicionar a carrinho,a lista de desejos e ver detalhes de produtos.",
    website: "https://myfcommerce.netlify.app/",
    technologiesUsed: [
      { icon: iconReact, technologieName: "React" },
      { icon: iconTypescript, technologieName: "Typescript" },
      { icon: iconTailwind, technologieName: "Tailwind" },
    ],
    repositorie: "Fcommerce",
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
  {
    imagePath: myMovieList,
    title: "My Movie List",
    date: "Julho de 2023",
    description:
      "My Movie List é um site onde você pode pesquisar informações sobre qualquer filme que desejar. Além disso, é possível adicionar eles a listas de favoritos, de assistidos, e para ver mais tarde, assim mantentando uma organização do que você deseja ver.",
    website: "https://mymovielistproj.netlify.app/",
    technologiesUsed: [
      { icon: iconJavascript, technologieName: "Javascript" },
      { icon: iconCSS, technologieName: "CSS" },
    ],
    repositorie: "My-Movie-List",
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
