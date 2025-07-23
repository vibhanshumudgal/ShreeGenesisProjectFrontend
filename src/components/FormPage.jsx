import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Base_Url= import.meta.env.VITE_BASE_URL;
const CollegeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mother_name: "",
    father_name: "",
    college_name: "",
    branch: "",
    phone_number: "",
    address: "",
  });

  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!photo) {
    alert("Please upload a photo.");
    return;
  }

  // ✅ Proper FormData object
  const form = new FormData();

  // Append all fields from formData
  for (const key in formData) {
    form.append(key, formData[key]);
  }

  // Append photo file
  form.append("photo", photo);

  try {
    console.log("Submitting FormData:", formData);

    const response = await axios.post(`${Base_Url}/submitform`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    if (response.data === "User Form Submitted with Photo") {
      alert("Form submitted successfully!");
      navigate("/confirmationPage");
    } else {
      alert(response.data);
    }
  } catch (err) {
    console.error("Form submission error:", err);
    alert("Something went wrong. Try again.");
  }
};


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">College Admission Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        {[
          { label: "Name", name: "name" },
          { label: "Email", name: "email" },
          { label: "Father's Name", name: "father_name" },
          { label: "Mother's Name", name: "mother_name" },
          { label: "College Name", name: "college_name" },
          { label: "Branch", name: "branch" },
          { label: "Phone Number", name: "phone_number", type: "number" },
          { label: "Address", name: "address" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              required
              value={formData[name]}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Passport Size Photo
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            required
            onChange={handlePhotoChange}
            className="mt-1 w-full"
          />
        </div>

        {photo && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Preview:</p>
            <img
              src={URL.createObjectURL(photo)}
              alt="Preview"
              className="mt-1 w-32 h-32 object-cover border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default CollegeForm;
