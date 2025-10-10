import { use, useEffect, useState } from "react";
import Card from "../card/Card";

export default function AppGallery({ dataPromise, showTrending }) {
    const data = use(dataPromise);
    const [apps, setApps] = useState([]);
    useEffect(() => {
        if(showTrending){
        const trendingApps = data.sort((a, b) => b.downloads - a.downloads).slice(0, 8);
        setApps(trendingApps);
    } else{
        setApps(data);
    }
    }, []);
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                apps.map(app => <Card key={app.id} app={app} />)
            }
        </section>
    );
}