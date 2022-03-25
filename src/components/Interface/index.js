/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react'

import { Wrapper, Title } from './styled'

const getValue = ({ entry, sum }) => {
  if (entry === '') {
    if (sum === '') {
      return '0'
    }
    return sum
  }
  return entry
}

const getInterface = ({ entry, sum }) => {
  const value = getValue({ entry, sum })
  const splited = value.split('.')
  const primary = splited[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const secondary = splited.length > 1 ? ',' + splited[1] : ''

  return primary + secondary
}

const Interface = ({ entry, sum }) => {
  const title = getInterface({ entry, sum })

  return (
    <Wrapper>
      <Title>
        { title }
      </Title>
    </Wrapper>
  )
}

export default Interface