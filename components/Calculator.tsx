import React from 'react'
import { useState } from 'react'
import { evaluate, number } from 'mathjs'

export const rows = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    [0],
]
export const operations = ['+', '-', '*', '/']
export const equalSign = '='

export const Calculator = () => {
    const [value, setValue] = useState('')
    const createHandleNumber = (number: number | string) => setValue(prev => prev.concat(number.toString()))
    const calculateOperation = () => setValue(prev => evaluate(prev).toString())
    return (
        <section>
            <h1>Calculator</h1>
            <input value={value} />
            <div role='grid'>
                {
                    rows.map((row, index) => 
                        <div role='row' key={index}>
                            {row.map(number => 
                            <button 
                            key={number}
                            onClick={() => createHandleNumber(number)} 
                            >
                                {number}
                            </button>
                )}
                        </div>
                    )
                }
                {
                    operations.map(operation => 
                        <button 
                        key={operation}
                        onClick={() => createHandleNumber(operation)} 
                        >
                            {operation}
                        </button>
                    )
                }
                <button onClick={() => calculateOperation()}>{equalSign}</button>
            </div>
        </section>
    )
}