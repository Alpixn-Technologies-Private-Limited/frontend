import React from "react";

const SkillsAndCertifications = () => {
  const skills = ["Design", "Tech", "Management", "UI Design (3)", "UX Research (2)", "Interaction Design (1)", "Wireframing (4)", "Prototyping (2)", "User Testing (1)", "Design Thinking (3)", "Design Systems (2)", "Accessibility (1)", "Visual Design (3)"];
  const certifications = [
    { title: "Certified Professional in User Experience (CPUX)", expiry: "12/31/2024" },
    { title: "Certified Usability Analyst (CUA)", expiry: "06/30/2025" },
  ];

  return (
    <div className="flex flex-col gap-6 m-3 ml-10 mt-8">
      <h2 className="text-xl font-bold text-gray-900">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#E8EDF5] px-3 py-1 rounded-md text-sm font-medium text-gray-900"
          >
            {skill}
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
      <div className="flex flex-col gap-4 bg-[#F7FAFC] rounded-lg">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-md"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{cert.title}</p>
                <p className="text-sm text-[#4A739C]">Expires on {cert.expiry}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200 transition w-max">
        Upload Certification
      </button>
    </div>
  );
};

export default SkillsAndCertifications;
