export const useCounter = () => {
    const [count, setCount] = React.useState(0)
    const [amount, setAmount] = React.useState(0)
    const increment = () => setCount(count + 1)
    const addAmount = () => setCount(amount)
    const changeAmount = (value) => setAmount(parseInt(value))
    return { count, amount, increment, addAmount, changeAmount }
}