import React from 'react'
import { Flex, Heading, Box } from '@rebass/emotion'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <Flex flexWrap="wrap">
      <Heading width={1 / 8}>Name</Heading>
      <Heading width={1 / 8}>Week #1</Heading>
      <Heading width={1 / 8}>Week #2</Heading>
      <Heading width={1 / 8}>Week #3</Heading>
      <Heading width={1 / 8}>Week #4</Heading>
      <Heading width={1 / 8}>Week #5</Heading>
      <Heading width={1 / 8}>Week #6</Heading>
      <Heading width={1 / 8}>Week #7</Heading>
      <Box width={1 / 8}>Tesali</Box>
      <Box width={1 / 8}>
        <Link to="/report/1">96</Link>
      </Box>
      <Box width={1 / 8}>
        <Link to="/report/2">96</Link>
      </Box>
      <Box width={1 / 8}>
        <Link to="/report/3">96</Link>
      </Box>
      <Box width={1 / 8}>
        <Link to="/report/4">96</Link>
      </Box>
      <Box width={1 / 8}>
        <Link to="/report/5">96</Link>
      </Box>
      <Box width={1 / 8}>
        <Link to="/report/6">96</Link>
      </Box>
      <Box width={1 / 8}>
        <Link to="/report/7">96</Link>
      </Box>
    </Flex>
  )
}

export default History
