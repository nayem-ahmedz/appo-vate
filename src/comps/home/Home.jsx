import Banner from './Banner';
import Goal from './Goal';
import Newsletter from './Newsletter';
import Stat from './Stat';
import TrendingApps from './TrendingApps';

function Home(){
    return(
        <section>
            <Banner />
            <Stat />
            <TrendingApps />
            <Goal />
            <Newsletter />
        </section>
    );
}

export default Home;