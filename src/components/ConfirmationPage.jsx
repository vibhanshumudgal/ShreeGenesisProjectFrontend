import React from "react";
import { CheckCircleIcon, MailIcon } from "lucide-react";

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-3xl shadow-2xl text-center space-y-6">
        <CheckCircleIcon className="mx-auto text-green-600 w-16 h-16" />

        <h1 className="text-3xl font-bold text-gray-800">
          Your Form Has Been Submitted! ✅
        </h1>

        <p className="text-gray-600 text-lg">
          Thank you for submitting your application. Our admin team will review
          your form soon.
        </p>

        <div className="flex items-center justify-center gap-2 text-blue-600">
          <MailIcon className="w-5 h-5" />
          <span>Check your Gmail for further instructions.</span>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg text-gray-700 text-sm">
          <p>Until then, relax and take a nap 😴</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
