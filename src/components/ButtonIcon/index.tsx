import { TouchableOpacityProps } from "react-native";

import { Container, Icon, ButtonIconTypeStylesProps } from "./styles";

type Props = TouchableOpacityProps & {
  icon: string;
  type?: ButtonIconTypeStylesProps;
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      
    </Container>
  )
}