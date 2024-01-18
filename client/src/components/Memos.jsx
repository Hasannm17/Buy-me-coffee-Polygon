import React, { memo, useEffect, useState } from "react";

const Memos = ({state}) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <>
      {memos.map((memo, index) => {
        return (
          <div className="border border-white p-3 rounded-2xl m-4 " key={index}>
            {" "}
            <p className="max-sm:hidden">{memo?.name}</p>
            <p className="max-sm:hidden">{memo?.message}</p>
            <p className="max-sm:hidden">{new Date(memo?.timestamp*1000).toLocaleString()}</p>
            <p className="max-sm:hidden">{memo?.from}</p>

            <p className="sm:hidden">{memo?.name}</p>
            <p className="sm:hidden">{memo?.message}</p>
            <p className="sm:hidden">{new Date(memo?.timestamp*1000).toLocaleString()}</p>
            <p className="sm:hidden">{memo?.from.slice(0,16)}...</p>

            
          </div>
        );
      })}
    </>
  );
};

export default Memos;
