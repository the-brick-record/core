import React from 'react'
import styled from 'styled-components'

import Search from './containers/Search'
import './Style.css';

const App = () => (
  <Div>
    <Search />
  </Div>
)

const Div = styled.div`
  padding: 2rem;
`
export default App
