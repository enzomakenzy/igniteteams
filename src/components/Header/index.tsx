import { Container, Logo, BackButton, BackIcon } from "./styles"

import logoimg from "@assets/logo.png"

type Props = {
  showBackButton?: boolean //lembrando que a interrogação faz com que seja opcional
}

export function Header({showBackButton = false}: Props) {
  return (
    <Container>
      {
        showBackButton && // se o showBackButton for verdadeiro, então mostre o backbutton
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoimg} />
    </Container>
  )
}