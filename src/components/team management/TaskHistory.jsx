import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const TaskHistory = () => {
    const tasks = [
        {
            id: 1,
            task: "Prepare quarterly report",
            project: "Marketing Campaign",
            status: "Completed",
            assignedBy: "David Lee",
            completedAt: "2024-03-15 10:00 AM",
        },
        {
            id: 2,
            task: "Update website content",
            project: "Website Redesign",
            status: "Completed",
            assignedBy: "Emily Chen",
            completedAt: "2024-03-10 02:30 PM",
        },
        {
            id: 3,
            task: "Review client feedback",
            project: "Customer Support",
            status: "Completed",
            assignedBy: "Michael Wong",
            completedAt: "2024-03-05 04:45 PM",
        },
        {
            id: 4,
            task: "Plan product launch",
            project: "Product Development",
            status: "Missed Deadline",
            assignedBy: "Jessica Tan",
            completedAt: "2024-02-28 09:15 AM",
        },
        {
            id: 5,
            task: "Conduct market research",
            project: "Market Analysis",
            status: "Completed",
            assignedBy: "Daniel Kim",
            completedAt: "2024-02-20 11:20 AM",
        },
    ];

    const handleExportCSV = () => {
        const headers = [
            "Task",
            "Project",
            "Status",
            "Assigned By",
            "Completed At",
        ];
        const rows = tasks.map((task) => [
            task.task,
            task.project,
            task.status,
            task.assignedBy,
            task.completedAt,
        ]);

        let csvContent =
            "data:text/csv;charset=utf-8," +
            headers.join(",") +
            "\n" +
            rows.map((e) => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "task_history.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleExportPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Task History", 14, 22);

        const tableColumn = [
            "Task",
            "Project",
            "Status",
            "Assigned By",
            "Completed At",
        ];
        const tableRows = tasks.map((task) => [
            task.task,
            task.project,
            task.status,
            task.assignedBy,
            task.completedAt,
        ]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 30,
        });

        doc.save("task_history.pdf");
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-[32px] font-bold text-[#111827] mb-1">
                Task History
            </h2>
            <p className="text-sm text-[#4A739C] mb-6">
                View and manage the task history for Sarah Miller.
            </p>
            <h2 className="text-[22px] font-bold text-[#111827] mb-1">
                Task History
            </h2>
            <div className="flex flex-col gap-5 mb-6 max-w-md mt-5">
                <input
                    type="text"
                    className="h-8 border bg-[#F7FAFC] border-gray-300 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
                <input
                    type="text"
                    className="h-8 border bg-[#F7FAFC] border-gray-300 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
                <input
                    type="text"
                    className="h-8 border bg-[#F7FAFC] border-gray-300 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
            </div>
            <div className="overflow-x-auto bg-[#F7FAFC] rounded-lg border border-gray-200">
                <table className="min-w-full">
                    <thead className="bg-[#F9FAFB] text-[#111827] text-sm">
                        <tr>
                            <th className="px-4 py-3 font-medium text-left">
                                Task
                            </th>
                            <th className="px-4 py-3 font-medium text-left">
                                Project
                            </th>
                            <th className="px-4 py-3 font-medium text-left">
                                Status
                            </th>
                            <th className="px-4 py-3 font-medium text-left">
                                Assigned By
                            </th>
                            <th className="px-4 py-3 font-medium text-left">
                                Completed At
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-[#111827]">
                        {tasks.map((task) => (
                            <tr
                                key={task.id}
                                className="border-t border-gray-200"
                            >
                                <td className="px-4 py-3 text-[14px] w-[145px] text-[#0D141C]">
                                    {task.task}
                                </td>
                                <td className="px-4 py-3">
                                    <span className="text-[#4A739C] cursor-pointer">
                                        {task.project}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-8 py-2 rounded-lg text-xs font-medium bg-[#E8EDF5]">
                                        {task.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="text-[#4A739C] hover:underline cursor-pointer">
                                        {task.assignedBy}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-[#4A739C]">
                                    {task.completedAt}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end gap-3 mt-4">
                <button
                    onClick={handleExportCSV}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-[#E8EDF5] text-[#111827] hover:bg-gray-300 transition cursor-pointer"
                >
                    Export CSV
                </button>
                <button
                    onClick={handleExportPDF}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-[#0D80F2] text-white hover:bg-[#1E4DB7] transition cursor-pointer"
                >
                    Export PDF
                </button>
            </div>
        </div>
    );
};

export default TaskHistory;
