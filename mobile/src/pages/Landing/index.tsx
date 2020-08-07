import React from "react"
import {
  Banner,
  Title,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
  TotalConnections,
} from "./styles"
import landingImg from "../../assets/images/landing.png"
import studyIcon from "../../assets/images/icons/study.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import heartIcon from "../../assets/images/icons/heart.png"
import { Bold, Container } from "../../styles/globalStyles"
import { Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function Landing() {
  const { navigate } = useNavigation()

  function handleNavigateToGiveClassesPage() {
    navigate("GiveClasses")
  }

  function handleNavigateToStudyPages() {
    navigate("Study")
  }

  return (
    <Container>
      <Banner source={landingImg} resizeMode="contain" />
      <Title>
        Seja bem-vindo, {"\n"}
        <Bold>O que deseja fazer?</Bold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalConnections>
        Total de 285 conexões já realizadas <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  )
}
