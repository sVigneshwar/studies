import Button from "./Day4/Button";
import Input from "./Day4/Input";
import Toggle from "./Day4/Toggle";

export default function App() {
  return (
    <div>
      <h1>test</h1>
      <Input />
      <Button variant="primary" label="Primary Button" />
      <Toggle label="Toggle Button" defaultOn={true} />
    </div>
  )
}
