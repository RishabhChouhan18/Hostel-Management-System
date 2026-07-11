import { useEffect, useState } from "react";
import API from "../../api/axios";

function BedList() {
  const [beds, setBeds] = useState([]);
const [count, setCount] = useState(16);
  useEffect(() => {
    fetchBeds();
  }, []);

  const fetchBeds = async () => {
    try {
      const res = await API.get("/beds");
      setBeds(res.data.beds);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
  Current Beds : {count}
</h1>

        <button
  onClick={() => setCount(count + 1)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
>
  + Add Bed
</button>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {beds.map((bed) => (

          <div
            key={bed._id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <h2 className="text-2xl font-bold text-blue-600">
              🛏 {bed.bedNumber}
            </h2>

            <p className="mt-3 text-gray-600">
              🏠 Hostel :
              {" "}
              {bed.room?.hostel?.hostelName}
            </p>

            <p className="mt-2 text-gray-600">
              🚪 Room :
              {" "}
              {bed.room?.roomNumber}
            </p>

            <p className="mt-2">
              Status :
              {" "}
              <span
                className={`font-semibold ${
                  bed.status === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {bed.status}
              </span>
            </p>

            <div className="flex justify-between mt-6">

              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default BedList;