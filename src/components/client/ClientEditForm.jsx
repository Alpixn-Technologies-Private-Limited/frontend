import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
const ClientEditForm = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className="max-w-screen p-6">
            <div className="flex items-center text-sm text-gray-600 mb-4">
                Dashboard&gt;Clients&gt;Add/Edit Clients Details
            </div>
            <div className="text-xl flex items-center gap-2 font-semibold text-blue-600 mb-4">
                <FaEdit className="text-2xl" /> Add/Edit Details
            </div>
            <div className="flex flex-col items-center mb-5 p-6 border border-gray-300 rounded-lg shadow bg-white">
                <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTymudOtuSRp49R_iW-5XtMrDKAPes61aSK2vgqxkYA2ILZ7WmI"
                    alt="Client Logo"
                    className="rounded-full mb-2 w-20 h-20"
                />
                <p className="text-center text-xl font-semibold">
                    Green Tech Solution Pvt. Ltd.
                </p>
                <button className="text-blue-600 text-sm mt-1 flex items-center gap-2 cursor-pointer">
                    Edit
                    <FaEdit />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label
                                htmlFor="clientName"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Client Name
                            </label>
                            <input
                                type="text"
                                name="clientName"
                                id="clientName"
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded bg-gray-100"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                className="border p-3 rounded border-gray-300 bg-gray-100"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="phone"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                onChange={handleChange}
                                className="border p-3 rounded border-gray-300 bg-gray-100"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="website"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Website URL
                            </label>
                            <input
                                type="text"
                                name="website"
                                id="website"
                                onChange={handleChange}
                                className="border p-3 rounded border-gray-300 bg-gray-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Business Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Industry
                            </label>
                            <select
                                name="industry"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            >
                                <option value="">Select Industry</option>
                                <option>IT</option>
                                <option>Healthcare</option>
                                <option>Finance</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Number of Employees
                            </label>
                            <input
                                type="number"
                                name="employees"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Founded Year
                            </label>
                            <input
                                type="text"
                                name="foundedYear"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <label className="text-sm font-medium mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            />
                        </div>
                    </div>
                </div>
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Language
                            </label>
                            <select
                                name="language"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            >
                                <option value="">Select Language</option>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Currency
                            </label>
                            <select
                                name="currency"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            >
                                <option value="">Select Currency</option>
                                <option>INR</option>
                                <option>USD</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Communication Channel
                            </label>
                            <select
                                name="communicationChannel"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            >
                                <option value="">
                                    Select Communication Channel
                                </option>
                                <option>Email</option>
                                <option>Phone</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Founded Year
                            </label>
                            <input
                                type="text"
                                name="preferenceFoundedYear"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded"
                            />
                        </div>
                    </div>
                </div>
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Custom Fields</h3>
                    <div className="w-full lg:w-[50%]">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Client Tier
                            </label>
                            <select
                                name="clientTier"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded mb-4"
                            >
                                <option value="">Select Client Tier</option>
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Bronze</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">
                                Preferred Contact Time
                            </label>
                            <input
                                type="text"
                                name="preferredContactTime"
                                onChange={handleChange}
                                className="bg-gray-100 border border-gray-300 p-3 rounded mb-4"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <button
                                type="button"
                                className="w-full border border-gray-300 p-3 rounded text-blue-600 hover:bg-gray-50 transition"
                            >
                                + Add Custom Fields
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg transition"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="border border-blue-800 px-10  hover:bg-gray-100 transition rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClientEditForm;
