import { useState, useEffect } from "react";
import abi from "./contractjson/chai.json";
import { ethers } from "ethers";
import Memos from "./components/Memos";
import Buy from "./components/Buy";
import { PiCoffeeDuotone } from "react-icons/pi";
function App() {
  const [account, setAccount] = useState("Not connected");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xedf815F7517C093bAfC48fb8dC161859Af011c5E";
      const contractABI = abi.abi;
      //Metamask part
      try {
        const { ethereum } = window;

        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload;
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        setState({
          provider,
          signer,
          contract,
        });
      } catch (error) {
      console.error(error);
      }
    };
    template();
  }, []);

  return (
    <>
      <section className="min-h-screen bg-slate-950 font-extrabold text-white flex flex-col justify-center items-center ">
        <div className="flex gap-x-10 p-10 max-sm:flex-col  items-center">
          <img
            src="/hasan.jpg"
            className="border Border border-purple-500 h-32 w-32"
            alt=""
          />
          <h1 className="text-purple-400 font-mono text-[2rem] flex justify-center items-center gap-x-3 max-sm:flex-col mt-6 w-full max-sm:text-[1.7rem]">
            <PiCoffeeDuotone /> Buy me coffee
          </h1>
        </div>{" "}
        <div>
          <img src="/pg.svg" className="p-4 h-14 bg-white rounded-2xl" alt="" />
        </div>
        <div className="flex  justify-center items-center gap-x-4 p-10 ">
          <div className="flex justify-center items-center gap-x-2 bg-white p-2 rounded-2xl text-purple-500">
            <img src="/metamask.webp" height={40} width={40} alt="" />
            <span className="max-sm:hidden">{account? account[0]:"Please refresh and connect to your wallet"}</span>
            <span className="sm:hidden">{account? account[0].slice(0,15):"Please refresh and connect to your wallet"}...</span>
         </div>
        </div>
        <Buy state={state} />
        <Memos state={state} />
      </section>
    </>
  );
}

export default App;
