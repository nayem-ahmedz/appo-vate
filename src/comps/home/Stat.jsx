export default function Stat() {
    return (
        <section className="hero bg-base-200 gradient-primary">
            <div className="hero-content text-center w-full">
                <div className="w-full py-10 md:py-20 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">Trusted by Millions, Built for You</h2>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div className="opacity-80">Total Downloads</div>
                            <div className="stat-value text-5xl md:text-6xl">29.6M</div>
                            <div className="opacity-80">21% more than last month</div>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div className="opacity-80">Total Reviews</div>
                            <div className="stat-value text-5xl md:text-6xl ">906K</div>
                            <div className="opacity-80">46% more than last month</div>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div className="opacity-80">Active Apps</div>
                            <div className="stat-value text-5xl md:text-6xl">132+</div>
                            <div className="opacity-80">31 more will Launch</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}