import AllApps from "../comps/apps/AllApps";

export default function Apps() {
    return (
        <section className="containerr px-4">
            <title>All available Apps | Appovate</title>
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Our All Applications</h2>
            <p className="text-[#627382] text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
            <AllApps />
        </section>
    );
}