import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementAsync, incrementByAmount} from "../features/counter/counterSlice";
import '../styles/counter.css'

const Counter = () => {
    const [value, setValue] = useState(2);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px'}}>
                <button
                    className='btn'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <div style={{fontSize: '24px'}}>{count}</div>
                <button
                    className='btn'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div>
                <input
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    style={{width: '70px'}}
                    type="text"
                    placeholder='Num to add'/>
                <button
                    onClick={() => dispatch(incrementByAmount(+value) || 0)}
                    className='btn add'>
                    Add Amount
                </button>
                <button
                    className='btn add'
                    onClick={() => dispatch(incrementAsync(Number(value) || 0))}
                >
                    Add Async
                </button>

            </div>
        </div>
    );
};

export default Counter;
