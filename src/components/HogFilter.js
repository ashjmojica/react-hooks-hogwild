import React from 'react';

function HogFilter({setIsGreasy, setIsSorted}) {
    return (
        
        <div>
            <label>Filter Hogs</label>
            <input onChange = {(e) => setIsGreasy(e.target.checked)} type = "checkbox"></input>
            <select onChange = {(e) => setIsSorted(e.target.value)}>
                <option>All</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </div>
    )
}

export default HogFilter;