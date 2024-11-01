/* eslint-disable react/prop-types */


const Cousin = ({ name }) => {
    return (
        <div className="border-4 border-indigo-600 rounded-lg m-4 p-4 ">
            <h2>Cousin</h2>
            <p className="text-2xl font-bold">{name}</p>
        </div>
    );
};

export default Cousin;