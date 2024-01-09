export default function ProjectImage({
  source,
  name,
}: {
  source: string;
  name: string;
}) {
  return <img className="project__image" src={source} alt={name} />;
}
