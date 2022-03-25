/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react'

import Wrapper from './styled'

const Button = ({ children, ...rest }) => (
  <Wrapper { ...rest }>
    { children }
  </Wrapper>
)

export default Button