import { Link } from "react-router";
import Card from "../card/Card";

export default function TrendingApps() {
    const cards = [];
    for(let i=0; i<8; i++){
        cards.push(<Card/>)
    }
    return (
        <section className="mt-10 mt:my-20 containerr">
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Trending Apps</h2>
            <p className="text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                {
                    cards
                }
            </section>
            <Link to='/apps' className="btn primary-btn h-auto py-3 px-7 rounded-md block w-fit mx-auto">Show All</Link>
        </section>
    );
}