import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyTable from "./MyTable/MyTable";

const MyItem = () => {
  const [cars, setCars] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/myitems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [user?.email]);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/myitems/${email}`)
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // }, []);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-2">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          My Items
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Quantity
            </th>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
            <th scope="col" className="py-3 px-6">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <MyTable
              key={car.id}
              car={car}
              cars={cars}
              setCars={setCars}
            ></MyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItem;
