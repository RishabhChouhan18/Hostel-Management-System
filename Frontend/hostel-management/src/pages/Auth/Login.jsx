import { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white w-105 rounded-xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Hostel Management
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Admin Login
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />

          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;