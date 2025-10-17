import { use, useEffect, useState } from "react";
import CardLandscape from "../card/CardLandscape";
import { getCart, removeFromCart } from "./manageLocalStorage";

export default function AppGalleryLandscape({ dataPromise, updateAppsCount, sortType }) {
    const data = use(dataPromise);
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const cart = getCart();
        const installedApp = data.filter(d => cart.includes(d.id));
        updateAppsCount(installedApp.length);
        if(sortType === 'asc'){
            setApps(installedApp.sort((a, b) => a.downloads - b.downloads));
        } else if(sortType === 'desc'){
            setApps(installedApp.sort((a, b) => b.downloads - a.downloads))
        } else{
            setApps(installedApp);
        }
    }, [sortType]);
    const removeApp = (appId) => {
        const filteredApp = apps.filter(app => app.id !== appId);
        updateAppsCount(filteredApp.length);
        setApps(filteredApp);
        removeFromCart(appId);
    }
    return (
        <section className="my-10 flex gap-4 flex-col">
            {
                apps.length === 0 ? <div className="min-h-60 flex justify-center items-center">
                    <h3 className="text-2xl font-semibold">There is no installed apps!</h3>
                </div> : apps.map(app => <CardLandscape key={app.id} app={app} removeApp={removeApp} />)
            }
        </section>
    );
}