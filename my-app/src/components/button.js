import React from 'react'



const Button =(props)=>{

return (
    <input onClick={props.onClick} type="button" value={props.value}/>
)
}
export default Button