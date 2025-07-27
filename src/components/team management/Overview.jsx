import React from "react";

const Overview = () => {
    return (
        <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
            <div>
                <h3 className="text-lg font-bold mb-2">About</h3>
                <p className="text-base font-normal leading-relaxed text-gray-700">
                    Sophia is a seasoned project manager with over 8 years of experience in leading cross-functional teams to deliver successful projects. She is known for her exceptional organizational skills, proactive communication, and ability to navigate complex challenges. Sophia is passionate about fostering a collaborative and productive work environment.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">Top Skills</h3>
                <div className="flex flex-wrap gap-3 mt-3">
                    {['Project Management','Agile Methodologies','Risk Management','Team Leadership','Communication'].map((skill, idx) => (
                        <div key={idx} className="text-sm px-3 py-1 bg-[#E8EDF5] rounded-lg">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Workload', value: '75%' },
                        { label: 'Tasks Completed', value: '120' },
                        { label: 'Feedback Rating', value: '4.8/5' },
                        { label: 'Peer Collaboration Score', value: '9.2/10' }
                    ].map((item, idx) => (
                        <div key={idx} className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start h-[140px] w-full">
                            <p className="text-sm font-medium text-gray-800 mb-1">{item.label}</p>
                            <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity</h3>
                <ol className="relative border-l-2 border-gray-200 space-y-6">
                    {[
                        { title: 'Completed Project Alpha', date: '2 weeks ago' },
                        { title: 'Led Project Beta Kickoff', date: '1 month ago' },
                        { title: 'Received Positive Client Feedback', date: '2 months ago' },
                        { title: 'Mentored Junior PM', date: '3 months ago' },
                        { title: 'Contributed to PM Best Practices', date: '4 months ago' }
                    ].map((activity, idx) => (
                        <li key={idx} className="ml-6">
                            <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                            <p className="text-sm text-gray-500 mt-0.5">{activity.date}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Overview;
