import { NavLink } from 'react-router';
import Logo from '../../assets/logo.png';

export default function Header() {
    const navLinks = [
        { id: 1, url: '/', text: 'Home' },
        { id: 2, url: '/apps', text: 'Apps' },
        { id: 3, url: '/installs', text: 'Installation' }
    ];
    return (
        <header className="bg-white shadow-sm">
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
                                navLinks.map(link => <li key={link.id}><NavLink to={link.url}>{link.text}</NavLink></li>)
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={Logo} alt="appovate logo" className='w-10 h-10' />
                        AppoVate
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks.map(link => <li key={link.id}><NavLink to={link.url}>{link.text}</NavLink></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn primary-btn"> <i className="fa-brands fa-github"></i> Contribute</a>
                </div>
            </nav>
        </header>
    );
}