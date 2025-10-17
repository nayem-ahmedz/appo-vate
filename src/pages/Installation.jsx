import { Suspense, useState } from "react";
import AppGalleryLandscape from "../comps/utils/AppGalleryLandscape";
import Loading from "../comps/utils/Loading";

const dataPromise = fetch('/data.json').then(res => res.json());

export default function Installation() {
    const [appsCount, setAppsCount] = useState(0);
    const [sortType, setSortType] = useState('downloads')
    const handleSelect = (e) => {
        setSortType(e.target.value)
    }
    return (
        <section className="containerr px-4">
            <title>Installed Apps | Appovate</title>
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Your Installed Apps</h2>
            <p className="text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <select defaultValue="sort" className="select" name="sort" onChange={handleSelect}>
                    <option value='sort' disabled>Sort by downloads</option>
                    <option value='desc'>High-Low</option>
                    <option value='asc'>Low-High</option>
                </select>
                <h4>{appsCount} Apps Found</h4>
            </div>
            <Suspense fallback={<Loading />}>
                <AppGalleryLandscape dataPromise={dataPromise} updateAppsCount={(count) => setAppsCount(count)} sortType={sortType} />
            </Suspense>
        </section>
    );
}