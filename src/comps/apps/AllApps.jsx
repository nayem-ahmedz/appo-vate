import { use, useState } from "react";
import AppGallery from "../utils/AppGallery";
import SearchBar from "../utils/SearchBar";

export default function AllApps({ dataPromise, updateTotal }) {
    const data = use(dataPromise);
    const [apps, setApps] = useState(data);
    return (
        <>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <SearchBar />
                <h4>({apps.length}) Apps Found</h4>
            </div>
            <AppGallery appsData={data} />
        </>
    );
}