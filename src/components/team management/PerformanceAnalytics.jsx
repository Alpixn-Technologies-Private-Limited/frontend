import React from "react";
import line_graph from "../../assets/line_graph.png";
import completion_graph from "../../assets/completion_graph.png";
import horizontal_graph from "../../assets/horizontal_graph.png";

const PerformanceAnalytics = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-gray-900">Performance Analytics</h2>
            <p className="text-sm text-gray-500 mt-1 mb-8">
                Review performance metrics for Sarah Chen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm h-[394px] w-full">
                    <h3 className="text-sm text-gray-500 mb-1">Task Success Rate</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-1">95%</p>
                    <p className="text-sm text-[#4A739C] mb-4">
                        Last 3 Months <span className="text-[#088738]">+5%</span>
                    </p>
                    <div className="flex justify-start gap-10 items-center h-24 mt-30 ml-5">
                        {['Jul', 'Aug', 'Sep'].map((month, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <img src={line_graph} alt="Line Graph" className="w-6" />
                                <span className="text-xs font-semibold text-gray-500 mt-3">{month}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm h-[394px] w-full">
                    <h3 className="text-sm text-gray-500 mb-1">Average Completion Time</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-1">2.5 days</p>
                    <p className="text-sm text-[#4A739C] mb-4">
                        Last 3 Months <span className="text-[#E83808]">-0.2 days</span>
                    </p>
                    <img src={completion_graph} alt="Completion Graph" className="w-full mt-2" />
                    <div className="flex justify-around items-end mt-6">
                        {['Jul', 'Aug', 'Sep'].map((month, idx) => (
                            <span key={idx} className="text-xs font-semibold text-gray-500 mt-1">{month}</span>
                        ))}
                    </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm h-[394px] w-full">
                    <h3 className="text-sm text-gray-500 mb-1">Peer Reviews</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-1">4.8/5</p>
                    <p className="text-sm text-[#4A739C] mb-4">
                        Last 3 Months <span className="text-[#088738]">+0.3</span>
                    </p>
                    <div className="flex flex-col gap-4 mt-5 ml-2 w-[90%]">
                        {['Jul', 'Aug', 'Sep'].map((month, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="text-xs font-semibold text-gray-500 w-8 text-right">{month}</span>
                                <img src={horizontal_graph} alt="Horizontal Graph" className="ml-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm h-[380px] mt-6 w-full">
                <h3 className="text-sm text-gray-500 mb-1">Comparison to Team Average</h3>
                <p className="text-4xl font-bold text-gray-900 mb-1">10% above</p>
                <p className="text-sm text-[#4A739C] mb-4">
                    Last 3 Months <span className="text-[#088738]">+2%</span>
                </p>
                <div className="flex justify-start gap-5 items-end mt-4">
                    {['Jul', 'Aug', 'Sep'].map((month, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <img src={line_graph} alt="Line Graph" className="w-6 h-36" />
                            <span className="text-xs text-gray-500 mt-1">{month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PerformanceAnalytics;