import { NavLink } from 'react-router';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router';

export default function Header() {
    const user = false;
    const navLinks = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/apps'>Apps</NavLink> </li>
        {
            user && <li> <NavLink to='/installation'>Installation</NavLink> </li>
        }
        <li> <NavLink to='/support'>Support</NavLink> </li>
        <li> <NavLink to='/about-us'>About us</NavLink> </li>
        <li> <NavLink to='/contact'>Contact</NavLink> </li>
    </>;
    return (
        <header className="bg-base-200 shadow-sm sticky top-0 z-10">
            <nav className="navbar containerr py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl" to='/'>
                        <img src={Logo} alt="appovate logo" className='w-10 h-10' />
                        AppoVate
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn primary-btn"> <i className="fa-solid fa-user mr-2"></i> Login</Link>
                </div>
            </nav>
        </header>
    );
}