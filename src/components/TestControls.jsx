import dropDownIcon from "../assets/images/icon-down-arrow.svg"

const TestControls = () => {
  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex flex-col items-center border-r border-gray-600 px-4">
          <p className="text-gray-500 text-sm">WPM:</p>
          <p className="font-bold text-2xl">40</p>
        </div>
        <div className="flex flex-col items-center border-r border-gray-600 px-4">
          <p className="text-gray-500 text-sm">Accuracy:</p>
          <p className="text-red-500 font-bold text-2xl">94%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-sm">WPM:</p>
          <p className="text-yellow-500 font-bold text-2xl">0:46</p>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="relative">
          <select className="appearance-none border rounded-md px-6 py-1 pr-10 text-sm">
            <option className="text-gray-400 bg-gray-800">Easy</option>
            <option className="text-gray-400 bg-gray-800">Medium</option>
            <option className="text-gray-400 bg-gray-800">Hard</option>
          </select>
          <img src={dropDownIcon} alt="⌵" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3" />
        </div>
        <div className="relative">
          <select className="appearance-none border rounded-md px-6 py-1 pr-6 text-sm">
            <option className="text-gray-400 bg-gray-800">Timed (60s)</option>
            <option className="text-gray-400 bg-gray-800">Passage</option>
          </select>
          <img src={dropDownIcon} alt="⌵" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3" />
        </div>
      </div>
    </div>
  ); 
};

export default TestControls;
