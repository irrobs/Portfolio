import myPhoto from "../../assets/minha-foto.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-title section-title--right">
        Quem sou <span>eu</span>?
      </div>

      <div className="about__content">
        <img src={myPhoto} className="about__content-photo"></img>
        <h2 className="about__content-heading heading__secondary">
          Desenvolvedor fullstack
        </h2>
        <p className="about__content-text">
          Desenvolvedor Fullstack com 2 anos de experiência no desenvolvimento
          de sites. Utilizo tecnologias como Javascript, Typescript, React,
          Next.js, Node.js, Express, Python, Django e Jest para desenvolver
          soluções eficazes e visualmente atraentes. Meu foco é garantir que
          cada projeto atenda às melhores práticas de SEO, UI/UX, performance e
          segurança. Minha jornada no mundo do desenvolvimento começou como uma
          curiosidade, e desde então, tenho trabalhado em diversos projetos
          desafiadores, onde pude aprimorar não apenas minhas habilidades. Busco
          sempre equilibrar a estética do design com a funcionalidade do código,
          visando sempre entregar produtos de alta qualidade que proporcionem
          uma experiência incrível para o usuário. Estou entusiasmado em
          continuar aprendendo, crescendo e contribuindo para projetos
          inovadores no mundo do desenvolvimento.
        </p>
      </div>
    </section>
  );
}
