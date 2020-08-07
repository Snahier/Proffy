import React, { TextareaHTMLAttributes } from "react"
import { TextareaSc } from "./styles"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextareaSc className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextareaSc>
  )
}
export default Textarea
