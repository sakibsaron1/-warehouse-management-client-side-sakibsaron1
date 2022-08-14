import { Button } from "flowbite-react";
import React from "react";

const ManageTable = (props) => {
  const { _id, id, name, price, qty, suppliername, img } = props.car;

  const handledelete = () => {};

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="py-4 px-6">{price}</td>
      <td className="py-4 px-6">{qty}</td>
      <td className="py-4 px-6">
        <img src={img} alt="" className="h-10 w-10" />
      </td>
      <td className="py-4 px-6 text-right">
        <Button
          onClick={handledelete}
          className="text-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ManageTable;
