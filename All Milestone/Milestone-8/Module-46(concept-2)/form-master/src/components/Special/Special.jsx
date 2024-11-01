import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";



const Special = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="border-4 border-violet-300 rounded-lg m-4 p-4 ">
            <h2 className="text-2xl font-bold">Special</h2>
            <p>Money:{money}</p>
            <button className="btn btn-secondary" onClick={() => setMoney(money + 33)}>Add 33 tk</button>
        </div>
    );
};

export default Special;