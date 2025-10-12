import React, { useEffect, useState } from 'react'
import AdvancedReactTopics1 from './AdvancedReactTopics1'
import AdvancedReactTopics2 from './AdvancedReactTopics2'
import AdvancedReactTopics3 from './AdvancedReactTopics3'
import AdvancedReactTopics4 from './AdvancedReactTopics4'
import { ErrorBoundary } from './AdvancedReactTopics5'

export default function AdvancedReactTopics() {

  return (
    <>
    <AdvancedReactTopics1 />
    <AdvancedReactTopics2 />
    <AdvancedReactTopics3 />
    <AdvancedReactTopics4 />
    <ErrorBoundary />
    </>
  )
}
