import { use } from "react";
import TechnologyCard from "./TechnologyCard";

const Technologies = ({ techPromise, setAddToStack }) => {
  const allTechnologies = use(techPromise);

  return (
    <div className="col-span-3 grid justify-center gap-5 sm:grid-rows-1 md:grid-cols-3 mb-15">
      {allTechnologies.map((tech) => (
        <TechnologyCard
          tech={tech}
          key={tech.id}
          setAddToStack={setAddToStack}
        />
      ))}
    </div>
  );
};

export default Technologies;