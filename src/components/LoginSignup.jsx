import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Base_Url = "http://localhost:4000";
const LoginSignup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleMode = () => setIsSignup((prev) => !prev);
  const toggleAdmin = () => setIsAdmin((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const endpoint = isAdmin
        ? `${Base_Url}/admin/${isSignup ? "signup" : "login"}`
        : `${Base_Url}/user/${isSignup ? "signup" : "login"}`;

      const response = await axios.post(endpoint, formData, {
        withCredentials: true,
      });
      if(!response || response.data == "No admin Acc* this email ID"){
        throw new Error("No admin Acc* this email ID");
      }
      if(!isAdmin)  navigate("/form");
      if(isAdmin)  navigate("/admin/applications")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isSignup ? "Sign Up" : "Login"} {isAdmin && "(Admin)"}
        </h2>

        <div className="flex justify-between mb-4">
          <button
            onClick={toggleMode}
            className="text-sm text-blue-600 hover:underline"
          >
            Switch to {isSignup ? "Login" : "Sign Up"}
          </button>
          <button
            onClick={toggleAdmin}
            className="text-sm text-gray-600 hover:underline"
          >
            {isAdmin ? "I'm a User" : "I'm an Admin"}
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4"
        >
          {isSignup && (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
