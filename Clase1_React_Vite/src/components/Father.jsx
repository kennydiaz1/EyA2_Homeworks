import React, { useState, useCallback } from 'react';
import {Son} from './Son';

export const Father = () => {
    const list = [2, 4, 6, 8, 10]
    const [valor, setValor] = useState(0)

    const increment = (num) => {
        setValor(valor + num)
    }
    return (
        <div>
            <h1>Father</h1>
            <p> Total: {valor}</p>
            <hr />
            {
                list.map((item) => {
                    return (
                        <Son
                            key={idk}
                            numero={n}
                            increment={increment}
                        />
                    )
                })
            }
        </div>
    )
}
