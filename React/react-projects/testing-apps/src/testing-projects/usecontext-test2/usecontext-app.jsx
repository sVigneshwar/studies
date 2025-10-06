import React, { useState } from 'react'
import UseContextMain from './usecontext-main'
import UseContextContent from './usecontext-content';
import UseContextButton from './usecontext-button';

export default function UseContextApp() {
  return (
    <UseContextMain>
        <UseContextContent />
        <UseContextButton />
    </UseContextMain>
  )
}
