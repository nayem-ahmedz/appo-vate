import { useEffect, useState } from "react";
import SearchBar from "../utils/SearchBar";
import Loading from "../utils/Loading";
import Card from "../card/Card";
import AppErrorImage from '../../assets/App-Error.png';

export default function AllApps() {
    const [apps, setApps] = useState([]);
    const limit = 8;
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    // set total apps from db
    const [totalApps, setTotalApps] = useState(0);
    // manage loading state
    const [loading, setLoading] = useState(true);
    // manage sort var
    const [ sort, setSort ] = useState('ratingAvg'); // initial reveiws
    const [ order, setOrder ] = useState('desc'); // order by higher ratingAvg
    // search test
    const [ search, setSearch ] = useState('');
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_BACKEND_URL}/apps?limit=${limit}&skip=${currentPage * limit}&sort=${sort}&order=${order}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                // we will receive {total, apps}
                setApps(data.apps);
                // total page = total apps / limit
                setTotalPages(Math.ceil(data.total / limit));
                if(search){
                    setTotalApps(data.apps.length);
                } else{
                    setTotalApps(data.total);
                }
                setLoading(false);
            });
    }, [currentPage, sort, order, search]);
    // handling sort and order
    const handleSort = e => {
        const value = e.target.value.split('-');
        const sort = value[0];
        const order = value[1];
        console.log(sort, order)
        setSort(sort);
        setOrder(order);
        setCurrentPage(0);
    }
    // handle search
    const handleSearch = (e) => setSearch(e.target.value);
    return (
        <>
            <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mt-10">
                <select defaultValue="Sort Apps" onChange={handleSort} className="select">
                    <option disabled={true}>Sort Apps</option>
                    <option value='size-asc'>Size : Low-High</option>
                    <option value='size-desc'>Size : High-Low</option>
                    <option value='ratingAvg-asc'>Ratings : Low-High</option>
                    <option value='ratingAvg-desc'>Ratings : High-Low</option>
                    <option value='downloads-asc'>Downloads : Low-High</option>
                    <option value='downloads-desc'>Downloads : High-Low</option>
                </select>
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
                <button className="btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>Prev</button>
                <div className="join">
                    {
                        [...Array(totalPages).keys()].map(el => <button key={el} onClick={() => setCurrentPage(el)} className={`join-item btn ${currentPage === el && 'btn-primary'}`}> {el + 1} </button>)
                    }
                </div>
                <button className="btn" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages - 1}>Next</button>
            </div>
        </>
    );
}