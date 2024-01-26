import { NavLink, Outlet, Link } from "react-router-dom"
import { useRef, useState } from "react";
import Footer from "../Footer";
import '../Navbar.css';

export default function RootLayout() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);


    return (
        <div >
            <div className="nav-section fixed-top">
                <header >
                    <nav >
                        <NavLink className='name' to='/'><h1>
                            CIARA ATTONG
                        </h1></NavLink>

                        <div className="menu-icon" onClick={handleClick}>

                            <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />

                        </div>

                        <ul id="nav-items" className={click ? 'nav-menu active' : 'nav-menu'} >
                            <li className="nav-item">
                                <Link to='/biography' className="nav-links" onClick={closeMobileMenu}>
                                    Bio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/books' className="nav-links" onClick={closeMobileMenu}>
                                    Books
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to='/extras' className="nav-links" onClick={closeMobileMenu}>
                                    Extras
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

