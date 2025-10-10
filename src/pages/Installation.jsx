import { Suspense } from "react";
import Loading from "../comps/utils/Loading";
import InstalledApps from "../comps/apps/InstalledApps";

const dataPromise = async() => {
    const response = await fetch('/data.json');
    return await response.json();
};

export default function Installation() {
    return (
        <section className="containerr px-4">
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Your Installed Apps</h2>
            <p className="text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<Loading />}>
                <InstalledApps dataPromise={dataPromise()} />
            </Suspense>
        </section>
    );
}