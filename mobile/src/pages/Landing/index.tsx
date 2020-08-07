import React from "react"
import { Container, Banner, Title } from "./styles"
import landingImg from "../../assets/images/landing.png"
import { Bold } from "../../styles/globalStyles"

export default function Landing() {
  return (
    <Container>
      <Banner source={landingImg} resizeMode="contain" />
      <Title>
        Seja bem-vindo, {"\n"}
        <Bold>O que deseja fazer?</Bold>
      </Title>
    </Container>
  )
}
