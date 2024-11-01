import Special from "../Special/Special";


const MySelf = () => {
    return (
        <div className="border-4 border-indigo-600 rounded-lg m-4 p-4 ">
            <h2 className="text-2xl font-bold">Myself</h2>
            <div className="flex justify-around">
                <Special></Special>
            </div>
        </div>
    );
};

export default MySelf;