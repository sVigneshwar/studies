import { useState, useReducer } from 'react'
import CounterApp from './testing-projects/counter-app/counter-app'
import Todo from './testing-projects/todo/todo'
import Todo2 from './testing-projects/todo2/todo'
import ChatApp from './testing-projects/chat-app/chat-app'
import Posts from './testing-projects/useeffect-test/1'
import WindowWidth from './testing-projects/useeffect-test/2'
import CounterAndTheme from './testing-projects/usememo-test/usememo'
import CounterAndTheme2 from './testing-projects/usecallback-test/usecallback'
import ThemeToggle from './testing-projects/usecontext-test/usecontext'
import UseContextApp from './testing-projects/usecontext-test2/usecontext-app'
import UseRef from './testing-projects/useref-test/useref'
import Customhook from './testing-projects/customhook-test/Customhook'
import AdvancedReactTopics from './testing-projects/3-advanced-react-topics/AdvancedReactTopics'
import Counter from './testing-projects/redux-test/Counter'

export default function App() {
  return(
    <>
    {/* <CounterApp /> */}
    {/* <Todo /> */}
    {/* <Todo2 /> */}
    {/* <ChatApp /> */}
    {/* <Posts /> */}
    {/* <WindowWidth /> */}
    {/* <CounterAndTheme /> */}
    {/* <CounterAndTheme2 /> */}
    {/* <ThemeToggle /> */}
    {/* <UseContextApp /> */}
    {/* <UseRef /> */}
    {/* <Customhook /> */}
    {/* <AdvancedReactTopics /> */}
    <Counter />
    </>
  )
}