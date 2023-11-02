const data = [
    { name: 'Tomato', cost: 10, weight: 5},
    { name: 'Carrot', cost: 15, weight: 2},
    { name: 'Onion', cost: 5, weight: 7},

];

function getSortValue(veg) {
    return veg.cost;
}

const sortOrder = 'asc';

data.sort((a,b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    const reverseOrder = sortOrder === 'asc' ? 1 : -1;

    if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
    }
    else{
        return (valueA - valueB) * reverseOrder;
    }
    
});