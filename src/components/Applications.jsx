import axios from "axios";
import React, { useEffect, useState } from "react";
const Base_Url = "http://localhost:4000";
import ApplicationCard from "./ApplicationCard";

const Applications = () => {
  const [data, setData] = useState([]);

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
    console.log("Accepted ID:", id);
    console.log(status);
    // You can implement actual logic here
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
        data.map((ele) => (
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
