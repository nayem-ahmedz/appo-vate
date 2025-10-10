import { useState } from "react";
import Card from "../card/Card";

export default function AppGallery({ appsData }) {
    const [apps, setApps] = useState(appsData);
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                apps.map(app => <Card key={app.id} app={app} />)
            }
        </section>
    );
}