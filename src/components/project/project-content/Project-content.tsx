export default function ProjectContent({
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
