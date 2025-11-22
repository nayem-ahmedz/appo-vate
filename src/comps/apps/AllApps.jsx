import { Suspense, use, useState } from "react";
import AppGallery from "../utils/AppGallery";
import SearchBar from "../utils/SearchBar";
import Loading from "../utils/Loading";

const dataPromise = async() => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/apps`);
    return await response.json();
};

export default function AllApps() {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => setSearch(e.target.value);
    const [totalApps, setTotalApps] = useState(0);
    return (
        <>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <SearchBar handleSearch={handleSearch} />
                <h4 className="font-semibold text-2xl">{totalApps} Apps Found</h4>
            </div>
            <Suspense fallback={<Loading />}>
                <AppGallery dataPromise={dataPromise()} updateTotalApps={(count) => setTotalApps(count)} search={search} />
            </Suspense>
        </>
    );
}