// ApplicationCard.jsx
import React from "react";

const ApplicationCard = ({ data, clickHandler }) => {
  const Base_Url = import.meta.env.VITE_BASE_URL;

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-3xl p-8 mb-8 border border-gray-200 w-full max-w-3xl mx-auto transition hover:scale-[1.02] duration-300 ease-in-out">
      <div className="mb-6 flex items-center gap-6">
        {data.photo && (
          <img
            src={`${Base_Url}/${data.photo}`}
            alt="User"
            className="w-32 h-32 object-cover rounded-xl border border-gray-300 shadow"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-sm text-gray-500 italic">
            Application ID: {data._id}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <p>
          <span className="font-semibold">Email:</span> {data.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {data.phone_number}
        </p>
        <p>
          <span className="font-semibold">Branch:</span> {data.branch}
        </p>
        <p>
          <span className="font-semibold">College:</span> {data.college_name}
        </p>
        <p>
          <span className="font-semibold">Father:</span> {data.father_name}
        </p>
        <p>
          <span className="font-semibold">Mother:</span> {data.mother_name}
        </p>
        <p className="col-span-2">
          <span className="font-semibold">Address:</span> {data.address}
        </p>
        <p className="col-span-2">
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              data.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : data.status === "accepted"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {data.status}
          </span>
        </p>
      </div>

      <div className="flex justify-end mt-6 gap-4">
        <button
          onClick={() => clickHandler(data._id, "accepted")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Accept
        </button>
        <button
          onClick={() => clickHandler(data._id, "rejected")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
