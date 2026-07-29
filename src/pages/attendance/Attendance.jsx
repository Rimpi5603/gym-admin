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
          <span className="inline-flex items-center bg-green-900/50 text-green-400 py-1 px-3 rounded-full text-xs font-semibold border border-green-800">
            <FaCheckCircle className="mr-1" /> Present
          </span>
        );
      case "Absent":
        return (
          <span className="inline-flex items-center bg-red-900/50 text-red-400 py-1 px-3 rounded-full text-xs font-semibold border border-red-800">
            <FaTimesCircle className="mr-1" /> Absent
          </span>
        );
      case "Late":
        return (
          <span className="inline-flex items-center bg-yellow-900/50 text-yellow-400 py-1 px-3 rounded-full text-xs font-semibold border border-yellow-800">
            <FaClock className="mr-1" /> Late
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Attendance
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-gray-300 font-medium">Date:</label>
          <input 
            type="date" 
            className="w-full border border-slate-600 bg-slate-700 px-4 py-2 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:w-auto"
            defaultValue={new Date().toISOString().split('T')[0]}
            onChange={(e) => setCurrentDate(new Date(e.target.value).toLocaleDateString())}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-slate-800 rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-gray-400 font-medium mb-1">Total Members</h3>
          <p className="text-3xl font-bold text-white">{attendanceRecords.length}</p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <h3 className="text-gray-400 font-medium mb-1">Present Today</h3>
          <p className="text-3xl font-bold text-green-400">
            {attendanceRecords.filter(r => r.status === 'Present' || r.status === 'Late').length}
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-md p-6 border-l-4 border-red-500">
          <h3 className="text-gray-400 font-medium mb-1">Absent Today</h3>
          <p className="text-3xl font-bold text-red-400">
            {attendanceRecords.filter(r => r.status === 'Absent').length}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 p-4 shadow-md sm:p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-700 text-gray-300 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Member Name</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Date</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Check-In</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Check-Out</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600 text-center">Status</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm font-light">
                {attendanceRecords.map((record) => (
                  <tr key={record.id} className="border-b border-slate-700 hover:bg-slate-700/50 transition">
                    <td className="py-3 px-6 font-medium text-white">
                      {record.memberName}
                    </td>
                    <td className="py-3 px-6">
                      {record.date}
                    </td>
                    <td className="py-3 px-6">
                      <span className={`font-medium ${record.checkIn !== '-' ? 'text-gray-300' : 'text-gray-500'}`}>
                        {record.checkIn}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <span className={`font-medium ${record.checkOut !== '-' ? 'text-gray-300' : 'text-gray-500'}`}>
                        {record.checkOut}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      {getStatusBadge(record.status)}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {record.status === "Absent" ? (
                        <button className="text-blue-400 hover:text-blue-300 font-medium hover:underline text-sm">Mark Present</button>
                      ) : (
                        <button className="text-gray-400 hover:text-gray-200 font-medium hover:underline text-sm">Edit</button>
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
