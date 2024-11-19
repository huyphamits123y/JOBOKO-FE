import { Input } from "antd"
import React, { useState } from 'react'
import { WrapperInputStyle } from "./style"
const InputForm = (props) => {
    // const [valueInput, setValueInput] = useState('')
    const { placeholder = 'Nhap text', ...rests } = props
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
        console.log(e.target.value)
    }
    return (

        <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />

    )

}
export default InputForm