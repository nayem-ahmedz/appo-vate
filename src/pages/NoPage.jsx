import { useNavigate } from 'react-router';
import ErrorImage from '../assets/error-404.png';

const NoPage = () => {
    const navigate = useNavigate();
    return (
        <section className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <img src={ErrorImage} alt='error image' className='w-full max-w-lg mx-auto' />
                    <h1 className="text-3xl md:text-5xl font-bold mt-4">Oops, page not found!</h1>
                    <p className="py-3 md:py-6 text-[#627382] md:text-xl">The page you are looking for is not available.</p>
                    <button className="btn primary-btn px-7" onClick={() => navigate(-1)}>Go Back!</button>
                </div>
            </div>
        </section>
    );
}

export default NoPage;