import { Input } from "@components/Input"
import { Header } from "@components/Header"
import { Filter } from "@components/Filter"
import { Highlight } from "@components/Highlight"
import { ListEmpty } from "@components/ListEmpty"
import { ButtonIcon } from "@components/ButtonIcon"
import { PlayerCard } from "@components/PLayerCard"

import { useState } from "react"
import { FlatList } from "react-native"

import { Container, Form, HeaderList, NumbersOfPlayers} from "./styles"
import { Button } from "@components/Button"

export function Players() {
  const [team, setTeam] = useState("Time A")
  const [players, setPlayers] = useState(["Rodrigo", "Diego", "Enzo", "Layza", "Gabriel", "Maria", "Paula", "Erik", "Marcia"])

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e sepre os itens"
      />
      

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" /> 
      </Form>

      <HeaderList>
        <FlatList 
          data={["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>
      
      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Não há pessoas nesse time."
          />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button 
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  )
}