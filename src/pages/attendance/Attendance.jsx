import { useState, useEffect } from "react";
import { FaSpinner, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

function Attendance() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder to fetch dummy users to simulate members
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        const statuses = ["Present", "Present", "Late", "Present", "Absent"];

        // Mock attendance data based on users
        const mockAttendance = data.map((user, index) => {
          const status = statuses[index % statuses.length];
          
          let checkIn = "-";
          let checkOut = "-";

          if (status === "Present" || status === "Late") {
            const inHour = status === "Present" ? Math.floor(Math.random() * 3) + 6 : Math.floor(Math.random() * 2) + 9; // 6-8 AM for Present, 9-10 AM for Late
            const inMin = Math.floor(Math.random() * 60).toString().padStart(2, '0');
            checkIn = `${inHour}:${inMin} AM`;

            const outHour = inHour + Math.floor(Math.random() * 2) + 1; // 1-2 hours later
            const outMin = Math.floor(Math.random() * 60).toString().padStart(2, '0');
            checkOut = outHour >= 12 ? `${outHour === 12 ? 12 : outHour - 12}:${outMin} PM` : `${outHour}:${outMin} AM`;
          }

          return {
            id: user.id,
            memberName: user.name,
            date: currentDate,
            checkIn: checkIn,
            checkOut: checkOut,
            status: status,
          };
        });
        
        setAttendanceRecords(mockAttendance);
      } catch (error) {
        console.error("Failed to fetch attendance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [currentDate]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Present":
        return (
          <span className="inline-flex items-center bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs font-semibold">
            <FaCheckCircle className="mr-1" /> Present
          </span>
        );
      case "Absent":
        return (
          <span className="inline-flex items-center bg-red-100 text-red-700 py-1 px-3 rounded-full text-xs font-semibold">
            <FaTimesCircle className="mr-1" /> Absent
          </span>
        );
      case "Late":
        return (
          <span className="inline-flex items-center bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-xs font-semibold">
            <FaClock className="mr-1" /> Late
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Attendance
        </h1>
        <div className="flex items-center space-x-2">
          <label className="text-gray-600 font-medium">Date:</label>
          <input 
            type="date" 
            className="border border-gray-300 rounded-lg py-2 px-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            defaultValue={new Date().toISOString().split('T')[0]}
            onChange={(e) => setCurrentDate(new Date(e.target.value).toLocaleDateString())}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-gray-500 font-medium mb-1">Total Members</h3>
          <p className="text-3xl font-bold text-gray-800">{attendanceRecords.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <h3 className="text-gray-500 font-medium mb-1">Present Today</h3>
          <p className="text-3xl font-bold text-green-600">
            {attendanceRecords.filter(r => r.status === 'Present' || r.status === 'Late').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
          <h3 className="text-gray-500 font-medium mb-1">Absent Today</h3>
          <p className="text-3xl font-bold text-red-600">
            {attendanceRecords.filter(r => r.status === 'Absent').length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 font-semibold">Member Name</th>
                  <th className="py-3 px-6 font-semibold">Date</th>
                  <th className="py-3 px-6 font-semibold">Check-In</th>
                  <th className="py-3 px-6 font-semibold">Check-Out</th>
                  <th className="py-3 px-6 font-semibold text-center">Status</th>
                  <th className="py-3 px-6 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {attendanceRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-3 px-6 font-medium text-gray-800">
                      {record.memberName}
                    </td>
                    <td className="py-3 px-6">
                      {record.date}
                    </td>
                    <td className="py-3 px-6">
                      <span className={`font-medium ${record.checkIn !== '-' ? 'text-gray-700' : 'text-gray-400'}`}>
                        {record.checkIn}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <span className={`font-medium ${record.checkOut !== '-' ? 'text-gray-700' : 'text-gray-400'}`}>
                        {record.checkOut}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      {getStatusBadge(record.status)}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {record.status === "Absent" ? (
                        <button className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm">Mark Present</button>
                      ) : (
                        <button className="text-gray-500 hover:text-gray-700 font-medium hover:underline text-sm">Edit</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Attendance;