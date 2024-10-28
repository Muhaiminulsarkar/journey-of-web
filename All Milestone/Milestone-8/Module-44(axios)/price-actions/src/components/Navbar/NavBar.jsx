import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuFill } from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";


export default function NavBar() {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)} >
                {
                    open ? <RxCross2 className="text-3xl " /> : <RiMenuFill className="text-3xl " />
                }
                {/* <RiMenuFill className="text-3xl " /> */}
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-60'}
            bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}> </Link>)
                }

            </ul>
        </nav>
    )
}
