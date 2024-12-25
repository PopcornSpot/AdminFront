import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SidebarComponent";
import axios from "axios";
import { toast } from "react-toastify";

const SeatPage = () => {
  const [allScreens, setAllScreens] = useState([]);
  const authToken = localStorage.getItem("token");
  const screens = [
    { title: "Screen 1", totalSeat: 150, availableSeat: 100, bookedSeat: 50 },
    { title: "Screen 2", totalSeat: 200, availableSeat: 150, bookedSeat: 50 },
    { title: "Screen 3", totalSeat: 250, availableSeat: 200, bookedSeat: 50 },
  ];

  const fetchScreen = async () => {
    try {
      await axios
        .get("http://localhost:7000/screen/getallscreen",
           {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          console.log(res.data);
          toast.error(res.data.Error) 
          setAllScreens(res.data.allScreens);
        })
        .catch((err) =>{
          toast.error(err.response.data.Error)
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  
    useEffect(() => {
      fetchScreen();
    }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-56 fixed h-full">
        <SidebarComponent/>
      </div>

      <div className="flex-1 ml-56 max-md:ml-0 max-md:mt-16 overflow-y-auto">
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-200 p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-200">Seat Availability</h1>
      </div>


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mt-10">
        {allScreens.map((screen) => (
          <div
            key={screen._id}
            className="bg-gray-700 shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Screen {screen.screenNo}</h2>
            <p className="text-gray-300 text-lg mb-2">
              <span className="font-semibold">Total Seats:</span> {screen.totalSeats}
            </p>
            <p className="text-green-600 text-lg mb-2">
              <span className="font-semibold">Available Seats:</span> {screen.firstClassSeats}
            </p>
            <p className="text-red-600 text-lg">
              <span className="font-semibold">Booked Seats:</span> {screen.secondClassSeats}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default SeatPage;
