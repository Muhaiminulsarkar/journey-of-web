import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div className="border-4 border-indigo-600 rounded-lg m-4 p-4 ">
            <h2 className="text-2xl font-bold">Uncle</h2>
            <div className="flex justify-around">
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;