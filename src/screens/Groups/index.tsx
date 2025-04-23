import { Header } from "@components/Header"
import { Container} from "./styles"
import { Hightlight } from "@components/Highlight"

export function Groups() {
  return (
    <Container>
        <Header />

        <Hightlight
          title="Turmas"
          subtitle="jogue com a sua turma"
        />
    </Container>
  )
}
