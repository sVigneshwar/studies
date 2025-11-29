import React, { useEffect } from 'react'
import Toggle from './test/day2/Toggle'
import Component from './test/day3/Component'
import Search from './test/day5/Search'
import Task from './test/day5/Task'
import Formikform from './test/day6/Formikform'
import RHF from './test/day6/RHF'
import Day7 from './test/day7/Day7'
import Day8 from './test/day8/redux/Day8'
import { store } from './test/day8/redux/store'
import {Provider} from 'react-redux'

export default function App() {

  return (
    <div>
      {/* <Day7 /> */}
      <Provider store={store}>
        <Day8 />
      </Provider>
    </div>
  )
}
