import React, { useContext } from "react";
import myContext from "../context/myContext";
import Loader from "../Components/Loader/Loader";
import { auth } from "../firebase/FirebaseConfig"; // Import your Firebase auth configuration

const BookingHistory = () => {
  const { getAllBookings, loading } = useContext(myContext);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    ); // You can customize the loading state
  }

  // Get the current user's ID
  const currentUserId = auth.currentUser ? auth.currentUser.uid : null;

  // Filter bookings for the current user
  const userBookings = getAllBookings.filter(
    (booking) => booking.userId === currentUserId
  );

  return (
    <div className="booking-history-container">
      <h1 className="text-4xl mt-7 mb-8">Your Booking History</h1>
      {userBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="booking-list">
          {userBookings.map((booking) => (
            <li
              key={booking.id}
              style={{
                color: "white",
                backgroundColor: "#1b263b",
                boxShadow: "10px 10px 7px 7px rgba(0,0,0,0.7)",
              }}
              className="booking-item mt-5 hover:translate-y-[-5px] p-4 mb-2 rounded-3xl"
            >
              <h2 className="text-xl font-bold">{booking.name}</h2>
              <p>
                <strong>Phone :</strong> {booking.phone}
              </p>
              <p>
                <strong>Email :</strong> {booking.email}
              </p>
              <p>
                <strong>Address :</strong> {booking.address}
              </p>
              <p>
                <strong>Gas ID :</strong> {booking.gasid}
              </p>
              <p>
                <strong>Date :</strong>{" "}
                {new Date(booking.createdAt.seconds * 1000).toLocaleString()}
              </p>
              <p>
                <strong>Status :</strong>{" "}
                <span
                  className={`${
                    booking.status === "pending"
                      ? "text-orange-500"
                      : booking.status === "rejected"
                      ? "text-red-500"
                      : booking.status === "confirmed"
                      ? "text-green-500"
                      : ""
                  } `}
                >
                  {booking.status}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
