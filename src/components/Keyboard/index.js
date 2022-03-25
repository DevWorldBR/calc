/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react'

import Button from '../Button'

import Wrapper from './styled'
import buttonList from './constants'

const Keyboard = ({ actions }) => (
  <Wrapper>
    {
      buttonList.map(
        item => (
          <Button onClick={() => actions[item.type](item.value) }>
            {item.value}
          </Button>
        )
      )
    }
  </Wrapper>
)

export default React.memo(Keyboard)
