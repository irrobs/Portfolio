import TechIcon from "../tech-icon/TechIcon";

type TagsProps = {
  icon: string;
  technologieName: string;
};

type Props = {
  technologiesUsed: TagsProps[];
};

export default function Tags({ technologiesUsed }: Props) {
  return (
    <ul className="tags">
      {technologiesUsed.map((technologie) => (
        <TechIcon icon={technologie.icon} name={technologie.technologieName} />
      ))}
    </ul>
  );
}
