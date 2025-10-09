export default function Apps() {
    return (
        <section className="containerr">
            <h2 className='text-3xl md:text-5xl text-[#001931] font-bold mb-4 text-center'>Our All Applications</h2>
            <p className="text-[#627382] text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
            <div>
                <h4>(132) Apps Found</h4>
                <SearchBar />
            </div>
        </section>
    );
}

function SearchBar() {
    return (
        <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
        </label>
    );
}