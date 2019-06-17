import React from 'react'
import { Flex, Heading, Box } from '@rebass/emotion'

const Report = () => {
  return (
    <Flex flexWrap="wrap">
      <Heading width={1 / 7}>Name</Heading>
      <Heading width={1 / 7}>Parse</Heading>
      <Heading width={1 / 7}>Avoidable Damage %</Heading>
      <Heading width={1 / 7}>Potions Used %</Heading>
      <Heading width={1 / 7}>Healthstones Used %</Heading>
      <Heading width={1 / 7}>Early Deaths %</Heading>
      <Heading width={1 / 7}>Score</Heading>
      <Box width={1 / 7}>Tesali</Box>
      <Box width={1 / 7}>90</Box>
      <Box width={1 / 7}>3</Box>
      <Box width={1 / 7}>200</Box>
      <Box width={1 / 7}>100</Box>
      <Box width={1 / 7}>0</Box>
      <Box width={1 / 7}>96</Box>
    </Flex>
  )
}

export default Report
