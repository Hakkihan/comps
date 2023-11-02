// import { useState, useEffect } from "react";
import Button from '../components/button';
// import useCounter from '../hooks/use-counter';
import Panel from '../components/panel';

// import { useState } from 'react';
import { useReducer } from 'react';
import produce from 'immer';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD  = 'changeValueToAdd';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'addValueCoCount';

const reducer = (state, action) => {
    ////REMEMBER TO ALWAYS RETURN SOMETHING, OTHERWISE THE STATE WILL BECOME UNDEFINED
    switch(action.type) {
        case INCREMENT_COUNT: 
            // return { ...state, count: state.count + 1 };
            state.count = state.count + 1; 
            return;

        case DECREMENT_COUNT: 
            // return { ...state, count: state.count - 1 };
            state.count = state.count - 1; 
            return;

        case SET_VALUE_TO_ADD:      
            // return {  ...state, valueToAdd : action.payload };
            state.valueToAdd = action.payload;
            return;

        case ADD_VALUE_TO_COUNT:      
            // return {  ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
            state.count = state.count + state.valueToAdd; state.valueToAdd = 0; 
            return;
        default: 
            // return state; //REMEMBER TO ALWAYS RETURN SOMETHING, OTHERWISE THE STATE WILL BECOME UNDEFINED
            return;
    }
};

function CounterPage({initialCount}) {
    const [state, dispatch] = useReducer(produce(reducer), { count: initialCount , valueToAdd : 0 });
    // const {count, increment} = useCounter(initialCount);

    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        // setCount(count + 1);
        dispatch({ type: INCREMENT_COUNT});
    };
    const decrement = () => {
        // setCount(count - 1);
        dispatch({ type: DECREMENT_COUNT});
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0 ; //event.target.value returns a string representation of the value. Also, the || 0 is to avoid
                                                        // is just to avoid bugs involving parseInt('') of an empty string which returns NaN (not a number)
        // setValueToAdd(value);

        dispatch({ type: SET_VALUE_TO_ADD, payload: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({ type: ADD_VALUE_TO_COUNT})
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };


    return <Panel className="m-3">
        <h1 className="text-lg">Count is: {state.count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment}>Click increment</Button>
            <Button onClick={decrement}>Click decrement</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input value={state.valueToAdd || '' } onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
            <Button>Add it!</Button>

        </form>
        
    </Panel>

}

export default CounterPage;