import { useEffect, useState } from "react";
import SearchBar from "../utils/SearchBar";
import Loading from "../utils/Loading";
import Card from "../card/Card";
import AppErrorImage from '../../assets/App-Error.png';

export default function AllApps() {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => setSearch(e.target.value);
    const [apps, setApps] = useState([]);
    const limit = 8;
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    // set total apps from db
    const [totalApps, setTotalApps] = useState(0);
    // manage loading state
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_BACKEND_URL}/apps?limit=${limit}&skip=${currentPage * limit}`)
            .then(res => res.json())
            .then(data => {
                // we will receive {total, apps}
                setApps(data.apps);
                // total page = total apps / limit
                setTotalPages(Math.ceil(data.total / limit));
                setTotalApps(data.total);
                setLoading(false);
            });
    }, [currentPage]);
    return (
        <>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <SearchBar handleSearch={handleSearch} />
                <h4 className="font-semibold text-2xl">{totalApps} Apps Found</h4>
            </div>
            {
                loading ? <Loading /> : <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                    {
                        apps.length === 0 ? <div className="col-span-full text-center">
                            <img src={AppErrorImage} alt='error image' className='w-full max-w-md mx-auto' />
                            <h1 className="text-3xl md:text-5xl font-bold mt-4">No App Found</h1>
                            <p className="py-3 md:py-6 text-[#627382] md:text-xl">Try searching something else</p>
                        </div> : apps.map(app => <Card key={app._id} app={app} />)
                    }
                </section>
            }
            <div className="flex justify-center">
                <div className="join">
                    {
                        [...Array(totalPages).keys()].map(el => <button key={el} onClick={() => setCurrentPage(el)} className={`join-item btn ${currentPage === el && 'btn-primary'}`}> {el + 1} </button>)
                    }
                </div>
            </div>
        </>
    );
}