import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import UserDetail from "../Components/Admin/UserDetail";
import Layout from "../Components/Layout";
import { useContext } from "react";
import myContext from "../context/myContext";
import BookingDetail from "../Components/Admin/BookingDetail";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);
  const { getAllUsers } = context;
  const { getAllBookings } = context;
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-gray-300 to-red-700 ">
        <div className="top mb-5 px-5 mt-5">
          <div className=" bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 py-5 border border-black rounded-lg">
            <h1 className=" text-center text-2xl font-bold text-black">
              Admin Dashboard
            </h1>
          </div>
        </div>

        <div className="px-5">
          <div className="mid mb-5">
            <div className=" bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 py-5 rounded-xl border border-black">
              <div className="flex justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className=" text-center text-lg text-black">
                  <span className=" font-bold">Name :</span> {user?.name}
                </h1>
                <h1 className=" text-center text-lg text-black">
                  <span className=" font-bold">Email :</span> {user?.email}
                </h1>
                <h1 className=" text-center text-lg text-black">
                  <span className=" font-bold">Date :</span> {user?.date}
                </h1>
                <h1 className=" text-center text-lg text-black">
                  <span className=" font-bold">Role :</span> {user?.role}
                </h1>
              </div>
            </div>
          </div>

          <div className="">
            <Tabs>
              <TabList className="flex flex-wrap -m-4 text-center justify-center">
                <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                  <div className=" border bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 hover:bg-red-300 border-black px-4 py-3 rounded-xl">
                    <div className="text-white w-12 h-12 mb-3 inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-list-ordered"
                      >
                        <line x1={10} x2={21} y1={6} y2={6} />
                        <line x1={10} x2={21} y1={12} y2={12} />
                        <line x1={10} x2={21} y1={18} y2={18} />
                        <path d="M4 6h1v4" />
                        <path d="M4 10h2" />
                        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                      </svg>
                    </div>
                    <h2 className="title-font font-medium text-3xl text-white fonts1">
                      {getAllBookings.length}
                    </h2>
                    <p className=" text-white  font-bold">Total Booking</p>
                  </div>
                </Tab>

                <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                  <div className=" border bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 hover:bg-red-300 border-black px-4 py-3 rounded-xl">
                    <div className="text-white w-12 h-12 mb-3 inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h2 className="title-font font-medium text-3xl text-white fonts1">
                      {getAllUsers.length}
                    </h2>
                    <p className=" text-white  font-bold">Total Users</p>
                  </div>
                </Tab>
              </TabList>
              {/* <TabPanel><ProductDetail /></TabPanel> */}
              <TabPanel>
                <BookingDetail />
              </TabPanel>
              <TabPanel>
                <UserDetail />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
