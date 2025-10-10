import { Download } from "lucide-react";

function CardLandscape({ app }) {
    return (
        <div className="shadow-sm p-4 bg-white rounded-sm transition hover:scale-105 flex justify-center items-center gap-4 flex-wrap">
            <div className="aspect-square bg-gray-300 rounded-md w-20 h-20"></div>
            <div className="grow">
                <h4 className="text-xl font-medium">{app.title}</h4>
                <div className="flex">
                    <p className="flex items-center gap-1 text-[#00D390] py-2 px-3 font-medium"> <Download /> 9M</p>
                    <p className="text-[#FF8811] py-2 px-3 font-medium"> <i className="fa-solid fa-star"></i> 5 </p>
                    <p className="text-gray-500 py-2 px-3"> {app.size} MB </p>
                </div>
            </div>
            <button className="btn bg-[#00D390] text-white">Uninstall</button>
        </div>
    );
}

export default CardLandscape;