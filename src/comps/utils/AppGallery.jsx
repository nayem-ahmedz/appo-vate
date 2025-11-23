import { use, useEffect, useState } from "react";
import AppErrorImage from '../../assets/App-Error.png';
import Card from "../card/Card";

export default function AppGallery({ dataPromise, updateTotalApps, search }) {
    // const data = use(dataPromise);
    // const [apps, setApps] = useState([]);
    // useEffect(() => {
    //     if (search) {
    //         const matched = data.filter(d => d.title.toLowerCase().includes(search.toLowerCase()));
    //         updateTotalApps(matched.length);
    //         setApps(matched);
    //     } else {
    //         updateTotalApps(data.length);
    //         setApps(data);
    //     }
    // }, [search]);
    return (
        <h1>app gallery</h1>
    );
}