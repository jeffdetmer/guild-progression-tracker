import React from 'react'
import { Flex, Heading, Box } from '@rebass/emotion'

const Team = props => {
  const teamType = (() => {
    if (props.progression) {
      return 'progression'
    } else if (props.flex) {
      return 'flex'
    } else if (props.trial) {
      return 'trial'
    }
    return 'unassigned'
  })()
  return (
    <Flex flexWrap="wrap">
      <Heading width={1 / 1}>{teamType}</Heading>
      <Heading width={1 / 2}>Name</Heading>
      <Heading width={1 / 2}>Role</Heading>
      <Box width={1 / 2}>Tesali</Box>
      <Box width={1 / 2}>DPS</Box>
      <Box width={1 / 2}>Tesali</Box>
      <Box width={1 / 2}>DPS</Box>
      <Box width={1 / 2}>Tesali</Box>
      <Box width={1 / 2}>DPS</Box>
      <Box width={1 / 2}>Tesali</Box>
      <Box width={1 / 2}>DPS</Box>
    </Flex>
  )
}

export default Team
