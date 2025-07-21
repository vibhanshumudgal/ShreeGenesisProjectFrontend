import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Base_Url="https://shreegenesisprojectbackend.onrender.com"

const CollegeForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    father_name: "",
    mother_name: "",
    college_name: "",
    phone_number: "",
    address: "",
    application_password: "",
    final_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Base_Url}/submitform`, formData, {
        withCredentials: true,
      });
      if(response.data==="User Form Submit"){
        navigate("/confirmationPage");
        alert("Form submited Succesfully")
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        College Admission Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Branch */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Branch
          </label>
          <input
            type="text"
            name="branch"
            required
            value={formData.branch}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Father's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Father's Name
          </label>
          <input
            type="text"
            name="father_name"
            required
            value={formData.father_name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mother's Name
          </label>
          <input
            type="text"
            name="mother_name"
            required
            value={formData.mother_name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* College Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            College Name
          </label>
          <input
            type="text"
            name="college_name"
            required
            value={formData.college_name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="number"
            name="phone_number"
            required
            value={formData.phone_number}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default CollegeForm;
