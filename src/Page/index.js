/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react'

import useCalc from '../Hooks/useCalc'
import Interface from '../components/Interface'
import Keyboard from '../components/Keyboard'

import Wrapper from './styled'

const Main = () => {
  const { sum, entry, actions } = useCalc()

  return (
    <Wrapper>
      <Interface entry={entry} sum={sum} />
      <Keyboard actions={actions} />
    </Wrapper>
  )
}

export default Main