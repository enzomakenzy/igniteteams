import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
}

/* 
  O ...rest funciona como se fosse todos os outros parametros que podem vir, 
  No caso os que podem vir no TouchableOpacityProps, eu vou permitir aceitar no meu Groupcard e aceitar no meu container
  Lembrando que esse container em questão é um TouchbleOpacity, então ele iria aceitar tudo
*/
export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  )
}