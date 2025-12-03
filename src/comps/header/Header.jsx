import { NavLink } from 'react-router';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

export default function Header() {
    const { user, logoutUser, loading } = useContext(AuthContext);
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
    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure to Logout?",
            text: "You have to login again to get access!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, continue!"
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You have successfully logged out.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "OPPS!",
                            text: "Error loggin out.",
                            icon: "error"
                        });
                    });
            }
        });
    }
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
                    <div className='flex items-center gap-4'>
                        {
                            loading ? <span className="loading loading-dots loading-xl mr-5"></span> : user ?
                                <>
                                    <div className="avatar cursor-pointer">
                                        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                            <img
                                                src={user.photoURL}
                                                className="w-full"
                                                alt="user profile"
                                                onError={e => {
                                                    e.target.onerror = null;
                                                    e.target.src = '/placeholder-image.jpg';
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <button className='btn btn-error btn-outline' onClick={handleLogout}>Logout</button>
                                </>
                                :
                                <Link to='/login' className="btn primary-btn"> <i className="fa-solid fa-user mr-2"></i> Login</Link>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}