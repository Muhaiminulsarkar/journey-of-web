import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2 className="text-5xl">Navbar</h2>
            <nav className="space-x-4 font-bold text-red-500 my-4">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/user">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;