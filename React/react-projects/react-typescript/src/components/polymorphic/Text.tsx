type TextOwnPropType<E extends React.ElementType> = {
    size: 'lg' | 'md' | 'sm'
    children: React.ReactNode,
    as?: E
}

type TextProps<E extends React.ElementType> = TextOwnPropType<E> & Omit<React.ComponentProps<E>, keyof TextOwnPropType<E>>
 
export default function Text<E extends React.ElementType = 'div'>({size, as, children}: TextProps<E>) {
    const Component = as || 'div'
  return (
    <Component className={size}>
        {children}
    </Component>
  )
}
