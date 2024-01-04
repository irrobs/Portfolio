import upArrow from "./assets/chevron-up-outline.svg";

export default function Contacts() {
  return (
    <footer className="contacts" id="contacts">
      <a className="contacts__button-up" href="#hero">
        <img src={upArrow} alt="Seta para cima" />
      </a>
    </footer>
  );
}
