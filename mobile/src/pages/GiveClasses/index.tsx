import React from "react"
import { Container } from "../../styles/globalStyles"
import {
  ImgBackground,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "./styles"
import giveClassesBGImg from "../../assets/images/give-classes-background.png"
import { useNavigation } from "@react-navigation/native"

export default function GiveClasses() {
  const { goBack } = useNavigation()

  function handleNavigateBack() {
    goBack()
  }

  return (
    <Container>
      <ImgBackground source={giveClassesBGImg} resizeMode="contain">
        <Title>Quer ser um proffy?</Title>
        <Description>
          Para começar você precisa se cadastrar na nossa plataforma web.
        </Description>
      </ImgBackground>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  )
}
