import PlayStore from '../../assets/icons/playstore.png';
import AppStore from '../../assets/icons/appstore.png';
import HeroImg from '../../assets/hero.png';

export default function Banner() {
    return (
        <section className="hero bg-base-200">
            <div className="hero-content text-center pb-0">
                <div>
                    <h2 className="text-4xl lg:text-7xl/22 font-bold">
                        We Build <br />
                        <span className="banner-title">Productive</span> Apps
                    </h2>
                    <p className="py-6 text-[#627382]">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='flex justify-center gap-5 mb-10'>
                        <a href='https://play.google.com/store/apps?hl=en' className="btn btn-primary btn-outline border-gray-300 h-auto w-auto px-5 py-3 text-base md:text-xl"> <img src={PlayStore} alt="google playstore" /> Google Play</a>
                        <a href='https://www.apple.com/app-store/' className="btn btn-primary btn-outline border-gray-300 h-auto w-auto px-5 py-3 text-base md:text-xl"> <img src={AppStore} alt="google playstore" /> App Store</a>
                    </div>
                    <img src={HeroImg} alt='hero image' className='mx-auto' />
                </div>
            </div>
        </section>
    );
}