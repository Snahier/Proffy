import React from "react"
import { PageHeaderContainer, TopBar, Title } from "./styles"
import { Image } from "react-native"
import backIcon from "../../assets/images/icons/back.png"
import logoImage from "../../assets/images/logo.png"
import { BorderlessButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate("Landing")
  }

  return (
    <PageHeaderContainer>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>
    </PageHeaderContainer>
  )
}

export default PageHeader
