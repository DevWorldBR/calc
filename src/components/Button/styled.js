/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import styled from 'styled-components'

const Wrapper = styled.button`
  width: 25%;
  min-width: 25%;
  font-size: 2rem;
  padding: 0.8rem;
  border: 0.1rem solid #ddd;
  background-color: #fff;
  outline: 0;
  &:hover {
    background-color: #cdcdcd;
    transition: 1s;
  }
`

export default Wrapper