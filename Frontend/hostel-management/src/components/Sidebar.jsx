import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed">

      <div className="text-2xl font-bold text-center py-6 border-b border-slate-700">
        HMS Admin
      </div>

      <div className="flex flex-col mt-6">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-6 py-4 hover:bg-slate-700 ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/hostels"
          className={({ isActive }) =>
            `px-6 py-4 hover:bg-slate-700 ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          Hostels
        </NavLink>

        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            `px-6 py-4 hover:bg-slate-700 ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          Rooms
        </NavLink>

        <NavLink
          to="/beds"
          className={({ isActive }) =>
            `px-6 py-4 hover:bg-slate-700 ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          Beds
        </NavLink>

      </div>

    </div>
  );
}

export default Sidebar;