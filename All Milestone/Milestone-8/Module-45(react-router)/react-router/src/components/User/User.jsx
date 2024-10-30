/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2 className="font-bold">{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}> <button className="font-bold border p-2 m-2">Show Details</button> </Link> <br />
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;