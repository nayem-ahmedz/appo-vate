export default function Error(){
    return(
        <section className="min-h-[50vh] flex justify-center items-center p-4">
            <div className='flex gap-1 justify-center items-center text-3xl md:text-5xl text-center text-red-600 animate-pulse'>
                <h1>Failed to load data from Server!</h1>
            </div>
        </section>
    );
}