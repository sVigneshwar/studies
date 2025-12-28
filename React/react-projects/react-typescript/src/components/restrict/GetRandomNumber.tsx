type GetRandomNumberType = {
    number: number
}

type GetRandomNumberPositiveType = GetRandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type GetRandomNumberNegativeType = GetRandomNumberType & {
    isPositive?: never
    isNegative: boolean
    isZero?: never
}
type GetRandomNumberZeroType = GetRandomNumberType & {
    isPositive?: never
    isNegative?: never
    isZero: boolean
}

type GetRandomNumber = GetRandomNumberPositiveType | GetRandomNumberNegativeType | GetRandomNumberZeroType

export default function GetRandomNumber({number, isPositive, isNegative, isZero}: GetRandomNumber) {
  return (
    <div>
      {number} is {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
    </div>
  )
}
