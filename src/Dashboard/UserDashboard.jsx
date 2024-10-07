import { useContext } from "react";
import Layout from "../Components/Layout";
import MyContext from "../context/myContext";
import BookingHistory from "./BookingHistory";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(MyContext);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-gray-300 to-red-700">
        <div className="container  mx-auto px-4 py-5 lg:py-8">
          <div className="top">
            <div className="bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 py-5 rounded-xl border border-red-900">
              <div className="flex justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-center text-lg">
                  <span className="font-bold">Name: </span>
                  {user?.name}
                </h1>

                <h1 className="text-center text-lg">
                  <span className="font-bold">Email: </span>
                  {user?.email}
                </h1>

                <h1 className="text-center text-lg">
                  <span className="font-bold">Date: </span>
                  {user?.date}
                </h1>

                <h1 className="text-center text-lg">
                  <span className="font-bold">Role: </span>
                  {user?.role}
                </h1>
              </div>
            </div>
          </div>

          <BookingHistory user={user} />
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
