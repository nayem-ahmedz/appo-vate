export default function Loading() {
    return (
        <section className="min-h-[100vh] flex flex-col gap-6 justify-center items-center bg-[#eee] relative">
            <span className="loading loading-ring w-xs md:w-md lg:w-lg bg-blue-300"></span>
            <h3 className='text-4xl md:text-5xl lg:text-6xl text-blue-600 loading-brand'>APPOVATE <br /> Softwares</h3>
        </section>
    );
}