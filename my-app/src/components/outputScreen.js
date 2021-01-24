import React from 'react'
import OutputScreenRow from './outputScreenRow'

const OutputScreen =(props)=>{
return(
    <div >
        <OutputScreenRow operation ={props.operation}/>
        <OutputScreenRow operation={props.result}/>
    </div>
)
}
export default OutputScreen