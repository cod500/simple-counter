import React from 'react'

export default function Button({ name, style, handleClick }) {
    return (
        <div>
            <button className={style} onClick={handleClick} style={{ width: "90px" }}>
                {name}
            </button>
        </div>
    )
}
