const StatsCard = ({ label, value, color }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-2 items-center px-6 border-r border-gray-600 last:border-none">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`font-bold text-2xl ${color}`}>{value}</p>
    </div>
  );
};

export default StatsCard;
