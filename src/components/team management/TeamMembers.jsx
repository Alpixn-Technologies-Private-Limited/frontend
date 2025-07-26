import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

// Sample team members data
const teamMembersData = [
    {
        name: "Chloe Bennett",
        role: "Product Manager",
        skills: "Product Manager",
        performance: 75,
        rating: 4.8,
        status: "Available",
    },
    {
        name: "Owen Carter",
        role: "Software Engineer",
        skills: "Software Engineer",
        performance: 50,
        rating: 4.5,
        status: "Busy",
    },
    {
        name: "Isabella Hayes",
        role: "Data Scientist",
        skills: "Data Scientist",
        performance: 90,
        rating: 4.9,
        status: "Away",
    },
    {
        name: "Noah Thompson",
        role: "Marketing Specialist",
        skills: "Marketing Specialist",
        performance: 60,
        rating: 4.7,
        status: "Available",
    },
    {
        name: "Lily Evans",
        role: "Customer Support",
        skills: "Customer Support",
        performance: 40,
        rating: 4.6,
        status: "Busy",
    },
];

// Extract unique values for dropdowns
const uniqueValues = (arr, key) => [...new Set(arr.map((item) => item[key]))];

const TeamMembers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("Role");
    const [skillsFilter, setSkillsFilter] = useState("Skills");
    const [statusFilter, setStatusFilter] = useState("Status");

    const roles = uniqueValues(teamMembersData, "role");
    const skills = uniqueValues(teamMembersData, "skills");
    const statuses = uniqueValues(teamMembersData, "status");

    const filteredMembers = teamMembersData.filter((member) => {
        const matchesSearch =
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.skills.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesRole = roleFilter === "Role" || member.role === roleFilter;
        const matchesSkills =
            skillsFilter === "Skills" || member.skills === skillsFilter;
        const matchesStatus =
            statusFilter === "Status" || member.status === statusFilter;

        return matchesSearch && matchesRole && matchesSkills && matchesStatus;
    });

    return (
        <div className="min-h-screen flex items-start justify-center bg-gray-50 m-5">
            <div className="w-full px-15 bg-white p-8 rounded-xl shadow">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Team Members
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Manage your team members and their roles
                    </p>
                </div>
                <div className="my-6 flex items-center border border-gray-300 rounded-2xl bg-[#F0F2F5]">
                    <div className="w-12 px-3 text-2xl text-gray-600 flex items-center justify-center">
                        <CiSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Search team members"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 h-10 bg-[#F0F2F5] outline-none rounded-r-2xl px-2"
                    />
                </div>
                <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="w-20 h-8 px-2 py-1 border border-gray-300 rounded-2xl bg-[#F0F2F5] outline-0"
                    >
                        <option value="Role" disabled hidden>
                            Role
                        </option>
                        <option value="Role">Role</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>

                    <select
                        value={skillsFilter}
                        onChange={(e) => setSkillsFilter(e.target.value)}
                        className="px-2 w-20 py-1 h-8 border border-gray-300 rounded-2xl bg-[#F0F2F5] focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="Skills" disabled hidden>
                            Skills
                        </option>
                        <option value="Skills">Skills</option>
                        {skills.map((skill) => (
                            <option key={skill} value={skill}>
                                {skill}
                            </option>
                        ))}
                    </select>

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-2 py-1 h-8 border border-gray-300 rounded-2xl bg-[#F0F2F5] focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="Status" disabled hidden>
                            Status
                        </option>
                        <option value="Status">Status</option>
                        {statuses.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button
                        type="button"
                        class="text-white hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer mb-5  "
                    >
                        Add Team Member
                    </button>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left p-4 text-gray-600 text-sm">
                                    Member
                                </th>
                                <th className="text-left p-4 text-gray-600 text-sm">
                                    Role
                                </th>
                                <th className="text-left p-4 text-gray-600 text-sm">
                                    Skills
                                </th>
                                <th className="text-left p-4 text-gray-600 text-sm">
                                    Workload
                                </th>
                                <th className="text-left p-4 text-gray-600 text-sm">
                                    Performance
                                </th>
                                <th className="text-left p-4 text-gray-600 text-sm">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMembers.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="text-center p-6 text-gray-500"
                                    >
                                        No team members found.
                                    </td>
                                </tr>
                            ) : (
                                filteredMembers.map((member, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="p-4 flex items-center gap-3">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://cdn-icons-png.freepik.com/512/6997/6997668.png?ga=GA1.1.530808846.1751615351"
                                            />
                                            <Link
                                                to={
                                                    "/team-management/memberProfile"
                                                }
                                            >
                                                {" "}
                                                <span className="font-semibold text-gray-800">
                                                    {member.name}
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="p-4 text-gray-700">
                                            {member.role}
                                        </td>
                                        <td className="p-4 text-blue-600">
                                            {member.skills}
                                        </td>
                                        <td className="p-4">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-500 h-2 rounded-full"
                                                    style={{
                                                        width: `${member.performance}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-700">
                                            {member.performance}
                                        </td>
                                        <td className="p-4 flex items-center gap-2">
                                            <span className="py-1 bg-gray-100 w-fit  rounded-2xl px-6 text-sm text-gray-700">
                                                {member.rating}
                                            </span>
                                            <span>{member.status}</span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
