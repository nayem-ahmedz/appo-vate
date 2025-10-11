import { Suspense, useState } from "react";
import AppGalleryLandscape from "../comps/utils/AppGalleryLandscape";
import Loading from "../comps/utils/Loading";

const dataPromise = fetch('/data.json').then(res => res.json());

export default function Installation() {
    const [apps, setApps] = useState(0);
    const [sortType, setSortType] = useState('size')
    return (
        <section className="containerr px-4">
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Your Installed Apps</h2>
            <p className="text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <select defaultValue="Pick a color" className="select">
                    <option>Sort by {sortType}</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                </select>
                <h4>{apps} Apps Found</h4>
            </div>
            <Suspense fallback={<Loading />}>
                <AppGalleryLandscape dataPromise={dataPromise} />
            </Suspense>
        </section>
    );
}