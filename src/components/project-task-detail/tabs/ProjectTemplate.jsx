import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import img1 from '../../../assets/templates/img1.jpg';
import img2 from '../../../assets/templates/img2.jpg';
import img3 from '../../../assets/templates/img3.jpg';

const templates = [
  {
    id: 1,
    name: 'Template 1',
    description: 'Description for Template 1',
    image: img1,
  },
  {
    id: 2,
    name: 'Template 2',
    description: 'Description for Template 2',
    image: img2,
  },
  {
    id: 3,
    name: 'Template 3',
    description: 'Description for Template 3',
    image: img3,
  },
];

const ProjectTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="p-6">
      <h4 className="text-lg font-semibold mb-6">Project Template</h4>

      {/* Template Cards */}
      <div className="grid grid-cols-1 w-170 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`rounded-xl p-1 transition cursor-pointer relative ${
              selectedTemplate === template.id
                ? 'border border-blue-500'
                : 'border border-transparent'
            }`}
          >
            {/* Inner White Card */}
            <div className="bg-white w-50 rounded-xl shadow p-4 h-full">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-base font-medium mb-1">{template.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{template.description}</p>
              <button className="text-sm text-black font-semibold bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                Select Template
              </button>
            </div>

            {selectedTemplate === template.id && (
              <FaCheckCircle className="absolute top-2 right-2 text-blue-500 text-lg" />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4">
        <button className="text-sm text-gray-600 hover:text-black px-4 py-2 rounded">
          Cancel
        </button>
        <button className="text-sm bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectTemplate;