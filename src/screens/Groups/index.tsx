import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

import { Container} from "./styles";

export function Groups() {
  return (
    <Container>
        <Header />

        <Hightlight
          title="Turmas"
          subtitle="jogue com a sua turma"
        />

        <GroupCard title="Galera do Ignite" /> 
        {/* Só deu pra por o onPress por causa que eu passei os tipos do touchableOpacity la no GroupCard */}
    </Container>
  )
}
