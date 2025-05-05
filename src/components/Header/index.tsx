import { useNavigation } from "@react-navigation/native"

import { Container, Logo, BackButton, BackIcon } from "./styles"

import logoimg from "@assets/logo.png"

type Props = {
  showBackButton?: boolean //lembrando que a interrogação faz com que seja opcional
}

export function Header({showBackButton = false}: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {
        showBackButton && // se o showBackButton for verdadeiro, então mostre o backbutton
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoimg} />
    </Container>
  )
}