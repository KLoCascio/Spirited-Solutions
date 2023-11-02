import React, { useState } from "react"

export default function Search({onSearch}) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };


    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Search drinks..."
            value={searchTerm}
            onChange={handleChange}
        />
        <button onClick={handleSearch}>Submit</button>
        </div>
    )
}