import React, { useState } from "react";
import { ethers } from "ethers";
import { CiCoffeeCup } from "react-icons/ci";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Buy = ({ state }) => {
  const [name, setname] = useState();
  const [message, setMessage] = useState();
  const buyChai = async (e) => {
    try {
      e.preventDefault();
      const { contract } = state;
      const amount = { value: ethers.utils.parseEther("1") };
      const transaction = await contract.buyCai(name, message, amount);
      await transaction.wait();
    } catch (error) {
      if (error.data.message.includes("insufficient")) {
        toast("insufficient funds!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        onSubmit={buyChai}
        className="flex text-black font-mono flex-col justify-center items-center gap-y-4"
      >
        <input
          type="text"
          className="rounded-3xl p-2 outline outline-purple-500  focus:outline-purple-800 "
          name=""
          id="name"
          onChange={(e) => setname(e.target.value)}
          placeholder="name"
        />
        <input
          type="text"
          className="rounded-3xl p-2  outline outline-purple-500 focus:outline-purple-800"
          name=""
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
        />
        <button className="bg-purple-500 flex justify-center items-center gap-x-1 p-3 text-white rounded-2xl font-black hover:bg-purple-900 transform">
          <CiCoffeeCup className="h-6 w-6 text-yellow-200" />
          Donate
        </button>
      </form>
    </>
  );
};

export default Buy;
