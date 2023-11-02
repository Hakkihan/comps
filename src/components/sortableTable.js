import Table from "./table";
// import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

import useSort from "../hooks/use-sort";

function SortableTable(props) {   

    const {config, data} = props ; 
    
    const {setSortColumn, sortBy, sortOrder, sortedData} = useSort(data, config);


    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={ setSortColumn.bind(this, column.label)}> 
                                        <div className="flex items-center">
                                            {getIcons(column.label, sortBy, sortOrder)}
                                            {column.label}
                                        </div> 
                        </th> 
                        //impoRtant question for learning exercise: why do we need to use an arrow function in the setSortColumn
                            //above?
        };

    });

    

    //...props has a config property but because the config property is later 
    //being set in this element to {updatedConfig}, it gets overwritten
    return ( <div>  {sortOrder} - {sortBy}   <Table {...props} data={sortedData} config={updatedConfig}/>     </div> ) ;
}

function getIcons(label, sortBy, sortOrder) {
    if(label !== sortBy){
        return <div><GoArrowSmallUp/>
                    <GoArrowSmallDown/>
                </div>;
    }

    if(sortOrder === null){
        return <div><GoArrowSmallUp/>
                    <GoArrowSmallDown/>
                </div>;
    } else if (sortOrder === 'asc') {
        return <div><GoArrowSmallUp/>     
                </div>;
    } else if(sortOrder === 'desc') {
        return <div>
                    <GoArrowSmallDown/>
                </div>;
    }
}

export default SortableTable;