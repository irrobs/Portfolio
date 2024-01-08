export default function TechIcon({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return <img className="techIcon" src={icon} alt={`${name} logo`} />;
}
