import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Flex, Box } from '@rebass/emotion'
import Summary from './Summary'
import Report from './Report'
import Roster from './Roster'
import History from './History'

function App() {
  return (
    <Router>
      <Flex flexWrap="wrap">
        <Box width={1 / 3}>
          <Link to="/">Summary</Link>
        </Box>
        <Box width={1 / 3}>
          <Link to="/roster">Roster</Link>
        </Box>
        <Box width={1 / 3}>
          <Link to="/history">History</Link>
        </Box>
      </Flex>
      <Route path="/" exact component={Summary} />
      <Route path="/report/:id" component={Report} />
      <Route path="/roster" component={Roster} />
      <Route path="/history" component={History} />
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
