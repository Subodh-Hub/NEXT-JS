import React from "react";

const Account = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bg-white p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Account Setting
        </h1>

        <section className="mb-8">
          <h2 className="text-xl  text-gray-700 mb-4">Profile Information</h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="text"
                defaultValue="john.doe@gmail.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-seminold text-gray-700 mb-4">Security</h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Please enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Action Settings */}
        <div className="flex justify-end space-x-4 mt-7">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
