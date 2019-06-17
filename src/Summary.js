import React from 'react'
import { Flex, Heading, Box } from '@rebass/emotion'
import { Link } from 'react-router-dom'

const Summary = () => {
  return (
    <Flex flexWrap="wrap">
      <Heading width={1 / 3}>Name</Heading>
      <Heading width={1 / 3}>Latest Score</Heading>
      <Heading width={1 / 3}>Average Score</Heading>
      <Box width={1 / 3}>Tesali</Box>
      <Box width={1 / 3}>
        <Link to="/report/1">96</Link>
      </Box>
      <Box width={1 / 3}>
        <Link to="/history">96</Link>
      </Box>
    </Flex>
  )
}

export default Summary
