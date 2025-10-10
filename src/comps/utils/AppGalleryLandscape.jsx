import { useState } from "react";
import CardLandscape from "../card/CardLandscape";

export default function AppGalleryLandscape({ appsData }) {
    const [apps, setApps] = useState(appsData);
    return (
        <section className="my-10 flex gap-4 flex-col">
            {
                apps.map(app => <CardLandscape key={app.id} app={app} />)
            }
        </section>
    );
}