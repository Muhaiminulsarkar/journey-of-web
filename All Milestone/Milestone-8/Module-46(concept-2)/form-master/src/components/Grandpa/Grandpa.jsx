import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import { useState } from "react";

export const MoneyContext = createContext();

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    return (
        <div className="w-full border-4 border-orange-500 rounded-lg m-4 p-4 ">
            <h2 className="text-3xl font-bold">GrandPa</h2>
            <p>Money:{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className="flex justify-around">
                    <Dad></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </div>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;