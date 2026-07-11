// function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100">

//       <div className="bg-blue-600 text-white text-2xl font-bold p-5 shadow">
//         Hostel Management Dashboard
//       </div>

//       <div className="p-8">

//         <div className="grid grid-cols-4 gap-6">

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">
//               Total Hostels
//             </h2>

//             <p className="text-4xl font-bold mt-4">
//               0
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">
//               Total Rooms
//             </h2>

//             <p className="text-4xl font-bold mt-4">
//               0
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">
//               Available Beds
//             </h2>

//             <p className="text-4xl font-bold mt-4">
//               0
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">
//               Occupied Beds
//             </h2>

//             <p className="text-4xl font-bold mt-4">
//               0
//             </p>
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Dashboard;

import { useEffect, useState } from "react";
import API from "../../api/axios";

function Dashboard() {
  const [stats, setStats] = useState({
    totalHostels: 1,
    totalRooms: 4,
    totalBeds: 16,
    occupiedBeds: 8,
    availableBeds: 8,
  });

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    try {
      const res = await API.get("/dashboard");

      setStats(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Hostels</h2>
          <p className="text-4xl font-bold">{stats.totalHostels}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Rooms</h2>
          <p className="text-4xl font-bold">{stats.totalRooms}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Beds</h2>
          <p className="text-4xl font-bold">{stats.totalBeds}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Occupied Beds</h2>
          <p className="text-4xl font-bold">{stats.occupiedBeds}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Available Beds</h2>
          <p className="text-4xl font-bold">{stats.availableBeds}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;