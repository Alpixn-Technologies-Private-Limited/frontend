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
      const res = await axios.get(`/api/clients/${id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token") ||
                sessionStorage.getItem("token")
                }`,
        },
        withCredentials: true,
    });
      console.log(res.data.data)
      if (res.data.success) {
        const client = res.data.data;
        setFormData({
          clientName: client.name || "N/A",
          email: client.email || "N/A",
          phone: client.phone || "N/A",
          website: client.website || "N/A",
          industry: client.industry || "N/A",
          status: client.status || "active",
          companyName: client.companyName || "N/A",
          employees: client.employees || "N/A",
          foundedYear: client.foundedYear || "N/A",
          address: client.address || "N/A",
          language: client.language || "N/A",
          currency: client.currency || "N/A",
          communicationChannel: client.communicationChannel || "N/A",
          preferenceFoundedYear: client.preferenceFoundedYear || "N/A",
          clientTier: client.clientTier || "N/A",
          preferredContactTime: client.preferredContactTime || "N/A",
          logo: client.logo || "",
        });
      }
    } catch (error) {
      toast.error("Failed to load client data.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/clients/${id}`, {
        name: formData.clientName || "N/A",
        email: formData.email || "N/A",
        phone: formData.phone || "N/A",
        website: formData.website || "N/A",
        industry: formData.industry || "N/A",
        status: formData.status || "active",
        companyName: formData.companyName || "N/A",
        employees: formData.employees || "N/A",
        foundedYear: formData.foundedYear || "N/A",
        address: formData.address || "N/A",
        language: formData.language || "N/A",
        currency: formData.currency || "N/A",
        communicationChannel: formData.communicationChannel || "N/A",
        preferenceFoundedYear: formData.preferenceFoundedYear || "N/A",
        clientTier: formData.clientTier || "N/A",
        preferredContactTime: formData.preferredContactTime || "N/A",
      },{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token") ||
                sessionStorage.getItem("token")
                }`,
        },
        withCredentials: true,
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
    <div className="max-w-screen p-6 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76] min-h-screen">
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
        <Link to={"/dashboard/pm"}> Dashboard </Link> &gt;
        <Link to={"/clients"} className="mx-1"> Clients </Link> &gt;{" "}
        <span className="text-blue-800 dark:text-blue-400"> Edit Client Details</span>
      </div>
      <div className="text-xl flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 mb-4">
        <FaEdit className="text-2xl" /> Edit Details
      </div>
      <div className="flex flex-col items-center mb-5 p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow bg-white dark:bg-[#1c144a]">
        <img
          src={formData.logo || "https://via.placeholder.com/100"}
          alt="Client Logo"
          className="rounded-full mb-2 w-20 h-20"
        />
        <p className="text-center text-xl font-semibold dark:text-white">
          {formData.clientName || "N/A"}
        </p>
        <button className="text-blue-600 dark:text-blue-400 text-sm mt-1 flex items-center gap-2 cursor-pointer">
          Edit
          <FaEdit />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Section title="Contact Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Client Name" name="clientName" value={formData.clientName || "N/A"} onChange={handleChange} />
            <InputField label="Email Address" name="email" type="email" value={formData.email || "N/A"} onChange={handleChange} />
            <InputField label="Phone Number" name="phone" value={formData.phone || "N/A"} onChange={handleChange} />
            <InputField label="Website URL" name="website" value={formData.website || "N/A"} onChange={handleChange} />
          </div>
        </Section>
        <Section title="Business Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Company Name" name="companyName" value={formData.companyName || "N/A"} onChange={handleChange} />
            <SelectField label="Industry" name="industry" options={["IT", "Healthcare", "Finance"]} value={formData.industry || "N/A"} onChange={handleChange} />
            <InputField label="Number of Employees" name="employees" type="number" value={formData.employees || "N/A"} onChange={handleChange} />
            <InputField label="Founded Year" name="foundedYear" value={formData.foundedYear || "N/A"} onChange={handleChange} />
            <InputField label="Address" name="address" value={formData.address || "N/A"} onChange={handleChange} fullWidth />
          </div>
        </Section>
        <Section title="Preferences">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField label="Language" name="language" options={["English", "Hindi"]} value={formData.language || "N/A"} onChange={handleChange} />
            <SelectField label="Currency" name="currency" options={["INR", "USD"]} value={formData.currency || "N/A"} onChange={handleChange} />
            <SelectField label="Communication Channel" name="communicationChannel" options={["Email", "Phone"]} value={formData.communicationChannel || "N/A"} onChange={handleChange} />
            <InputField label="Founded Year" name="preferenceFoundedYear" value={formData.preferenceFoundedYear || "N/A"} onChange={handleChange} />
          </div>
        </Section>
        <Section title="Custom Fields">
          <div className="w-full lg:w-[50%]">
            <SelectField label="Client Tier" name="clientTier" options={["Gold", "Silver", "Bronze"]} value={formData.clientTier || "N/A"} onChange={handleChange} />
            <InputField label="Preferred Contact Time" name="preferredContactTime" value={formData.preferredContactTime || "N/A"} onChange={handleChange} />
          </div>
        </Section>
        <div className="flex justify-end gap-4">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg transition">
            Save
          </button>
          <button type="button" onClick={() => navigate("/clients")} className="border border-blue-800 px-10 hover:bg-gray-100 dark:hover:bg-[#2b1a76] transition rounded-lg text-gray-700 dark:text-gray-200">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="border rounded-lg p-4 space-y-4 bg-white dark:bg-[#1c144a] border-gray-300 dark:border-gray-600 shadow">
    <h3 className="font-medium text-gray-700 dark:text-gray-200">{title}</h3>
    {children}
  </div>
);

const InputField = ({ label, name, value, onChange, type = "text", fullWidth = false }) => (
  <div className={`flex flex-col ${fullWidth ? "md:col-span-2" : ""}`}>
    <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="bg-gray-100 dark:bg-[#241f53] dark:text-gray-200 border border-gray-300 dark:border-gray-600 p-3 rounded"
    />
  </div>
);

const SelectField = ({ label, name, options, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <select
      name={name}
      id={name}
      value={value || "N/A"}
      onChange={onChange}
      className="bg-gray-100 dark:bg-[#241f53] dark:text-gray-200 border border-gray-300 dark:border-gray-600 p-3 rounded"
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
