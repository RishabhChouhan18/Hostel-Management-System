// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "../pages/Auth/Login";
// import Dashboard from "../pages/Dashboard/Dashboard";

// function AppRoutes() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         <Route path="/" element={<Login />} />

//         <Route
//           path="/dashboard"
//           element={<Dashboard />}
//         />
        

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import HostelList from "../pages/Hostel/HostelList";
import RoomList from "../pages/Room/RoomList";
import BedList from "../pages/Bed/BedList";

import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hostels" element={<HostelList />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/beds" element={<BedList />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;