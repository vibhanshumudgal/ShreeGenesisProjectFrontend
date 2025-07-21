import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Base_Url="https://shreegenesisprojectbackend.onrender.com"

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${Base_Url}/logout`, { withCredentials: true });

      console.log("Logged out!");
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      {/* Left side */}
      <div className="text-2xl font-bold tracking-wide">Connect</div>

      {/* Right side */}
      <div className="space-x-4 text-sm">
        <Link to="/" className="hover:underline">
          Login
        </Link>
        <button
          onClick={handleLogout}
          className="hover:underline focus:outline-none"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
