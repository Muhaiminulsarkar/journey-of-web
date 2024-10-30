import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div className="flex flex-col">
            <Header></Header>
            <div className="flex-grow">
                <h2>Hello, this is the Home components</h2>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;