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
          Desenvolvedor front-end e amante da tecnologia
        </h2>
        <p className="about__content-text">
          Sou um desenvolvedor front-end, apaixonado por criar experiências
          digitais cativantes e funcionais. Com uma sólida formação em
          desenvolvimento web e uma ampla experiência em HTML, CSS e JavaScript,
          estou constantemente buscando inovação e aprimoramento nas minhas
          habilidades. Minha jornada no mundo do desenvolvimento começou como
          uma curiosidade, e desde então, tenho trabalhado em diversos projetos
          desafiadores, onde pude aprimorar não apenas minhas habilidades. Busco
          sempre equilibrar a estética do design com a funcionalidade do código,
          visando sempre entregar produtos de alta qualidade que proporcionem
          uma experiência incrível para o usuário. Estou entusiasmado em
          continuar aprendendo, crescendo e contribuindo para projetos
          inovadores no mundo do desenvolvimento front-end.
        </p>
      </div>
    </section>
  );
}
