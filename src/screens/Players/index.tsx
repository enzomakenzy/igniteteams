import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Alert, FlatList } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PLayerCard";

import { Container, Form, HeaderList, NumbersOfPlayers} from "./styles";

import { AppError } from "@utils/AppError";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/plaerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Nova pessoa", "Informe o nome da pessoa para adicionar");
    }

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(newPlayer, group)
      fetchPlayersByTeam();
    } catch(error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar")
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)
    } catch(error) {
      console.log(error);
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas do time selecionado");
    }
  }

  useEffect(() => {
    console.log("useEffect executou!")
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title={group}
        subtitle="adicione a galera e sepre os itens"
      />

      <Form>
        <Input 
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add" 
          onPress={handleAddPlayer}
        /> 
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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name} 
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