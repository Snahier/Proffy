import React, { InputHTMLAttributes } from "react"
import { InputSc } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <InputSc className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputSc>
  )
}
export default Input
