import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div className="border-4 border-indigo-600 rounded-lg m-4 p-4 ">
            <h2 className="text-2xl font-bold">Dad</h2>
            <div className="flex justify-around">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;