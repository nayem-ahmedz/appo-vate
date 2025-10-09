import { Download } from "lucide-react";

function Card() {
    return (
        <div className="shadow-sm p-4">
            <div></div>
            <h4>Forest: Focus for Productivity</h4>
            <div>
                <p> <Download /> 9M</p>
                <p> <i className="fa-solid fa-star"></i> 5 </p>
            </div>
        </div>
    );
}

export default function TrendingApps() {
    const cards = [];
    for(let i=0; i<8; i++){
        cards.push(<Card/>)
    }
    return (
        <section className="my-10 md:my-20 containerr">
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Trending Apps</h2>
            <p className="text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    cards
                }
            </section>
        </section>
    );
}