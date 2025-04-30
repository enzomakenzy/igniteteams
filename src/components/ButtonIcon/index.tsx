import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import { Container, Icon, ButtonIconTypeStylesProps } from "./styles";


type Props = TouchableOpacityProps & {
  // criando um tipo baseado nos nomes aceitados para os icones 
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStylesProps;
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon 
        name={icon}
        type={type}
      />
    </Container>
  )
}