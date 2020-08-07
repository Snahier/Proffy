import React from "react"
import { Container } from "./styles"
import { Image } from "react-native"
import landingImg from "../../assets/images/landing.png"

export default function Landing() {
  return (
    <Container>
      <Image source={landingImg} />
    </Container>
  )
}
