import React from 'react'
import Calculator from './calculator'

const CalculatorTitle = (props)=>{
    return(
        <div className="calculator-title">
        {props.title}
        </div>
    )
}
export default CalculatorTitle;