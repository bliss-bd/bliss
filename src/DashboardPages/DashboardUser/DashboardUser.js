import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";

const DashboardUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://bliss-server-y2j1.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleUpdateUser = (id) => {
    fetch(`https://bliss-server-y2j1.vercel.app/verifyuser/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verifyed successfully");
          refetch();
        }
      });
  };

  const handleDeleteItem = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete this Item??");
    if (confirm) {
      fetch(`https://bliss-server-y2j1.vercel.app/allusers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully", {
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
              iconTheme: {
                primary: "#713200",
                secondary: "#FFFAEE",
              },
            });
            refetch();
          }
        });
    }
  };


  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <section className="container mx-auto px-4 lg:px-32">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3"> VERIFY</th>
                  <th className="px-4 py-3">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users?.map((user) => (
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={user?.photoURL}
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">{user?.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-500 bg-green-100 rounded-sm">
                        {user?.email}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      <button
                        className="hover:text-green-500"
                        onClick={() => {
                          handleUpdateUser(user._id);
                        }}
                      >
                        {user?.isVerifyed ? "Verifyed" : "Verify Seller"}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDeleteItem(user._id)}
                      >
                        Delete user
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardUser;
