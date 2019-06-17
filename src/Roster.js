import React from 'react'
import { Flex, Card } from '@rebass/emotion'
import Team from './Team'

const Roster = () => {
  return (
    <Flex flexWrap="wrap">
      <Card width={1 / 4}>
        <Team progression />
      </Card>
      <Card width={1 / 4}>
        <Team flex />
      </Card>
      <Card width={1 / 4}>
        <Team trial />
      </Card>
      <Card width={1 / 4}>
        <Team unassigned />
      </Card>
    </Flex>
  )
}

export default Roster
