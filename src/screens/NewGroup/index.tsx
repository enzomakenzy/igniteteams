import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";

import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();
  
  async function handleNew() {
    try {
      if (group.trim().length === 0) { // trim tira os espaços
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group }); // é como se eu tivesse: { group: group } 

    } catch(error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message)
      } else {
        Alert.alert("Novo Grupo", "Não foi Possível criar um novo grupo.")
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar"
        />

        <Input 
          placeholder="Nome da turma "
          onChangeText={setGroup} // é como se fosse: (e) => setGroup(e)
        />

        <Button 
          title="Criar"
          style={{marginTop: 20}}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}