import { use, useState } from "react";
import AppGalleryLandscape from "../utils/AppGalleryLandscape";

export default function InstalledApps({ dataPromise }) {
    const data = use(dataPromise);
    const [apps, setApps] = useState(0);
    const [sortType, setSortType] = useState('size')
    return (
        <>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <select defaultValue="Pick a color" className="select">
                    <option>Sort by {sortType}</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                </select>
                <h4>{apps} Apps Found</h4>
            </div>
            <AppGalleryLandscape appsData={data} />
        </>
    );
}