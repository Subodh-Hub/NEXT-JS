import React from "react";

const Analytics = () => {
  const metrics = [
    {
      title: "Tasks Completed",
      value: 34,
      isPositive: true,
      change: "12%",
    },
    {
      title: "Pending Tasks",
      value: 8,
      isPositive: false,
      change: "-5%",
    },
    {
      title: "New Users",
      value: 15,
      isPositive: true,
      change: "25%",
    },
    {
      title: "Bug Reports",
      value: 3,
      isPositive: true,
      change: "-40%",
    },
    {
      title: "API Uptime",
      value: "99.8%",
      isPositive: true,
      change: "0.5%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-blod text-shadow-gray-800 mb-8">
          Analytics Dashborad
        </h1>

        {/* Overview metrics section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {metric.title}
                </h3>
                <p className="text-lg text-gray-600 mt-2">{metric.value}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm mt-2 ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder chart */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>

          <div className="bg-gray-100 rounded-lg h-72 mb-8">
            Charts Placeholder
          </div>
          <div className="bg-gray-100 rounded-lg h-72 mb-8">
            Charts Placeholder
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-shadow-gray-700">
                  User Registration
                </h3>
                <p className="text-sm text-gray-600">
                  New user signed up on 2025-09-03
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">+10 Users</p>
              </div>
            </li>

            <li className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-shadow-gray-700">
                  Website Traffic Surge
                </h3>
                <p className="text-sm text-gray-600">
                 Traffic increased by 2025-09-03
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">$15,000</p>
              </div>
            </li>

            
            <li className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-shadow-gray-700">
                  Sales Increase
                </h3>
                <p className="text-sm text-gray-600">
                  Sales grew by 12% on 2025-09-03
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">$15,000</p>
              </div>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
