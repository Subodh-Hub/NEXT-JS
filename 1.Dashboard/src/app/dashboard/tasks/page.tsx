import React from "react";

const Task = () => {
  const tasks = [
    {
      id: 1,
      title: "Design Homepage",
      description: "Create a responsive homepage layout using Tailwind CSS.",
      status: "In Progress",
      dueDate: "2025-06-25",
    },
    {
      id: 2,
      title: "Implement Authentication",
      description:
        "Add JWT-based login and registration features in the backend.",
      status: "Pending",
      dueDate: "2025-06-28",
    },
    {
      id: 3,
      title: "Fix Mobile Slider Bug",
      description:
        "Resolve swipe gesture issues on the image slider in mobile view.",
      status: "Completed",
      dueDate: "2025-06-20",
    },
    {
      id: 4,
      title: "Write API Documentation",
      description: "Document all REST API endpoints with examples.",
      status: "Pending",
      dueDate: "2025-06-30",
    },
    {
      id: 5,
      title: "Deploy on Render",
      description:
        "Deploy the full-stack MERN app to Render with environment variables configured.",
      status: "In Progress",
      dueDate: "2025-06-24",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>

        {/* Tasks List Section */}
        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4"
              style={{
                borderColor:
                  task.status === "Completed"
                    ? "green"
                    : task.status === "In Progress"
                    ? "yellow"
                    : "red",
              }}
            >
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Due Date: {task.dueDate}
                </p>
              </div>

              <section className="flex space-x-4">
                <span
                  className={`px-4 py-3 text-center text-sm  font-semibold rounded-full ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {task.status}
                </span>

                {/* Buttons */}
                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Edit
                </button>

                
                <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Delete
                </button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Task;
