import { InputHTMLAttributes } from 'react'

export interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: ReactNode
}
