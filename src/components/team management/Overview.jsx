import React from "react";

const Overview = () => {
    return (
        <div className="flex flex-col gap-5 m-3 ml-10 mt-8">
            <div>
                <h3 className="text-lg font-bold  mb-2">About</h3>
                <p className="text-md font-normal leading-relaxed">
                    Sophia is a seasoned project manager with over 8 years of
                    experience in leading cross-functional teams to deliver
                    successful projects. She is known for her exceptional
                    organizational skills, proactive communication, and ability
                    to navigate complex challenges. Sophia is passionate about
                    fostering a collaborative and productive work environment.
                </p>
            </div>
            <div>
                <h1 className="text-lg font-bold  mb-2">Top Skills</h1>
                <div className="flex gap-5 mt-4">
                    <div className="font-md border-gray-500 px-3 py-1 bg-[#E8EDF5] rounded-[8px]">
                        Project Management
                    </div>
                    <div className="font-md border-gray-500 px-3 py-1 bg-[#E8EDF5] rounded-[8px]">
                        Agile Methodologies
                    </div>
                    <div className="font-md border-gray-500 px-3 py-1 bg-[#E8EDF5] rounded-[8px]">
                        Risk Management
                    </div>
                    <div className="font-md border-gray-500 px-3 py-1 bg-[#E8EDF5] rounded-[8px]">
                        Team Leadership
                    </div>
                    <div className="font-md border-gray-500 px-3 py-1 bg-[#E8EDF5] rounded-[8px]">
                        Communication
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    Summary
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start text-center h-[136px] w-[250px]">
                        <p class="text-md font-semibold text-gray-800 mb-1">
                            Workload
                        </p>
                        <p class="text-2xl font-bold text-indigo-600">75%</p>
                    </div>

                    <div class="border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start text-center h-[136px] w-[250px]">
                        <p class="text-md font-semibold text-gray-800 mb-1">
                            Tasks Completed
                        </p>
                        <p class="text-2xl font-bold text-indigo-600">120</p>
                    </div>

                    <div class="border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start text-center h-[136px] w-[250px]">
                        <p class="text-md font-semibold text-gray-800 mb-1">
                            Feedback Rating
                        </p>
                        <p class="text-2xl font-bold text-indigo-600">4.8/5</p>
                    </div>

                    <div class="border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start text-center h-[136px] w-[250px]">
                        <p class="text-md font-semibold text-gray-800 mb-1">
                            Peer Collaboration Score
                        </p>
                        <p class="text-2xl font-bold text-indigo-600">9.2/10</p>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    Activity
                </h3>
                <ol class="relative border-l-2 border-gray-200">
                    <li class="mb-8 ml-6">
                        
                        <h4 class="text-sm font-medium text-gray-900">
                            Completed Project Alpha
                        </h4>
                        <p class="text-sm font-semibold text-gray-500 mt-0.5">2 weeks ago</p>
                    </li>

                    <li class="mb-8 ml-6">
                        
                        <h4 class="text-sm font-medium text-gray-900">
                            Led Project Beta Kickoff
                        </h4>
                        <p class="text-sm font-semibold text-gray-500 mt-0.5">1 month ago</p>
                    </li>

                    <li class="mb-8 ml-6">
                       
                        <h4 class="text-sm font-medium text-gray-900">
                            Received Positive Client Feedback
                        </h4>
                        <p class="text-sm font-semibold text-gray-500 mt-0.5">2 months ago</p>
                    </li>

                    <li class="mb-8 ml-6">
                        
                        <h4 class="text-sm font-medium text-gray-900">
                            Mentored Junior PM
                        </h4>
                        <p class="text-sm font-semibold text-gray-500 mt-0.5">3 months ago</p>
                    </li>
                    <li class="ml-6">
                        <h4 class="text-sm font-medium text-gray-900">
                            Contributed to PM Best Practices
                        </h4>
                        <p class="text-sm font-semibold text-gray-500 mt-0.5">4 months ago</p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Overview;
