import React, { useEffect } from 'react'
import Toggle from './test/day2/Toggle'
import Component from './test/day3/Component'
import Search from './test/day5/Search'
import Task from './test/day5/Task'
import Formikform from './test/day6/Formikform'
import RHF from './test/day6/RHF'
import Day7 from './test/day7/Day7'
import Day8 from './test/day8/redux/Day8'
import {Provider} from 'react-redux'
import Day8b from './test/day8/rtk/Day8b'
import {store} from './test/day8/rtk/store'
import Application from './test2/Application/Application'
import Skills from './test2/Skills/Skills'
import Counter from './test2/Counter/Counter'
import Counter2 from './test2/Counter2/Counter2'
import Multiplier from './test2/Counter2/Multiplier'

export default function App() {
  return (
    <div>
      {/* <Application /> */}
      {/* <Skills skills={["test","test2"]} /> */}
      {/* <Counter /> */}
      {/* <Counter2 prop={{count:0, increment: val => val+1, decrement: val => val-1}} /> */}
      <Multiplier calculate={(val) => val*2} />
    </div>
  )
}
