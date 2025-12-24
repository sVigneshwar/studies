type HeadingProps = {
    children: string
}

export default function Heading(props: HeadingProps) {
  return (
    <h3>
        {props.children}
    </h3>
  )
}
