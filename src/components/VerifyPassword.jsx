import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Base_Url= import.meta.env.VITE_BASE_URL;
const VerifyPassword = () => {
  const [params] = useSearchParams();
  const token = params.get('token');

  const [tempPassword, setTempPassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) return setMessage("Passwords don't match");

    try {
      const res = await axios.post(`${Base_Url}/set-password`, {
        token,
        tempPassword,
        newPassword: newPass,
      });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Set Your Password</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Temporary Password</label>
          <input
            type="password"
            value={tempPassword}
            onChange={(e) => setTempPassword(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">New Password</label>
          <input
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Confirm New Password</label>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Set Password
        </button>
      </form>

      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
};

export default VerifyPassword;
