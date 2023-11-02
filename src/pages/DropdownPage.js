import Dropdown from '../components/dropdown';
import { useState } from 'react';

function DropdownPage() {

    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'},

    ];

    return( <div className="flex">

                <Dropdown options={options} value={selection} onChange={handleSelect}/>
            </div> )
}

export default DropdownPage;