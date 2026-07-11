import { useEffect, useState } from "react";
import API from "../../api/axios";

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

const handleDeleteRoom = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this room?"
  );

  if (!confirmDelete) return;

  setRooms((prevRooms) =>
    prevRooms.filter((room) => room._id !== id)
  );
};
const handleAddRoom = () => {
  const newRoom = {
    _id: Date.now(),
    roomNumber: `${100 + rooms.length + 1}`,
    floor: 1,
    roomType: "Four Sharing",
    capacity: 4,
    hostel: {
      hostelName: "Boys Hostel",
    },
  };

  setRooms([...rooms, newRoom]);
};



  const fetchRooms = async () => {
    try {
      const res = await API.get("/rooms");
      setRooms(res.data.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Rooms
        </h1>

        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          + Add Room
        </button> */}

      <button
  onClick={handleAddRoom}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
>
  + Add Room
</button>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {rooms.map((room) => (

          <div
            key={room._id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <h2 className="text-2xl font-bold text-blue-600">
              🚪 Room {room.roomNumber}
            </h2>

            <p className="mt-3 text-gray-600">
              🏠 Hostel :
              {" "}
              {room.hostel?.hostelName}
            </p>

            <p className="mt-2 text-gray-600">
              🏢 Floor : {room.floor}
            </p>

            <p className="mt-2 text-gray-600">
              🛏 Type : {room.roomType}
            </p>

            <p className="mt-2 text-gray-600">
              👥 Capacity : {room.capacity}
            </p>

            <p className="mt-2 text-green-600 font-semibold">
              🟢 Occupied Beds :
              {" "}
              {room.occupiedBeds}/{room.capacity}
            </p>

            <div className="flex justify-between mt-6">

              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

             <button
  onClick={() => handleDeleteRoom(room._id)}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Delete
</button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RoomList;