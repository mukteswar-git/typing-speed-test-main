import CustomSelect from "./CustomSelect";
import StatsCard from "./StatsCard";

const TestControls = () => {
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
      </div>

      <div className="hidden md:block container mx-auto mt-4 px-4">
        <div className="border-b border-gray-400"></div>
      </div>
    </>
  );
};

export default TestControls;
