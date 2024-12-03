import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const ScreensPage = () => {
  const [screens, setScreens] = useState([
    { id: 1, name: "Screen 1", type: "2D", capacity: 150 },
    { id: 2, name: "Screen 2", type: "IMAX 3D", capacity: 250 },
    { id: 3, name: "Screen 3", type: "4DX", capacity: 120 },
  ]);

  const handleDelete = (id) => {
    setScreens((prevScreens) => prevScreens.filter((screen) => screen.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen shadow-md">

      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Manage Screens</h1>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          <FaPlus className="mr-2" /> Add Screen
        </button>
      </div>


      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border-b">#</th>
              <th className="p-4 border-b">Screen Name</th>
              <th className="p-4 border-b">Type</th>
              <th className="p-4 border-b">Capacity</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {screens.length > 0 ? (
              screens.map((screen, index) => (
                <tr key={screen.id} className="hover:bg-gray-100 transition-colors">
                  <td className="p-4 border-b">{index + 1}</td>
                  <td className="p-4 border-b">{screen.name}</td>
                  <td className="p-4 border-b">{screen.type}</td>
                  <td className="p-4 border-b">{screen.capacity}</td>
                  <td className="p-4 border-b flex space-x-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center">
                      <FaEdit className="mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(screen.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500 border-b">
                  No screens available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScreensPage;
