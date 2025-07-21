import axios from "axios";
import React, { useEffect, useState } from "react";
import ApplicationCard from "./ApplicationCard";

const Base_Url="https://shreegenesisprojectbackend.onrender.com"

const Applications = () => {
  const [data, setData] = useState([]);
  const [verified, setVerified] = useState(new Set());

  const fetchData = async () => {
    try {
      const res = await axios.get(`${Base_Url}/pendingapplications`, {
        withCredentials: true,
      });
      setData(res.data);
    } catch (err) {
      console.log("Fetching error:", err);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      const response = await axios.post(
        `${Base_Url}/applications/${id}/status`,
        { status },
        { withCredentials: true }
      );
      console.log(response);
      if (response.data === "Email send") {
        alert(`${status} Email has been sent  to student`);
        // Update verified Set
        setVerified((prev) => new Set([...prev, id]));
      } else {
        alert("Please try again later");
      }
    } catch (err) {
      console.log("Status update error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Pending Applications
      </h1>
      {data.length > 0 ? (
        data
          .filter((ele) => !verified.has(ele._id)) 
          .map((ele) => (
            <ApplicationCard
              key={ele._id}
              data={ele}
              clickHandler={handleStatus}
            />
          ))
      ) : (
        <p className="text-center text-gray-600">No pending applications.</p>
      )}
    </div>
  );
};

export default Applications;

