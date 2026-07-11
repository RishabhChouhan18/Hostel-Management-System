import { useEffect, useState } from "react";
import API from "../../api/axios";

function HostelList() {
//   const [hostels, setHostels] = useState([]);
const [hostels, setHostels] = useState([
  {
    _id: "1",
    hostelName: "Boys Hostel",
    address: "Indore",
    description: "Main Boys Hostel",
  },
]);

const handleAddHostel = () => {
  const newHostel = {
    _id: Date.now(),
    hostelName: `New Hostel ${hostels.length + 1}`,
    address: "Indore",
    description: "Newly Created Hostel",
  };

  setHostels([...hostels, newHostel]);
};


  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const res = await API.get("/hostels");
      setHostels(res.data.hostels);
    } catch (error) {
      console.log(error);
    }
  };

const handleDelete = (id) => {
  setHostels((prev) => prev.filter((hostel) => hostel._id !== id));
};
  
//   const handleDelete = async (id) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this hostel?"
//   );

//   if (!confirmDelete) return;

//   try {
//     const res = await API.delete(`/hostels/${id}`);

//     console.log(res.data);

//     fetchHostels();

//     alert("Hostel Deleted Successfully");
//   } catch (error) {
//     console.log(error);
//     console.log(error.response);

//     alert(error.response?.data?.message || "Failed to delete hostel");
//   }
// };




  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Hostels</h1>

        {/* <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          + Add Hostel
        </button> */}
        <button
  onClick={handleAddHostel}
  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
>
  + Add Hostel
</button>
      </div>

      {/* If no hostel exists */}
      {hostels.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Hostel Found
          </h2>

          <p className="text-gray-500 mt-2">
            Click the button above to create your first hostel.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostels.map((hostel) => (
            <div
              key={hostel._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-blue-600">
                🏠 {hostel.hostelName}
              </h2>

              <p className="mt-4 text-gray-600">
                📍 {hostel.address}
              </p>

              <p className="mt-2 text-gray-600">
                📝 {hostel.description}
              </p>

              <div className="flex justify-between mt-6">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>

               <button
  onClick={() => handleDelete(hostel._id)}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Delete
</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HostelList;