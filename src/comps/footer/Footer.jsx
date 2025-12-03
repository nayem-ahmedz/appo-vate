import { Link } from 'react-router';
import Logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer className='mt-10 md:mt-20 bg-neutral'>
            <section className="footer sm:footer-horizontal text-neutral-content p-10 containerr">
                <aside>
                    <img src={Logo} alt='appovate logo' className='w-16 h-16' />
                    <h4 className='text-xl'>Appovate Softwares</h4>
                    <p>
                        Providing reliable android and iOs apps since 2025
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Navigation</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/apps' className="link link-hover">All Apps</Link>
                    <Link to='/about-us' className="link link-hover">About Us</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='/support' className="link link-hover">Support</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <a href="https://github.com/nayem-ahmedz" target="_blank" rel="noopener noreferrer" className="link link-hover">Contribution</a>
                </nav>
            </section>
        </footer>
    );
}