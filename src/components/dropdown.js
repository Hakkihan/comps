import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./panel";

function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef();

    //useEffect may optionally return a cleanup function
    useEffect(() => {
        
        const handler = (event) => {
            //divElement might be null, if the div element is not visible. Without this check, we are assuming that an element is assigned the divElement property. Seen in lots of professional projects.
            if(!divElement.current){
                return;
            }
            //if the dropdowns divElement !contains an event which is a click event (event.target being the divElement), then apply the if condition of setIsOpen(false)
            if(!divElement.current.contains(event.target)) {
                setIsOpen(false);
            };
        };

        document.addEventListener('click', handler, true);
        
        //cleanup function.
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    

    const handleClick = () => {
        setIsOpen((current) => !current);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };


    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
    });

    


    return( <div ref={divElement} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}>{value?.label || 'Select'} <GoChevronDown className="text-lg"/></Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;