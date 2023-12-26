import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px'}}>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <div style={{fontSize: '24px'}}>{count}</div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;
