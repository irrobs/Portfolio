import upArrow from "./assets/chevron-up-outline.svg";

export default function Contacts() {
  return (
    <footer className="contacts" id="contacts">
      <a className="contacts__button-up" href="#hero">
        <img src={upArrow} alt="Seta para cima" />
      </a>
      <h2 className="heading__secondary contacts__heading">Meus Contatos</h2>
      <ul className="contacts__list">
        <li className="contacts__items">
          <span>Email</span>
          <p>matheus.escobar90@gmail.com</p>
        </li>
        <li className="contacts__items">
          <span>Celular</span>
          <p>+55 16 982393924</p>
        </li>
      </ul>

      <a href="https://www.linkedin.com/in/matheus-borri2/" target="_blank">
        Linkedin
      </a>
    </footer>
  );
}
