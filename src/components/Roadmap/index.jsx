import Epic from "../Epic";

import { RoadmapData } from "../../data/RoadmapData";

function DoneCount(roadmapData) {
  let count = 0;
  roadmapData.forEach((item) => {
    if (item.done) {
      count++;
    }
  });
  return count;
}

function CountItems(roadmapData) {
  let count = 0;
  roadmapData.forEach((item) => {
    count++;
  });
  return count;
}

const DonePercentage = (doneCount, countItems) => {
  const percentage = (doneCount / countItems) * 100;
  return percentage;
};

export default function Roadmap() {
  return (
    <div className="flex px-6">
      {/* Line Left */}
      <div className="relative hidden md:block">
        <div
          style={{
            height:
              DonePercentage(DoneCount(RoadmapData), CountItems(RoadmapData)) +
              "%",
            position: "absolute",
          }}
          className="bg-primary neon w-px"
        ></div>
        <div className="min-h-full bg-gray w-px"></div>
      </div>
      <div className="flex flex-col gap-10 md:gap-[60px]">
        {RoadmapData.map((epic, index) => (
          <Epic
            key={index}
            title={epic.title}
            description={epic.description}
            icon={epic.icon}
            done={epic.done}
          />
        ))}
      </div>
    </div>
  );
}
