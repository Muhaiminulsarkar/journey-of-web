import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div className="border-4 border-indigo-600 rounded-lg m-4 p-4 ">
            <h2 className="text-2xl font-bold">Aunty</h2>
            <div className="flex justify-around">
                <Cousin name={'Upoma'}></Cousin>
                <Cousin name={'Ayat'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;