import React, { useContext } from "react";
import toast from "react-hot-toast";
import myContext from "../../context/myContext";

const BookingDetail = () => {
  const { getAllBookings, deleteBooking, updateBookingStatus } =
    useContext(myContext); // Use the context to get all bookings

  // Function to handle status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateBookingStatus(id, newStatus);
      toast.success(`Booking status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating booking status:", error);
      toast.error("Error updating booking status");
    }
  };

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-xl text-white font-bold">All Bookings</h1>
      </div>

      <div className="w-full pb-10 overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-white text-black">
          <thead>
            <tr>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                S.No.
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                UID
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Name
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Phone
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Email
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Address
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Gas ID
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Status
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Actions
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {getAllBookings.map((booking, index) => (
              <tr key={booking.id} className="text-black">
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {index + 1}
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.userId}
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.name}
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.phone}
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.email}
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.address}
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.gasid}
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.status}
                </td>
                <td className="h-12 px-6 border-t border-l first:border-l-0 border-white text-slate-500">
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      handleStatusChange(booking.id, e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button
                    onClick={() => deleteBooking(booking.id)}
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-white text-slate-500">
                  {booking.createdAt
                    ? booking.createdAt.toDate().toDateString()
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetail;
