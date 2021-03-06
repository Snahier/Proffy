import styled from "styled-components/native"
import { RectButton } from "react-native-gesture-handler"

export const Banner = styled.Image`
  width: 100%;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: "Poppins_400Regular";
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
`
export const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #333;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`
export const ButtonPrimary = styled(Button)`
  background-color: #9871f5;
`
export const ButtonSecondary = styled(Button)`
  background-color: #04d361;
`
export const ButtonText = styled.Text`
  font-family: "Archivo_700Bold";
  color: #fff;
  font-size: 20px;
`

export const TotalConnections = styled.Text`
  font-family: "Poppins_400Regular";
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`
