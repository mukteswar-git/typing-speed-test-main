import dropDownIcon from "../assets/images/icon-down-arrow.svg";

const CustomSelect = ({ options }) => {
  return (
    <div className="relative">
      <select className="appearance-none border rounded-md px-6 py-1 pr-10 text-sm bg-transparent">
        {options.map((option) => (
          <option key={option} className="text-gray-400 bg-gray-800">
            {option}
          </option>
        ))}
      </select>

      <img
        src={dropDownIcon}
        alt=""
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3"
      />
    </div>
  );
};

export default CustomSelect;
