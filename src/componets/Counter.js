import React, { useState } from 'react';
import '../styles/index.css';
import '../styles/counter.css';
import './Button';
import Button from './Button';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleSubtract = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleAdd = () => {
        setCount(count + 1);
    };

    let color = '#fff';
    if (count >= 1) {
        color = "yellow"
    } else if (count < 0) {
        color = "red"
    } else {
        color = "white"
    }

    return (
        <section className=" counter-section --flex-center">
            <div className="container counter --card --center-all">
                <h1 className="--text-light">
                    Counter
            </h1>
                <p className="count --my2 --text-md --text-light --fw-bold" style={{ color: color }}>{count}</p>

                <div className="buttons">
                    <Button name={'Subtract'} style={"--btn --btn-danger"} handleClick={handleSubtract} />
                    <Button name={'Reset'} style={"--btn"} handleClick={handleReset} />
                    <Button name={'Add'} style={"--btn --btn-success"} handleClick={handleAdd} />
                </div>
            </div>
        </section>
    )
}
