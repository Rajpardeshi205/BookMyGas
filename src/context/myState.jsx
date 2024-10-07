import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  updateDoc, // Import updateDoc
} from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
import { auth } from "../firebase/FirebaseConfig"; // Import Firebase Auth
import toast from "react-hot-toast";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const [getAllBookings, setGetAllBookings] = useState([]);
  const [getAllUsers, setGetAllUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    gasid: "",
  });

  // Fetch all bookings
  const getAllBookingsFunction = () => {
    setLoading(true);
    const q = query(collection(db, "Booking"), orderBy("createdAt"));

    return onSnapshot(
      q,
      (QuerySnapshot) => {
        let bookingArray = [];
        QuerySnapshot.forEach((doc) => {
          bookingArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllBookings(bookingArray);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching bookings: ", error);
        setLoading(false);
      }
    );
  };

  // Fetch all users
  const getAllUsersFunction = () => {
    setLoading(true);
    const q = query(collection(db, "user")); // Change "Users" to your users collection name

    return onSnapshot(
      q,
      (QuerySnapshot) => {
        let usersArray = [];
        QuerySnapshot.forEach((doc) => {
          usersArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUsers(usersArray);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching users: ", error);
        setLoading(false);
      }
    );
  };

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userId = auth.currentUser ? auth.currentUser.uid : null;

    try {
      await addDoc(collection(db, "Booking"), {
        ...formData,
        userId: userId,
        createdAt: new Date(),
        status: "pending",
      });

      resetFormData();

      toast.success("Your booking has been submitted!");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error submitting your booking. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Delete a booking
  const deleteBooking = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "Booking", id));
      toast.success("Booking deleted successfully");
      getAllBookingsFunction(); // Refresh the bookings list after deletion
    } catch (error) {
      console.log(error);
      toast.error("Error deleting booking. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Utility function to reset form data
  const resetFormData = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      gasid: "",
    });
  };

  // Define the updateBookingStatus function
  const updateBookingStatus = async (id, newStatus) => {
    const bookingRef = doc(db, "Booking", id);
    try {
      await updateDoc(bookingRef, { status: newStatus });
    } catch (error) {
      console.error("Error updating booking status:", error);
      throw error; // Rethrow the error to handle it later
    }
  };

  useEffect(() => {
    const unsubscribeBookings = getAllBookingsFunction();
    const unsubscribeUsers = getAllUsersFunction();
    return () => {
      unsubscribeBookings();
      unsubscribeUsers();
    };
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllBookings,
        getAllUsers,
        deleteBooking,
        handleChange,
        handleSubmit,
        formData,
        updateBookingStatus, // Make sure this is included
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
