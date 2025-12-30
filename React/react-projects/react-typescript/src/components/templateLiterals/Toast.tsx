
type horizontalProp = 'left' | 'center' | 'right'
type verticalProp = 'top' | 'center' | 'bottom'

type ToastPropType = {
    position: Exclude<`${horizontalProp}-${verticalProp}`, 'center-center'> | 'center'
}

export default function Toast({position}: ToastPropType) {
  return (
    <div>
      Position is {position}
    </div>
  )
}
