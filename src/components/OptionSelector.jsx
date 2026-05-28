const OptionSelector = ({ label, options, active, setActive }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="text-gray-400">{label}</p>

      <div>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setActive(option)}
            className={`
                px-2 py-1 rounded-md border text-xs transition-colors mr-2
                ${
                  active === option
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-700 text-white hover:text-gray-500"
                }
              `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
