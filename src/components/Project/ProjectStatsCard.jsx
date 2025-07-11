const ProjectStatsCard = ({ title, value, subtitle, icon, change, changeColor }) => {
  return (
    <div className="bg-white shadow-sm rounded-md border p-5">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium text-gray-600">{title}</h4>
        <span className="text-xl">{icon}</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{value}
        {subtitle && <span className="ml-1 text-base font-medium text-gray-600">{subtitle}</span>}
      </h2>
      <p className={`text-sm font-medium mt-1 ${changeColor}`}>{change}</p>
    </div>
  );
};

export default ProjectStatsCard;
