import { use, useState } from "react";
import Card from "../card/Card";

export default function TrendingAppsGallery({ dataPromise }) {
    const data = use(dataPromise);
    const trendingApps = data.sort((a, b) => b.downloads - a.downloads).slice(0, 8);
    const [apps, setApps] = useState(trendingApps);
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                apps.map(app => <Card key={app._id} app={app} />)
            }
        </section>
    );
}