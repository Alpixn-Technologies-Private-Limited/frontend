import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { toast } from "react-hot-toast";

const ClientEditForm = () => {
    const [formData, setFormData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const fetchClient = async () => {
        try {
            const res = await axios.get(`/api/clients/${id}`);
            if (res.data.success) {
                const client = res.data.data.client;
                setFormData(client);
            }
        } catch (error) {
            toast.error("Failed to load client data.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/clients/${id}`, {
                name: formData.clientName,
                email: formData.email,
                phone: formData.phone,
                website: formData.website,
                industry: formData.industry,
                status: formData.status || "active", // default to active if not set
            });
            if (res.data.success) {
                toast.success("Client updated successfully!");
                navigate(`/clients/${id}`);
            }
        } catch (error) {
            toast.error("Failed to update client.");
        }
    };

    useEffect(() => {
        fetchClient();
    }, [id]);

    return (
        <div className="max-w-screen p-6">
            <div className="flex items-center text-sm text-gray-600 mb-4">
                <Link to={"/dashboard/pm"}> Dashboard </Link> &gt;
                <Link to={"/clients"}> Clients </Link> &gt;{" "}
                <span className="text-blue-800"> Edit Client Details</span>
            </div>
            <div className="text-xl flex items-center gap-2 font-semibold text-blue-600 mb-4">
                <FaEdit className="text-2xl" /> Edit Details
            </div>
            <div className="flex flex-col items-center mb-5 p-6 border border-gray-300 rounded-lg shadow bg-white">
                <img
                    src={formData.logo || "https://via.placeholder.com/100"}
                    alt="Client Logo"
                    className="rounded-full mb-2 w-20 h-20"
                />
                <p className="text-center text-xl font-semibold">
                    {formData.clientName || "Client Name"}
                </p>
                <button className="text-blue-600 text-sm mt-1 flex items-center gap-2 cursor-pointer">
                    Edit
                    <FaEdit />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Details */}
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                            label="Client Name"
                            name="clientName"
                            value={formData.clientName || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Phone Number"
                            name="phone"
                            value={formData.phone || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Website URL"
                            name="website"
                            value={formData.website || ""}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Business Info */}
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Business Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                            label="Company Name"
                            name="companyName"
                            value={formData.companyName || ""}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Industry"
                            name="industry"
                            options={["IT", "Healthcare", "Finance"]}
                            value={formData.industry || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Number of Employees"
                            name="employees"
                            type="number"
                            value={formData.employees || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Founded Year"
                            name="foundedYear"
                            value={formData.foundedYear || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Address"
                            name="address"
                            value={formData.address || ""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                </div>

                {/* Preferences */}
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SelectField
                            label="Language"
                            name="language"
                            options={["English", "Hindi"]}
                            value={formData.language || ""}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Currency"
                            name="currency"
                            options={["INR", "USD"]}
                            value={formData.currency || ""}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Communication Channel"
                            name="communicationChannel"
                            options={["Email", "Phone"]}
                            value={formData.communicationChannel || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Founded Year"
                            name="preferenceFoundedYear"
                            value={formData.preferenceFoundedYear || ""}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Custom Fields */}
                <div className="border rounded-lg p-4 space-y-4 bg-white border-gray-300 shadow">
                    <h3 className="font-medium">Custom Fields</h3>
                    <div className="w-full lg:w-[50%]">
                        <SelectField
                            label="Client Tier"
                            name="clientTier"
                            options={["Gold", "Silver", "Bronze"]}
                            value={formData.clientTier || ""}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Preferred Contact Time"
                            name="preferredContactTime"
                            value={formData.preferredContactTime || ""}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg transition"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/clients")}
                        className="border border-blue-800 px-10 hover:bg-gray-100 transition rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

const InputField = ({ label, name, value, onChange, type = "text", fullWidth = false }) => (
    <div className={`flex flex-col ${fullWidth ? "md:col-span-2" : ""}`}>
        <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className="bg-gray-100 border border-gray-300 p-3 rounded"
        />
    </div>
);

const SelectField = ({ label, name, options, value, onChange }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className="bg-gray-100 border border-gray-300 p-3 rounded"
        >
            <option value="">Select {label}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    </div>
);

export default ClientEditForm;
