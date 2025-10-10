import Logo from '../../assets/logo.png';

export default function Loading(){
    return(
        <section className="min-h-[50vh] flex justify-center items-center">
            <div className='flex gap-1 justify-center items-center text-5xl md:text-7xl text-blue-600'>
                L <img src={Logo} alt="logo loading" className='w-8 md:w-10 translate-y-1 md:translate-y-2 animate-spin' /> oading
            </div>
        </section>
    );
}