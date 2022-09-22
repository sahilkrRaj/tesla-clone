import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title="Model S"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
        <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
        <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
        <Section
        title="Lower Cost Solar Panels In America"
        description="Money-Back Gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Online"
        rightBtnText="Learn More"
        />
        <Section
        title="Lower Cost Solar Panels In America"
        description="Money-Back Gurantee"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Online"
        rightBtnText="Learn More"
        />
        <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order Online"
        />
    </Container>
  )
}

export default Home

const Container=styled.div`
height: 100vh;
`
