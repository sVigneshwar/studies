import type React from "react"

type ButtonPropType = {
  variant: 'primary' | 'secondary'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export default function Button({variant, children, ...rest}: ButtonPropType) {
  return (
    <button className={variant} {...rest}>{children}</button>
  )
}
