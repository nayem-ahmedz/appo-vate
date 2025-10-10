import { Link } from "react-router";
import { Suspense, use } from "react";
import AppGallery from "../utils/AppGallery";
import Loading from "../utils/Loading";

const dataPromise = fetch('/data.json').then(res => res.json());

export default function TrendingApps() {
    return (
        <section className="mt-10 mt:my-20 containerr px-4">
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Trending Apps</h2>
            <p className="text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<Loading />}>
                <AppGallery dataPromise={dataPromise} showTrending={true} />
            </Suspense>
            <Link to='/apps' className="btn primary-btn h-auto py-3 px-7 rounded-md block w-fit mx-auto">Show All</Link>
        </section>
    );
}