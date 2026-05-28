import { useState } from "react";
import CustomSelect from "./CustomSelect";
import OptionSelector from "./OptionSelector";
import StatsCard from "./StatsCard";

const TestControls = () => {
  const [difficulty, setDifficulty] = useState("Easy");
  const [mode, setMode] = useState("Timed(60s)");

  return (
    <>
      <div className="md:flex container justify-between mx-auto">
        <div className="flex justify-center p-4 md:px-0">
          <StatsCard label="WPM:" value="40" color="text-white" />
          <StatsCard label="Accuracy:" value="94%" color="text-red-500" />
          <StatsCard label="Time" value="0:46" color="text-yellow-500" />
        </div>

        <div className="p-4 md:px-0 md:pr-4 lg:hidden">
          <div className="flex justify-center gap-6 md:gap-4">
            <CustomSelect options={["Easy", "Medium", "Hard"]} />
            <CustomSelect options={["Timed (60s)", "Passage"]} />
          </div>

          <div className="border-b border-gray-400 mt-4 md:hidden"></div>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-xs pr-10">
          <OptionSelector
            label="Difficulty:"
            options={["Easy", "Medium", "Hard"]}
            active={difficulty}
            setActive={setDifficulty}
          />
          <div className="border-r border-gray-600 h-8"></div>
          <OptionSelector
            label="Mode:"
            options={["Timed(60s)", "Passage"]}
            active={mode}
            setActive={setMode}
          />
        </div>
      </div>

      <div className="hidden md:block container mx-auto mt-4 px-4">
        <div className="border-b border-gray-400"></div>
      </div>
    </>
  );
};

export default TestControls;
