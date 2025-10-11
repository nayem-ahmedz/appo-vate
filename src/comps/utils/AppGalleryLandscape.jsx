import { use, useEffect, useState } from "react";
import CardLandscape from "../card/CardLandscape";
import { getCart, removeFromCart } from "./manageLocalStorage";

export default function AppGalleryLandscape({ dataPromise }) {
    const data = use(dataPromise);
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const cart = getCart();
        const installedApp = data.filter(d => cart.includes(d.id));
        setApps(installedApp);
    }, []);
    const removeApp = (appId) => {
        const filteredApp = apps.filter(app => app.id !== appId);
        setApps(filteredApp);
        removeFromCart(appId);
    }
    return (
        <section className="my-10 flex gap-4 flex-col">
            {
                apps.map(app => <CardLandscape key={app.id} app={app} removeApp={removeApp} />)
            }
        </section>
    );
}