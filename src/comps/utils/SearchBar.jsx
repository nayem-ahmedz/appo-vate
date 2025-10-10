import { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState('');
    function handleChange(e){
        const value = e.target.value;
        setSearch(value);
    }
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
            <input type="search" defaultValue={''} name="searchKeys" onChange={handleChange} required placeholder="Search Apps" />
        </label>
    );
}

export default SearchBar;