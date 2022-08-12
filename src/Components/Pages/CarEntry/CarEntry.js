import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarEntry = () => {
  const { id } = useParams();
  const [cars, setCars] = useState({});
  const [carsQty, setCarsQty] = useState(0);
  const [add, setAdd] = useState(0);

  // console.log(typeof carsQty, carsQty, cars.qty);

  useEffect(() => {
    fetch(`http://localhost:5000/thecar/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setCarsQty(data.qty);
      });
  }, [id]);

  // useEffect(() => {
  //   let qtyCars = cars.qty;
  //   setCarsQty(qtyCars);
  // }, [cars.qty]);

  const handleQty = () => {
    setCarsQty(parseInt(carsQty) - 1);
    cars.qty = parseInt(cars.qty) - 1;
    const totalqty = cars.qty;

    console.log(cars.qty);

    // const totalQty = parseInt(carsQty);

    fetch(`http://localhost:5000/quantity/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ totalqty }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const totalqty = parseInt(carsQty) + parseInt(add);
    setCarsQty(totalqty);

    fetch(`http://localhost:5000/quantity/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ totalqty }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-5">
        Total {cars.name} Available in Stock : {carsQty}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
        <div className="deliverd border-2 rounded-xl border-[#0694a2]">
          <h2 className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 mt-5">
            Click here to deliverd 1 Items from Stock
          </h2>
          <button
            onClick={handleQty}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
          >
            Delivered
          </button>
        </div>
        <div className="add border-2 rounded-xl border-[#0694a2] p-3">
          <form onSubmit={handlesubmit}>
            <div className="relative z-0 mb-6 w-full group">
              <label
                for="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Add Items for new stock
              </label>
              <input
                onBlur={(e) => setAdd(e.target.value)}
                type="number"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add items for New stock"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarEntry;
