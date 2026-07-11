import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold">
        Hostel Management System
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;