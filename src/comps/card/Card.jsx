import { Download } from "lucide-react";
import { Link } from "react-router";

function Card({ app }) {
    const donwloadsInK = Math.round(app.downloads / 1000);
    const totalRatings = app.ratings.reduce((sum, rate) => sum + rate.count, 0);
    const weightedTotalRatings = app.ratings.reduce((sum, rate, index) => sum + (index + 1) * rate.count, 0);
    const avgRatings = (weightedTotalRatings / totalRatings);
    return (
        <Link to={`/apps/${app._id}`}>
            <div className="shadow-sm p-4 bg-white rounded-sm transition hover:scale-105">
                <div className="aspect-square bg-gray-300 rounded-xl">
                <img src={app.image} alt={app.title} className="w-full h-full rounded-xl" />
                </div>
                <h4 className="text-xl font-medium my-4">{app.title}</h4>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] py-2 px-3 rounded-lg font-medium"> <Download /> {donwloadsInK}K</p>
                    <p className="bg-[#FFF0E1] text-[#FF8811] py-2 px-3 rounded-lg font-medium"> <i className="fa-solid fa-star"></i> {avgRatings.toFixed(1)} </p>
                </div>
            </div>
        </Link>
    );
}

export default Card;