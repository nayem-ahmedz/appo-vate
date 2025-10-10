import { Suspense } from 'react';
import Banner from './Banner';
import Stat from './Stat';
import TrendingApps from './TrendingApps';
import Loading from '../utils/Loading';

const dataPromise = fetch('/data.json').then(res => res.json());

function Home(){
    return(
        <section>
            <Banner />
            <Stat />
            <Suspense fallback={<Loading />}>
                <TrendingApps dataPromise={dataPromise} />
            </Suspense>
        </section>
    );
}

export default Home;