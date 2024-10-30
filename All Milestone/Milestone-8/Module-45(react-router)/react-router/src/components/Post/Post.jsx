/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div className="border-2 border-sky-300 p-3 rounded-lg">
            <h2 className="text-2xl">Post Of ID: {id}</h2>
            <p className="font-bold">{title}</p>
            <Link to={`/post/${id}`} ><button className="border-2 p-2 border-red-200 rounded-md mt-3">Post Detail</button></Link>

        </div>
    );
};

export default Post;