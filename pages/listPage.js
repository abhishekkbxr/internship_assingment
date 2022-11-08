import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function ListPage() {
  const router = useRouter()
  const [alldata, setData] = useState([]);

  useEffect(() => {
    ferchData();
  }, []);

  const ferchData = async (e) => {
    // e.preventDefault()
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let response = await res.json();

    setData(response.data);
  };

  const handleDelete = async (id) => {

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.reload(window.location.pathname)
   
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Data
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  DOB
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Coutery
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Resume
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {alldata.map((item) => {
                return (
                  <tr key={item._id}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.DOB}</td>
                    <td className="px-4 py-3">{item.country}</td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      {item.resume}
                    </td>
                    <td className="w-10 text-center">
                      <DeleteIcon onClick={() => { handleDelete(item._id) }} className="hover:text-red-500" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <Link href="/">
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ListPage;
