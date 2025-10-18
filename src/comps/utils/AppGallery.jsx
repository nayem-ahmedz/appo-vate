import { use, useEffect, useState } from "react";
import Card from "../card/Card";
import AppErrorImage from '../../assets/App-Error.png';

export default function AppGallery({ dataPromise, updateTotalApps, search }) {
    const data = use(dataPromise);
    const [apps, setApps] = useState([]);
    useEffect(() => {
        if (search) {
            const matched = data.filter(d => d.title.toLowerCase().includes(search.toLowerCase()));
            updateTotalApps(matched.length);
            setApps(matched);
        } else {
            updateTotalApps(data.length);
            setApps(data);
        }
    }, [search]);
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                apps.length === 0 ? <div className="col-span-full text-center">
                    <img src={AppErrorImage} alt='error image' className='w-full max-w-md mx-auto' />
                    <h1 className="text-3xl md:text-5xl font-bold mt-4">No App Found</h1>
                    <p className="py-3 md:py-6 text-[#627382] md:text-xl">Try searching something else</p>
                </div> : apps.map(app => <Card key={app.id} app={app} />)
            }
        </section>
    );
}