import React from "react";

const Description = () => {
  return (
    <div className="px-4 md:px-6 py-4">
      <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
        Description
      </h2>
      <p className="text-sm md:text-base text-black leading-relaxed text-justify">
        The Project Details Overview page offers a comprehensive snapshot of the selected project, combining real-time data and AI-driven insights. It displays key metrics like project status, deadline, completion percentage, and assigned manager, alongside a dynamic AI health meter that highlights potential risks. Milestone progress is visualized through an interactive timeline, while AI-generated alerts notify users of delays, resource conflicts, or communication gaps. A chronological activity feed tracks updates, comments, and file uploads, ensuring transparency. Quick stats summarize task progress and client engagement, making this page the central hub for monitoring project health, team actions, and overall delivery confidence.
      </p>
    </div>
  );
};

export default Description;
