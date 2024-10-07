import { useContext } from "react";
import MyContext from "../../context/myContext";

const UserDetail = () => {
  const context = useContext(MyContext);
  const { getAllUsers } = context; // Use the updated context to get all users

  // Debug: Check if getAllUsers is populated
  console.log(getAllUsers); // Check the fetched users

  return (
    <div>
      <div>
        <div className="py-5 flex justify-between items-center">
          <h1 className="text-xl text-white font-bold">All Users</h1>
        </div>

        <div className="w-full pb-10 overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-white text-black">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  S.No.
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Uid
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-white text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Date
                </th>
              </tr>

              {getAllUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No users found.
                  </td>
                </tr>
              ) : (
                getAllUsers.map((item, index) => (
                  <tr key={index} className="text-black">
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-white stroke-slate-500 text-slate-500 ">
                      {index + 1}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-white stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      {item.name}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-white stroke-slate-500 text-slate-500 cursor-pointer ">
                      {item.email}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-white stroke-slate-500 text-slate-500 cursor-pointer ">
                      {item.uid}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-white stroke-slate-500 text-slate-500 cursor-pointer ">
                      {item.role}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-white stroke-slate-500 text-slate-500 cursor-pointer ">
                      {item?.date}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
