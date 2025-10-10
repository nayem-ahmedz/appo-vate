import { Download } from "lucide-react";

function Card({app}) {
    return (
        <div className="shadow-sm p-4 bg-white rounded-sm transition hover:scale-105">
            <div className="aspect-square bg-gray-300 rounded-md"></div>
            <h4 className="text-xl font-medium my-4">{app.title}</h4>
            <div className="flex justify-between">
                <p className="flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] py-2 px-3 rounded-lg font-medium"> <Download /> 9M</p>
                <p className="bg-[#FFF0E1] text-[#FF8811] py-2 px-3 rounded-lg font-medium"> <i className="fa-solid fa-star"></i> 5 </p>
            </div>
        </div>
    );
}

export default Card;