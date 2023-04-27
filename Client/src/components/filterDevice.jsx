import React, { useState } from "react";
import Searching from "./searching";

const FilterDevice = ({ }) => {
    const [filterText, setFilterText] = useState('');


    return (
        <div>
            <Searching
                filterText={filterText}
                filterTextChange={setFilterText} />
        </div>
    )
}

export default FilterDevice