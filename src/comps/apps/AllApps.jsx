import { Suspense, use, useState } from "react";
import AppGallery from "../utils/AppGallery";
import SearchBar from "../utils/SearchBar";
import Loading from "../utils/Loading";

const dataPromise = async() => {
    const response = await fetch('/data.json');
    return await response.json();
};

export default function AllApps() {
    // const handleSearch = (keys) => {
    //     const matchedApps = apps.filter(app => app.title.includes(keys));
    //     setApps(matchedApps);
    // }
    return (
        <>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <SearchBar />
                <h4>() Apps Found</h4>
            </div>
            <Suspense fallback={<Loading />}>
                <AppGallery dataPromise={dataPromise()} />
            </Suspense>
        </>
    );
}